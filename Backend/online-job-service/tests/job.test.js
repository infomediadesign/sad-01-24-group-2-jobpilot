const supertest = require('supertest');
const app = require('../app');
const {
    refreshAccessToken,
    getEmailIds,
    getEmailMessageLists,
    getEmailMessages,
    getIdsFromApplications,
} = require('../services/job.services');
const { getFilteredEmailMessages } = require('../middleware/helpers');
const mongoose = require('mongoose');
const dbService = require('../db/dbconfig/db');
const {
    emailMessageWithOutParts,
    emailMessageResponse,
    emailMessageWithParts,
    filteredMessageResponse,
} = require('./mocks');

jest.mock('axios');

beforeAll(async () => {
    await dbService.connectDB();
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('refreshAccessToken', () => {
    it('tests the refreshAccessToken function', async () => {
        const expiryDate = '1706582791469';
        const refreshToken =
            '1%2F%2F09GFnmxg_4hvICgYIARAAGAkSNwF-L9IrVGRZyLQDgsMBFFbq_tx6IO3EVE6vZvbuPl8VQsi1p3wYuGeeWrZr5gUEQxoLY';

        const mockResponse = 'Access Token refreshed';
        require('axios').post.mockResolvedValue(mockResponse);

        await refreshAccessToken(expiryDate, refreshToken);

        expect(require('axios').post).toHaveBeenCalledWith(
            `${process.env.ONLINE_AUTH_SERVICE_URL}refresh/token`,
            {
                expiryDate,
                refreshToken,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
    });
});

describe('getEmailIds', () => {
    it('tests the getEmailIds function', async () => {
        jest.clearAllMocks();
        const email = 'mahesh.nidugala@gmail.com';
        const accessToken =
            '1%2F%2F09GFnmxg_4hvICgYIARAAGAkSNwF-L9IrVGRZyLQDgsMBFFbq_tx6IO3EVE6vZvbuPl8VQsi1p3wYuGeeWrZr5gUEQxoLY';
        const emailQueryString = '"subject: your application"';

        const mockResponse = {
            messages: [
                {
                    id: '18b8c6d519cbc389',
                    threadId: '18b8c6d519cbc389',
                },
                {
                    id: '18b667c7631aa1c4',
                    threadId: '18b667c7631aa1c4',
                },
            ],
        };
        require('axios').get.mockResolvedValueOnce(mockResponse);

        await getEmailIds(email, accessToken, emailQueryString);

        expect(require('axios').get).toHaveBeenCalledWith(
            `${process.env.GOOGLE_API_URL}${email}/messages?q=${emailQueryString}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            },
        );
    });
});

describe('getFilteredEmailMessages', () => {
    it('tests the getFilteredEmailMessages function', async () => {
        const resultWithOutParts = await getFilteredEmailMessages(emailMessageWithOutParts);
        const resultWithParts = await getFilteredEmailMessages(emailMessageWithParts);

        expect(resultWithOutParts).toBeTruthy();
        expect(resultWithParts).toBeTruthy();
    });
});

describe('getEmailMessageLists', () => {
    it('tests the getEmailMessageLists function', async () => {
        jest.clearAllMocks();
        const email = 'mahesh.nidugala@gmail.com';
        const accessToken =
            '1%2F%2F09GFnmxg_4hvICgYIARAAGAkSNwF-L9IrVGRZyLQDgsMBFFbq_tx6IO3EVE6vZvbuPl8VQsi1p3wYuGeeWrZr5gUEQxoLY';

        require('axios').get.mockResolvedValueOnce(emailMessageWithParts);

        const result = await getEmailMessageLists(email, accessToken, '18b92dfa08f8bf38');

        expect(require('axios').get).toHaveBeenCalledWith(
            `${process.env.GOOGLE_API_URL}${email}/messages/18b92dfa08f8bf38`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            },
        );
    });
});
