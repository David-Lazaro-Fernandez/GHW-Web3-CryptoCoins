const MyContract = artifacts.require("HelloWorld");  // Pointing to your contract file

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
