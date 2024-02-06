const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    id: { type: String, required: true },
    date: { type: Date, required: true },
    company: { type: String, required: false },
    position: { type: String, required: false },
    status: { type: String, required: false },
    email: { type: String, required: false },
});

const JobApplicationModel = mongoose.model('job_applications', jobApplicationSchema);

module.exports = { JobApplicationModel };
