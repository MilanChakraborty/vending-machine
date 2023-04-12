const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const getTotalNoOfCoins = vendingMachine.getTotalNoOfCoins;

const runTestForVendCoins = function() {
  assert(0, getTotalNoOfCoins(0, [1, 2, 5, 10]), "The Number of Coins To must 0 for amount of 0", "getTotalNoOfCoins");
  assert(1, getTotalNoOfCoins(1, [1, 2, 5, 10]), "The Number of Coins must be 1 for amount of 1 ", "getTotalNoOfCoins");
  assert(1, getTotalNoOfCoins(2, [1, 2, 5, 10]), "The Number of Coins must be 1 for the amount of 2 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(3, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 3 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(4, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 4 ", "getTotalNoOfCoins");
  assert(1, getTotalNoOfCoins(5, [1, 2, 5, 10]), "The Number of Coins must be 1 for the amount of 5 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(6, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 6 ", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(11, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 11", "getTotalNoOfCoins");
  assert(2, getTotalNoOfCoins(12, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 12 ", "getTotalNoOfCoins");
  assert(3, getTotalNoOfCoins(16, [1, 2, 5, 10]), "The Number of Coins must be 3 for the amount of 16 ", "getTotalNoOfCoins");
  assert(6, getTotalNoOfCoins(88, [1, 2, 5, 10, 20, 50]), "The Number of Coins must be 6 for the amount of 88 ", "getTotalNoOfCoins");
  assert(14, getTotalNoOfCoins(132, [1, 2, 5, 10]), "The Number of Coins must be 14 for the amount of 132 ", "getTotalNoOfCoins");
  assert(5, getTotalNoOfCoins(132, [1, 2, 5, 10, 100]), "The Number of Coins must be 5 for the amount of 132 ", "getTotalNoOfCoins");
  assert(12, getTotalNoOfCoins(12, [1]), "The Number of Coins must be 12 for the amount of 12 ", "getTotalNoOfCoins");
}

runTestForVendCoins();
displayTestSummary();
console.table(getTestLog());
