const WhaleNetwork = artifacts.require("WhaleNetwork");
const WhaleNetworkPartner = artifacts.require("WhaleNetworkPartner");
const Governance = artifacts.require("WhaleNetworkGovernance");

module.exports = async function (deployer) {
  
  await deployer.deploy(WhaleNetwork);
  const whaleNetworkContract = await WhaleNetwork.deployed();
  await deployer.deploy(Governance, whaleNetworkContract.address, 1000, 10000);
  await deployer.deploy(WhaleNetworkPartner, whaleNetworkContract.address);
  const serviceFeeCollector = "Address of service fee collector";
  await whaleNetworkContract.setServiceFeeCollector(serviceFeeCollector);
};
