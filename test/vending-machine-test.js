const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const getTotalNoOfCoins = vendingMachine.getTotalNoOfCoins;


const runTestForVendCoins = function() {
  assert(0, getTotalNoOfCoins(0), "The Number of Coins To must 0 for amount of 0", "getTotalNoOfCoins");
  assert(1, getTotalNoOfCoins(1), "The Number of Coins must be 1 for amount of 1 ", "getTotalNoOfCoins");
  assert(1, getTotalNoOfCoins(2), "The Number of Coins must be 1 for the amount of 2 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(3), "The Number of Coins must be 2 for the amount of 3 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(4), "The Number of Coins must be 2 for the amount of 4 ", "getTotalNoOfCoins");
  assert(1, getTotalNoOfCoins(5), "The Number of Coins must be 1 for the amount of 5 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(6), "The Number of Coins must be 2 for the amount of 6 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(11), "The Number of Coins must be 2 for the amount of 11", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(12), "The Number of Coins must be 2 for the amount of 12 ", "getTotalNoOfCoins");
}

runTestForVendCoins();
testing.displayTestSummary();
