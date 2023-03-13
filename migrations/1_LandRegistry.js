// eslint-disable-next-line no-undef
const landRegistry = artifacts.require("LandRegistry");

module.exports = function (deployer) {
  deployer.deploy(landRegistry);
};
