import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';

describe ('UserController tests', () => {

  it('Should list users as an empty array, or filled', async () => {

    const response = await request(app).get('/users/index');
    expect(response.status).toBe(200);

  });

  it('Should create users, and return a succesfull code', async () => {

    const response = await request(app).post('/users/store').send({
      username: 'José Thomaz'
    });
    expect(response.status).toBe(201);

  });

  it('Should create users, and return a succesfull text', async () => {

    const response = await request(app).post('/users/store').send({
      username: 'José Thomaz'
    });
    expect(response.text).toBe('Usuário criado com sucesso');

  });

});

afterAll(async done => {
  await mongoose.disconnect();
  done();
});

