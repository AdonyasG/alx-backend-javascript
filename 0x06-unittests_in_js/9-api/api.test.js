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

  it('endpoint: GET /cart/:id', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('endpoint: GET /cart/:isNaN', (done) => {
    request('http://localhost:7865/cart/anything', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
