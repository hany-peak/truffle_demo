const { ZERO_ADDRESS } = require('./helpers/constants');
const { setUpUnitTest } = require('./helpers/setUpUnitTest');

const {
    BN,           // Big Number support
    constants,    // Common constants, like the zero address and largest integers
    expectEvent,  // Assertions for emitted events
    expectRevert, // Assertions for transactions that should fail
    balance,
    time,
    } = require('@openzeppelin/test-helpers');

contract('Basic Test', function (accounts) {

    const [owner, ...others] = accounts;

    let count;

    beforeEach(async function () {
        const { instances } = await setUpUnitTest(accounts);
        count = instances.count;
    });

    describe('basic test', function() {
      it('기본 테스트', async () => {
        let value = await count.count({from: owner });
        console.log('value(before): ', value)
        parseInt(value).should.be.equal(0)
        
        let plusEvent = await count.plus({ from: owner });
        await expectEvent(plusEvent, 'Plus')
        
        value = await count.count({from: owner });
        console.log('value(after): ', value)
        parseInt(value).should.be.equal(1)
        
        await expectRevert(count.minusRevert({ from: owner }), "it is reverted. [reason] revert in force");
        
        let values = (await balance.current(owner, unit ='wei')).toString();
        
        console.log('balance: ', values);
        
      });
    })
});