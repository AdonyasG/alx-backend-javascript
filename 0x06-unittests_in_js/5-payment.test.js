const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let spy;
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    }
    );
    afterEach(() => {
        spy.restore();
    }
    );
    it('calculateNumber', () => {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
        stub.restore();
    }
    );
});

