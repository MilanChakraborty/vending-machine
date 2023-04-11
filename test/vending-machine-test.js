const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;


const runTestForVendCoins = function() {
  assert(0, vendingMachine.determineNoOfCoins(0), "The Number of Coins To must 1 for amount of 1", "determineNoOfCoins");
  assert(1, vendingMachine.determineNoOfCoins(1), "The Number of Coins must be 1 for amount of 1 ", "determineNoOfCoins");
  assert(1, vendingMachine.determineNoOfCoins(2), "The Number of Coins must be 1 for the amount of 1 ", "determineNoOfCoins");
  assert(2, vendingMachine.determineNoOfCoins(3), "The Number of Coins must be 2 for the amount of 3 ", "determineNoOfCoins");
  assert(2, vendingMachine.determineNoOfCoins(4), "The Number of Coins must be 2 for the amount of 4 ", "determineNoOfCoins");
  assert(3, vendingMachine.determineNoOfCoins(5), "The Number of Coins must be 3 for the amount of 5 ", "determineNoOfCoins");
}

runTestForVendCoins();
testing.displayTestSummary();
