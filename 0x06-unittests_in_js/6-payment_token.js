const getPaymentTokenFromAPI = (success) => new Promise((resolve, reject) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
  else {
    reject('Cannot connect');
  }
});

module.exports = getPaymentTokenFromAPI;
