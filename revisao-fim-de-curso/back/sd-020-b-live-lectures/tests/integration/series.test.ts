import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';
import { executeQueries, readQueries } from '../../src/database/queryUtils';

const dropQuery = readQueries('dropDatabase.sql');

describe('Cast', () => {
  beforeEach(async () => {
    await executeQueries(connection, dropQuery);
    await executeQueries(connection);
  });
  afterAll(async () => {
    await executeQueries(connection, dropQuery);
    await connection.end();
  });



  it('should create one series', async () => {
    const result = await request(app).post('/series').send({ name: 'ZambLandia' });
    expect(result.status).toEqual(201);
  });

  it('should return 400 when creating invalid series', async () => {
    const result = await request(app).post('/series').send();
    expect(result.status).toEqual(400);
  });
  it('should list one series', async () => {
    const result = await request(app).get('/series');
    expect(result.status).toEqual(200);
    expect(result.body).toEqual([ { id: 456, name: 'Os Simpsons' } ]);
  });
  it('should list two series', async () => {
    await request(app).post('/series').send({ name: 'ZambLandia' });
    const result = await request(app).get('/series');
    expect(result.body).toEqual(expect.arrayContaining([ expect.objectContaining({ name: 'ZambLandia' }) ]));
  });

  it('should list two series', async () => {
    await request(app).post('/series').send({ name: 'series1' });
    await request(app).post('/series').send({ name: 'series2' });

    const result = await request(app).get('/series');
    expect(result.body).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'series1' }),
      expect.objectContaining({ name: 'series2' }),
    ]));
  });

  it('should find one series', async () => {
    await request(app).post('/series').send({ name: 'series1' });
    const result = await request(app).get('/series/457');
    expect(result.status).toEqual(200);
    expect(result.body).toEqual({ id: 457, name: 'series1' });
  });

  it('should return 404 finding inexistent series', async () => {
    await request(app).post('/series').send({ name: 'series1' });
    const result = await request(app).get('/series/0');
    expect(result.status).toEqual(404);
  });
});
