const supertest = require('supertest');
const app = require('../app');
const aiServices = require('../services/ai.services');
const mongoose = require('mongoose');
const dbService = require('../db/dbconfig/db');

jest.mock('supertest');

beforeAll(async () => {
    await dbService.connectDB();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('POST /api/ai/chat', () => {
    test('api to return 200 success response', async () => {
        const mockRequest = {
            question: 'Hi',
        };
        const mockedResponse = {
            response: 'Hello! How can I assist you with your job search today?',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const jobAssistantSpy = jest.spyOn(aiServices, 'jobAssistant');
        await aiServices.jobAssistant(mockRequest.question);
        const res = supertest(app)
            .post('/api/ai/chat')
            .send(mockRequest)
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
        expect(jobAssistantSpy).toHaveBeenCalledWith(mockRequest.question);
    });

    test('api to return 400 bad request response', async () => {
        const mockedResponse = {
            timestamp: '2024-01-17T02:40:35.512Z',
            status: 400,
            error: 'Bad Request',
            message: [
                {
                    msg: 'Qustion is required',
                    param: 'question',
                    location: 'body',
                },
            ],
            path: '/api/ai/chat',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const res = supertest(app)
            .post('/api/ai/chat')
            .expect(400)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
    });
});

describe('POST /api/ai/job/application/details', () => {
    test('api to return 200 success response', async () => {
        const mockRequest = {
            message:
                'id: 134xs3deew3sw45, email: maheshnidugala@gmail.com, date:Sun, 21 May 2023 14:38:59 +0200 (CEST), Subject: Working Student / Intern (f/m/d) - Project Management, Company Logo Dear Mahesh Nidugala,Thank you for your application to Some Company. Youve taken the first step towards exploring a career with our company.Our Talent Acquisition Team will review your documents and let you know if we require additional information . We will keep you updated along the journey.',
        };
        const mockedResponse = {
            id: '134xs3deew3sw45',
            email: 'maheshnidugala@gmail.com',
            date: 'Sun, 21 May 2023 14:38:59 +0200 (CEST)',
            company: 'Some Company',
            position: 'Working Student / Intern (f/m/d) - Project Management',
            status: 'Application Submitted',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const jobApplicationAssistantSpy = jest.spyOn(aiServices, 'jobApplicationAssistant');
        await aiServices.jobApplicationAssistant(mockRequest.message);
        const res = supertest(app)
            .post('/api/ai/job/application/details')
            .send(mockRequest)
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
        expect(jobApplicationAssistantSpy).toHaveBeenCalledWith(mockRequest.message);
    });

    test('api to return 400 bad request response', async () => {
        const mockedResponse = {
            timestamp: '2024-01-17T02:40:35.512Z',
            status: 400,
            error: 'Bad Request',
            message: [
                {
                    msg: 'Message is required',
                    param: 'message',
                    location: 'body',
                },
            ],
            path: '/api/ai/job/application/details',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const res = supertest(app)
            .post('/api/ai/job/application/details')
            .expect(400)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
    });
});

describe('POST /api/ai/create-thread', () => {
    test('api to return 200 success response', async () => {
        const mockedResponse = {
            threadId: 'thad_5DlhCKYlx4iWYVT32rvds3',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const createThreadSpy = jest.spyOn(aiServices, 'createThread');
        await aiServices.createThread();
        const res = supertest(app)
            .post('/api/ai/create-thread')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
        expect(createThreadSpy).toHaveBeenCalledWith();
    });
});
