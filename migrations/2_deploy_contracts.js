"use strict";

var Deal = artifacts.require("./Deal.sol");

module.exports = function(deployer, network, accounts){
  deployer.deploy(Deal, accounts[1]);
};

