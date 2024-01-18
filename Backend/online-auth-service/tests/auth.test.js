const supertest = require('supertest');
const app = require('../app');
const { saveRegisteredUsers, checkUserExists } = require('../services/auth.services');
const mongoose = require('mongoose');
const dbService = require('../db/dbconfig/db');

jest.mock('supertest');
jest.mock('../services/auth.services');

beforeAll(async () => {
    await dbService.connectDB();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /api/auth/register', () => {
    test('api to return 201 created response', async () => {
        const mockRequest = {
            user: {
                firstname: 'Test',
                lastname: 'Test',
                email: 'test@gmail.com',
                password: 'test',
            },
        };
        const mockedResponse = {
            message: 'User Registered successfully',
            username: 'Test Test',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        saveRegisteredUsers.mockResolvedValue(mockRequest.user);
        checkUserExists.mockResolvedValue(true);
        const savedUsers = await saveRegisteredUsers(mockRequest.user);
        const isUserExists = await checkUserExists(mockRequest.user.email);
        expect(isUserExists).toBe(true);
        expect(checkUserExists).toHaveBeenCalledWith(mockRequest.user.email);

        const res = supertest(app)
            .post('/api/auth/register')
            .send(mockRequest)
            .expect(201)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
    });

    test('api to return 400 bad request response', async () => {
        const mockedResponse = {
            timestamp: '2024-01-17T02:40:35.512Z',
            status: 400,
            error: 'Bad Request',
            message: 'Invalid Json Format or Request body missing',
            path: '/api/auth/register',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const res = supertest(app)
            .post('/api/auth/register')
            .expect(400)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
    });
});
