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



  it('should create one cast', async () => {
    const result = await request(app).post('/casts').send({ name: 'Tatiana' });
    expect(result.status).toEqual(201);
  });

  it('should return 400 when creating invalid cast', async () => {
    const result = await request(app).post('/casts').send();
    expect(result.status).toEqual(400);
  });
  it('should list one cast', async () => {
    const result = await request(app).get('/casts');
    expect(result.status).toEqual(200);
    expect(result.body).toEqual([ { id: 198, name: 'Dan Castellaneta' } ]);
  });
  it('should list two cast', async () => {
    await request(app).post('/casts').send({ name: 'Tatiana' });
    const result = await request(app).get('/casts');
    expect(result.body).toEqual(expect.arrayContaining([ expect.objectContaining({ name: 'Tatiana' }) ]));
  });

  it('should list two casts', async () => {
    await request(app).post('/casts').send({ name: 'cast1' });
    await request(app).post('/casts').send({ name: 'cast2' });

    const result = await request(app).get('/casts');
    expect(result.body).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'cast1' }),
      expect.objectContaining({ name: 'cast2' }),
    ]));
  });

  it('should find one cast', async () => {
    await request(app).post('/casts').send({ name: 'cast1' });
    const result = await request(app).get('/casts/199');
    expect(result.status).toEqual(200);
    expect(result.body).toEqual({ id:199, name: 'cast1' });
  });

  it('should return 404 finding inexistent cast', async () => {
    await request(app).post('/casts').send({ name: 'cast1' });
    const result = await request(app).get('/casts/0');
    expect(result.status).toEqual(404);
  });
});
