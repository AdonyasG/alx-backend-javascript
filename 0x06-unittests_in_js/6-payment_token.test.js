const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentToken', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.eql({ data: 'Successful response from the API' });
        done();
      }).catch((err) => {
        done(err);
      });
  });

  it('getPaymentToken', (done) => {
    getPaymentTokenFromAPI(false)
      .then((res) => {
        done('Should not resolve');
      }).catch((err) => {
        expect(err).to.equal('Cannot connect');
        done();
      });
  });
});
