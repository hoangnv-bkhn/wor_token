const WorToken = artifacts.require("WorToken");
const WorTokenSale = artifacts.require("WorTokenSale");

module.exports = function (deployer) {
    deployer.deploy(WorToken, 100000000).then(function () {
        // Token Price is 0.01 Ether
        var tokenPrice = 1000000000000000;
        return deployer.deploy(WorTokenSale, WorToken.address, tokenPrice);
    });
};
