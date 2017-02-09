const app = require('../../app');
const request = require('supertest');

describe('App ', () => {

  it('should send email from test@test to 4sth4rtee@gmail.com', (done) => {
    request(app)
      .get('/api/v0/sendMessage')
      // TODO set headers
      //.set({from:'test@test'})
      .send()
      .expect(200)
      .end(function (err, response) {

        expect(response.status).toEqual(200);

        return done();
      });
  });



});
