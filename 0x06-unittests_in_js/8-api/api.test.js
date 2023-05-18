const request = require('request');
const { expect } = require('chai');

describe('integration test', () => {
  it('endpoint: GET /', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
