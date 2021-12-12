const { accountsData } = require('../test/helpers/accounts');

const {
  Count
} = require('../test/helpers/contractArtifacts');
module.exports = async function (deployer, network, accounts) {
  const [owner, ...others] = accounts;
  await deployer.deploy(Count, { from: owner });

}
