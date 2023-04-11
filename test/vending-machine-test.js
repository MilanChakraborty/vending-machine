const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;


const runTestForVendCoins = function() {
  assert(0, vendingMachine.vendCoins(0), "The Numbers of coins returned must be zero ", "vendCoins");
  assert(1, vendingMachine.vendCoins(1), "The Numbers of coins returned must be one ", "vendCoins");
  assert(2, vendingMachine.vendCoins(2), "The Numbers of coins returned must be two ", "vendCoins");
}

runTestForVendCoins();
testing.displayTestSummary();
