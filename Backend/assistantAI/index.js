const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
const fsPromises = require('fs').promises;
require('dotenv').config();

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

let assistantDetails;
fsPromises.readFile('./assistant.json', 'utf8')
  .then(data => {
    assistantDetails = JSON.parse(data);
  })
  .catch(error => {
    console.error('Error reading assistant details:', error);
  });

app.post('/chat', async (req, res) => {
  try {
    const { question } = req.body;
    const thread = await openai.beta.threads.create();
    
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: question,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistantDetails.assistantId,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

    while (runStatus.status !== 'completed') {
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    const messages = await openai.beta.threads.messages.list(thread.id);
    const lastMessageForRun = messages.data
      .filter(message => message.run_id === run.id && message.role === 'assistant')
      .pop();

    if (lastMessageForRun) {
      res.json({ response: lastMessageForRun.content[0].text.value });
    } else {
      res.status(500).send('No response received from the assistant.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during chat processing.');
  }
});

app.post('/create-thread', async (req, res) => {
  try {
    const thread = await openai.beta.threads.create();
    res.json({ threadId: thread.id });
  } catch (error) {
    console.error('Error creating new thread:', error);
    res.status(500).send('Error creating new thread');
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
