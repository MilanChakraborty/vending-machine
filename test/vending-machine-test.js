const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

testing.assert(1, vendingMachine.giveOne(), "should return 1", "giveOne");
testing.assert(0, vendingMachine.giveOne(), "should return 1", "giveOne");

