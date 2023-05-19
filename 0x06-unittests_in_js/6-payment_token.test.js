const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with successful response when success is true', () => {
    return getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      throw new Error;
    }).catch((error) => {
      expect(error).to.equal(undefined);
    });
  });
  
  it('should return a resolved promise with undefined when success is false', () => {
    return getPaymentTokenFromAPI(false).then((result) => {
      expect(result).to.be.undefined;
    });
  });
});;
