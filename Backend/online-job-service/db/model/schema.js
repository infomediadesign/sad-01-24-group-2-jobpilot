const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    id: { type: String, required: true },
    date: { type: Date, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    status: { type: String, required: true },
    email: { type: String, required: true },
});

const JobApplicationModel = mongoose.model('job_applications', jobApplicationSchema);

module.exports = { JobApplicationModel };
