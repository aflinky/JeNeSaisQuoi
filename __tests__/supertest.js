const request = require('supertest');
const fs = require('fs');
const path = require('path');
// const server = require('../server/server.js');
const server = 'http://localhost:3000';

describe('api tests', () => {
  describe('homepage', () => {
    it('GET - / - root responds with 200 status and text/html content type', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
    });
  })
  describe('linguee words', () => {
    it('GET - /dictionary/cheese - ', () => {
      return request(server)
        .get('/dictionary/cheese')
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then((response) => {
          const res = JSON.parse(response.text);
          expect(res).toHaveProperty('query', "cheese");
          expect(res).toHaveProperty('words');
          expect(Array.isArray(res.words)).toBe(true);
          expect(res).toHaveProperty('examples');
          expect(Array.isArray(res.examples)).toBe(true);
        })
    });
  })
  describe('db words', () => {
    let dbLength;
    const dummyWord = {
      term: 'shoe',
      type: 'noun',
      term2: 'chaussure',
      type2: 'noun, feminine',
      examples:
        [{
          from: 'The bottom of my shoe is filthy. ',
          to: 'Le dessous de ma chaussure est souillé. '
        },
        {
          from: 'The shoe\'s upper is made of leather.',
          to: 'L\'empeigne de la chaussure est en cuir.'
        }]
    };
    it('GET - /words - ', () => {
      return request(server)
        .get('/words')
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then((response) => {
          const res = JSON.parse(response.text);
          expect(Array.isArray(res)).toBe(true);
          dbLength = res.length;
        })
    });
    it('POST - /words - proper response "good job"', () => {
      return request(server)
        .post('/words')
        .send(dummyWord)
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .then((response) => {
          const res = (response.text);
          expect(res).toBe('good job')
        })
    });
    it('POST - /words - properly added to db', () => {
      return request(server)
        .get('/words')
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then((response) => {
          const res = JSON.parse(response.text);
          expect(Array.isArray(res)).toBe(true);
          expect(res.length).toBe(dbLength+1)
        })
    });
    it('DELETE - /words - proper response "good job"', () => {
      return request(server)
        .delete('/words')
        .send(dummyWord)
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .then((response) => {
          const res = (response.text);
          expect(res).toBe('good job, you deleted it')
        })
    });
    it('DELETE - /words - properly deleted from db', () => {
      return request(server)
        .get('/words')
        .expect('Content-Type', /application\/json/)
        .expect(200)
        .then((response) => {
          const res = JSON.parse(response.text);
          expect(Array.isArray(res)).toBe(true);
          expect(res.length).toBe(dbLength)
        })
    });
  })
})