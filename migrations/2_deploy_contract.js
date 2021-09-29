const WhaleNetwork = artifacts.require("WhaleNetwork");

module.exports = async function (deployer) {
  await deployer.deploy(WhaleNetwork);
  const whaleNetworkContract = await WhaleNetwork.deployed();
  const serviceFeeCollector = "SERVICE FEE COLLECTOR WALLET";
  await whaleNetworkContract.setServiceFeeCollector(serviceFeeCollector);
};
