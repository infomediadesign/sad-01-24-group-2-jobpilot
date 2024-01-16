// const supertest = require('supertest');
// const app = require('../app');
// const db = require('../db/dbconfig');

// describe('GET /', () => {
//     test('Health check', async () => {
//         const res = await supertest(app).get('/');
//         expect(res.statusCode).toBe(200);
//     });
// });

// describe('GET /internal/example/address', () => {
//     test('api to return 200 success response', async () => {
//         const res = await supertest(app).get('/internal/example/address/').query({
//             pinCode: 575008,
//         });
//         expect(res.statusCode).toBe(200);
//     });
//     test('api to get 404 not found response', async () => {
//         const res = await supertest(app).get('/internal/example/address/').query({
//             pinCode: 575003,
//         });
//         expect(res.statusCode).toBe(404);
//     });
//     test('api to get 400 bad request response', async () => {
//         const res = await supertest(app).get('/internal/example/address/');
//         expect(res.statusCode).toBe(400);
//     });
// });
