const WhaleNetwork = artifacts.require("WhaleNetwork");
const WhaleNetworkPartner = artifacts.require("WhaleNetworkPartner");

module.exports = async function (deployer) {
  
  await deployer.deploy(WhaleNetwork);
  const whaleNetworkContract = await WhaleNetwork.deployed();
  await deployer.deploy(WhaleNetworkPartner, whaleNetworkContract.address);
  const serviceFeeCollector = "SERVICE FEE COLLECTOR";
  await whaleNetworkContract.setServiceFeeCollector(serviceFeeCollector);
};
