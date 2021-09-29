const WhaleNetwork = artifacts.require("WhaleNetwork");

module.exports = async function (deployer) {
  await deployer.deploy(WhaleNetwork);
  const whaleNetworkContract = await WhaleNetwork.deployed();
  const serviceFeeCollector = "0xd279768E6F3040C04a147BC4a8D667fF067F948B";
  await whaleNetworkContract.setServiceFeeCollector(serviceFeeCollector);
};
