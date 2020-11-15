"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../app");
describe('UnityController tests', () => {
    it('Should list unities as an empty array, or filled', async () => {
        const response = await supertest_1.default(app_1.app).get('/unities/index');
        expect(response.status).toBe(200);
    });
    it('Should create unities, and return a succesfull code', async () => {
        const response = await supertest_1.default(app_1.app).post('/unities/store')
            .set('company_id', '5fac461517ed902f775cd132')
            .send({
            name: 'Unidade 1'
        });
        expect(response.status).toBe(201);
    });
    it('Should return an error message, because the unity ID specified does not exists', async () => {
        const response = await supertest_1.default(app_1.app).post('/unities/store')
            .set('company_id', '5fac4fd6796d5ab58a302d93')
            .send({
            name: 'Unidade 3'
        });
        expect(response.status).toBe(404);
    });
    it('Should create unities, and return a succesfull text', async () => {
        const response = await supertest_1.default(app_1.app).post('/unities/store')
            .set('company_id', '5fac461517ed902f775cd132')
            .send({
            name: 'Unidade 2'
        });
        expect(response.text).toBe('Unidade cadastrada com sucesso');
    });
});
//# sourceMappingURL=unity.test.js.map