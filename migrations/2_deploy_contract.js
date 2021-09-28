const WhaleNetwork = artifacts.require("WhaleNetwork");

module.exports = function (deployer) {
  deployer.deploy(WhaleNetwork);
};
