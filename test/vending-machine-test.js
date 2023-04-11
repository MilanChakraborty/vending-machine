const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const determineNoOfCoins = vendingMachine.determineNoOfCoins;


const runTestForVendCoins = function() {
  assert(0, determineNoOfCoins(0), "The Number of Coins To must 1 for amount of 1", "determineNoOfCoins");
  assert(1, determineNoOfCoins(1), "The Number of Coins must be 1 for amount of 1 ", "determineNoOfCoins");
  assert(1, determineNoOfCoins(2), "The Number of Coins must be 1 for the amount of 1 ", "determineNoOfCoins");
  assert(2, determineNoOfCoins(3), "The Number of Coins must be 2 for the amount of 3 ", "determineNoOfCoins");
  assert(2, determineNoOfCoins(4), "The Number of Coins must be 2 for the amount of 4 ", "determineNoOfCoins");
  assert(1, determineNoOfCoins(5), "The Number of Coins must be 3 for the amount of 5 ", "determineNoOfCoins");
  assert(2, determineNoOfCoins(6), "The Number of Coins must be 3 for the amount of 5 ", "determineNoOfCoins");
  assert(2, determineNoOfCoins(11), "The Number of Coins must be 3 fo", "determineNoOfCoins");
  assert(2, determineNoOfCoins(12), "The Number of Coins must be 3 for the amount of 5 ", "determineNoOfCoins");
}

runTestForVendCoins();
testing.displayTestSummary();
