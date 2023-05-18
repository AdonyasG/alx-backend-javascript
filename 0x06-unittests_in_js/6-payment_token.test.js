const { expect } = require('chai');
const getPaymentToken = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentToken', (done) => {
    getPaymentToken(true)
      .then((res) => {
        expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
