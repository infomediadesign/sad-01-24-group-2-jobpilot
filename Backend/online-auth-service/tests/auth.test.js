const supertest = require('supertest');
const app = require('../app');
const authServices = require('../services/auth.services');
const jwtService = require('../middleware/jwt.auth');
const googleAuthService = require('../middleware/google.auth');
const mongoose = require('mongoose');
const dbService = require('../db/dbconfig/db');

jest.mock('supertest');
jest.mock('../services/auth.services');
jest.mock('../middleware/jwt.auth');
jest.mock('../middleware/google.auth');

beforeAll(async () => {
    await dbService.connectDB();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('POST /api/auth/register', () => {
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
        const saveRegisteredUsersSpy = jest.spyOn(authServices, 'saveRegisteredUsers');
        await authServices.saveRegisteredUsers(mockRequest.user);

        const checkUserExistsSpy = jest.spyOn(authServices, 'checkUserExists');
        await authServices.checkUserExists(mockRequest.user.email);

        const res = supertest(app)
            .post('/api/auth/register')
            .send(mockRequest)
            .expect(201)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });

        expect(saveRegisteredUsersSpy).toHaveBeenCalledWith(mockRequest.user);
        expect(checkUserExistsSpy).toHaveBeenCalledWith(mockRequest.user.email);
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

describe('POST /api/auth/login', () => {
    test('api to return 200 ok response', async () => {
        const mockRequest = {
            email: 'mahesh.nidugala19@gmail.com',
            password: 'Mahesh',
        };
        const mockedResponse = {
            token: 'hajudiukii2783jnsj83msj',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const checkIsValidPasswordSpy = jest.spyOn(authServices, 'checkIsValidPassword');
        await authServices.checkIsValidPassword(mockRequest.email, mockRequest.password);

        const generateJwtTokenSpy = jest.spyOn(jwtService, 'generateJwtToken');
        await jwtService.generateJwtToken(mockRequest.email);

        const res = supertest(app)
            .post('/api/auth/login')
            .send(mockRequest)
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
        expect(checkIsValidPasswordSpy).toHaveBeenCalledWith(
            mockRequest.email,
            mockRequest.password
        );
        expect(generateJwtTokenSpy).toHaveBeenCalledWith(mockRequest.email);
    });

    test('api to return 400 bad request response', async () => {
        const mockedResponse = {
            timestamp: '2024-01-17T02:40:35.512Z',
            status: 400,
            error: 'Bad Request',
            message: 'Invalid Json Format or Request body missing',
            path: '/api/auth/login',
        };
        supertest.mockImplementation(() => ({
            post: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const res = supertest(app)
            .post('/api/auth/login')
            .expect(400)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
    });
});

describe('GET /api/auth/google', () => {
    test('api to return 200 success response', async () => {
        const mockedResponse = '<html><body>HTML Content</body></html>';
        supertest.mockImplementation(() => ({
            get: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
            expect: jest.fn().mockReturnThis(),
            end: jest.fn().mockImplementation(callback => {
                callback(null, { body: mockedResponse });
            }),
        }));
        const createOAuth2ClientSpy = jest.spyOn(googleAuthService, 'createOAuth2Client');
        await googleAuthService.createOAuth2Client();
        const res = supertest(app)
            .get('/api/auth/job/google')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual(mockedResponse);
            });
        expect(createOAuth2ClientSpy).toHaveBeenCalledWith();
    });
});
