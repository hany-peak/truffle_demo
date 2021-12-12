const contractArtifacts = require('./contractArtifacts');
const { BN } = require('./setup');

async function setUpUnitTest (accounts) {
    const [owner, ..._] = accounts;
    let count = await contractArtifacts.Count.new({ from: owner });
    
    
    const contracts = {
        count,
    };
    return { instances: contracts };
}

module.exports = {
  setUpUnitTest,
};