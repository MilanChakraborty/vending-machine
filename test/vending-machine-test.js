const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const getMinimumNoOfCoins = vendingMachine.getMinimumNoOfCoins;
const maxOf = vendingMachine.maxOf;
const maxSort = vendingMachine.maxSort;

const runTestForGetMinimunNoOfCoins = function() {
  printHeadLine("Running Test For Get Minimum No Of Coins");

  assert(0, getMinimumNoOfCoins(0, [1, 2, 5, 10]), "Testing for the amount of zero ", "getMinimumNoOfCoins");
  assert(1, getMinimumNoOfCoins(1, [1, 2, 5, 10]), "Testing for amount of one, and ordered denomination list", "getMinimumNoOfCoins");
  assert(1, getMinimumNoOfCoins(2, [1, 2]), "Testing for denomination of one, two with even amount", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(3, [1, 2]), "Testing for denominations of one, two with odd amount ", "getMinimumNoOfCoins");
  assert(1, getMinimumNoOfCoins(5, [1, 2, 5]), "Testing for denomination of one, two and five when amount is multiple of 5", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(6, [1, 2, 5]), "Testing for denomination of one, two and five when amount is not multiple of 5", "getMinimumNoOfCoins");
  assert(1, getMinimumNoOfCoins(10, [1, 2, 5, 10]), "Testing for denomination of 1,2,5 and 10 when amount is multiple of 10", "getMinimumNoOfCoins");
  assert(2, getMinimumNoOfCoins(12, [1, 2, 5, 10]), "Testing for denomination of 1,2,5 and 10 when amount is not multiple of 10", "getMinimumNoOfCoins");
  assert(6, getMinimumNoOfCoins(88, [1, 2, 5, 10, 20, 50]), "Testing for any set of denomination", "getMinimumNoOfCoins");
  assert(14, getMinimumNoOfCoins(132, [1, 2, 5, 10]), "Testing for small set of denomination", "getMinimumNoOfCoins");
  assert(12, getMinimumNoOfCoins(12, [1]), "Testing for set of one denomination", "getMinimumNoOfCoins");
  assert(4, getMinimumNoOfCoins(13, [1, 4, 7]), "Testing for set of denomination 1, 4, 7", "getMinimumNoOfCoins");
  assert(27, getMinimumNoOfCoins(132, [5, 2, 1]), "Testing for unordered data and small set of denomination", "getMinimumNoOfCoins");
  assert(8, getMinimumNoOfCoins(132, [5, 10, 2, 1, 20]), "Testing for unordered data and large set of denomination", "getMinimumNoOfCoins");
  assert(3, getMinimumNoOfCoins(8, [5, 2, 1]), "Testing for reversed arranged denomination list", "getMinimumNoOfCoins");
  assert(6, maxOf([1, 3, 6, 3]), "The Number max number must be 6", "maxOf");
  assert(13, maxOf([1, 13, 0, 6, 3]), "The Number max number must be 13", "maxOf");
  assertArray([13, 6, 3], maxSort([6, 13, 3]), "Testing for Max Sort", "maxSort");
}

runTestForGetMinimunNoOfCoins();
displayTestSummary();
console.table(getTestLog());

