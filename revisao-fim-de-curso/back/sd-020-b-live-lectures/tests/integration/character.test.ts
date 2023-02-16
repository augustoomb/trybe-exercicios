import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/connection';
import { executeQueries, readQueries } from '../../src/database/queryUtils';
import Character from '../../src/interfaces/character';

const dropQuery = readQueries('dropDatabase.sql');

const character1: Character = {
  name: 'Tati'
};

const character2: Character = {
  name: 'Zambs'

};
describe('character', () => {
  beforeEach(async () => {
    await executeQueries(connection, dropQuery);
    await executeQueries(connection);
  });
  afterAll(async () => {
    await executeQueries(connection, dropQuery);
    await connection.end();
  });

  it('should list no characters', async () => {
    const result = await request(app).get('/characters');
    expect(result.status).toEqual(200);
    expect(result.body).toEqual([ { id: 1, name: 'Homer Simpson' } ]);
  });

  it('should create one character', async () => {
    const result = await request(app).post('/characters').send(character1);
    expect(result.status).toEqual(201);

    const newSimpson = await request(app).get('/characters');
    expect(newSimpson.body).toEqual(expect.arrayContaining([ expect.objectContaining(character1) ]))
  });

  it('should return 400 when creating invalid character', async () => {
    const result = await request(app).post('/characters').send({ name: '' });

    expect(result.status).toEqual(400);
  });

  it('should list one character', async () => {
    const result = await request(app).get('/characters');
    expect(result.body).toEqual(expect.arrayContaining([ expect.objectContaining({ name: 'Homer Simpson' }) ]));
  });

  it('should list two character', async () => {
    await request(app).post('/characters').send(character1);
    const result = await request(app).get('/characters');
    expect(result.body).toEqual(expect.arrayContaining([ expect.objectContaining(character1) ]));
  });

  it('should list three characters', async () => {
    await request(app).post('/characters').send(character1);
    await request(app).post('/characters').send(character2);

    const result = await request(app).get('/characters');
    expect(result.body).toEqual(expect.arrayContaining([
      expect.objectContaining(character1),
      expect.objectContaining(character2),
    ]));
  });

  it('should find character with id 1', async () => {
    await request(app).post('/characters').send(character1);
    const result = await request(app).get('/characters/1');
    expect(result.status).toEqual(200);
    expect(result.body).toEqual(expect.objectContaining({ name: 'Homer Simpson' }));
  });

  it('should find character with id 2', async () => {
    await request(app).post('/characters').send(character1);
    const result = await request(app).get('/characters/2');
    expect(result.status).toEqual(200);
    expect(result.body).toEqual(expect.objectContaining(character1));
  });

  it('should return 404 finding inexistent character', async () => {
    await request(app).post('/characters').send(character1);
    const result = await request(app).get('/characters/0');
    expect(result.status).toEqual(404);
  });
});
