const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const getMinimumNoOfCoins = vendingMachine.getMinimumNoOfCoins;

const runTestForGetMinimunNoOfCoins = function() {
  printHeadLine("Running Test For Get Minimum No Of Coins");

  assert(0, getMinimumNoOfCoins(0, [1, 2, 5, 10]), "The Number of Coins To must 0 for amount of 0", "getMinimumNoOfCoins");
  assert(1, getMinimumNoOfCoins(1, [1, 2, 5, 10]), "The Number of Coins must be 1 for amount of 1 ", "getMinimumNoOfCoins");
  assert(1, getMinimumNoOfCoins(2, [1, 2, 5, 10]), "The Number of Coins must be 1 for the amount of 2 ", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(3, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 3 ", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(4, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 4 ", "getMinimumNoOfCoins");
  assert(1, getMinimumNoOfCoins(5, [1, 2, 5, 10]), "The Number of Coins must be 1 for the amount of 5 ", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(6, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 6 ", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(11, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 11", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(12, [1, 2, 5, 10]), "The Number of Coins must be 2 for the amount of 12 ", "getMinimumNoOfCoins");
  assert(3, getMinimumNoOfCoins(16, [1, 2, 5, 10]), "The Number of Coins must be 3 for the amount of 16 ", "getMinimumNoOfCoins");
  assert(6, getMinimumNoOfCoins(88, [1, 2, 5, 10, 20, 50]), "The Number of Coins must be 6 for the amount of 88 ", "getMinimumNoOfCoins");
  assert(14, getMinimumNoOfCoins(132, [1, 2, 5, 10]), "The Number of Coins must be 14 for the amount of 132 ", "getMinimumNoOfCoins");
  assert(5, getMinimumNoOfCoins(132, [1, 2, 5, 10, 100]), "The Number of Coins must be 5 for the amount of 132 ", "getMinimumNoOfCoins");
  assert(12, getMinimumNoOfCoins(12, [1]), "The Number of Coins must be 12 for the amount of 12 ", "getMinimumNoOfCoins");
  assert(4, getMinimumNoOfCoins(13, [1, 4, 7]), "The Number of Coins must be 4 for the amount of 13 ", "getMinimumNoOfCoins");
}

runTestForGetMinimunNoOfCoins();
displayTestSummary();

