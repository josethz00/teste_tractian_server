import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';

describe ('CompanyController tests', () => {

  it('Should list companies as an empty array, or filled', async () => {

    const response = await request(app).get('/companies/index');
    expect(response.status).toBe(200);

  });

  it('Should create companies, and return a succesfull code', async () => {

    const response = await request(app).post('/companies/store').send({
      name: 'Empresa teste'
    });
    expect(response.status).toBe(201);

  });

  it('Should create companies, and return a succesfull text', async () => {

    const response = await request(app).post('/companies/store').send({
      name: 'Empresa teste'
    });
    expect(response.text).toBe('Empresa cadastrada com sucesso');

  });

  it('Should query companies, and return a single one, as an object with its properties', async () => {

    const response = await request(app).get('/companies/query-one/5fac461517ed902f775cd132');
    expect(response.status).toBe(200);

  });

});

afterAll(async done => {
  await mongoose.disconnect();
  done();
});

