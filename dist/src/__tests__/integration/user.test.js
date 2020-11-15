"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../app");
describe('UserController tests', () => {
    it('Should list users as an empty array, or filled', async () => {
        const response = await supertest_1.default(app_1.app).get('/users/index');
        expect(response.status).toBe(200);
    });
    it('Should create users, and return a succesfull code', async () => {
        const response = await supertest_1.default(app_1.app).post('/users/store').send({
            username: 'José Thomaz'
        });
        expect(response.status).toBe(201);
    });
    it('Should create users, and return a succesfull text', async () => {
        const response = await supertest_1.default(app_1.app).post('/users/store').send({
            username: 'José Thomaz'
        });
        expect(response.text).toBe('Usuário criado com sucesso');
    });
});
afterAll(async (done) => {
    await mongoose_1.default.disconnect();
    done();
});
//# sourceMappingURL=user.test.js.map