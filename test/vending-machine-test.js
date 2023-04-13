const testing = require("../lib/testing.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const determineMinimumNoOfCoins = vendingMachine.determineMinimumNoOfCoins;
const sort = vendingMachine.sort;
const getDenominationsLog = vendingMachine.getDenominationsLog;



const runTestForGetArrangedDenominationSet = function() {
  const functionName = "determineMinimumNoOfCoins";
  printHeadLine("Running Test For Arranged Denomination List");

  assert(0, determineMinimumNoOfCoins(0, [1, 2, 5, 10]), "Amount of zero must give 0 Coins for any denomination set", functionName);
  assert(1, determineMinimumNoOfCoins(1, [1, 2, 5, 10]), "Amount of one must give 1 Coins for denomination set having one", functionName);
  assert(0, determineMinimumNoOfCoins(1, [2, 5, 10]), "Amount of one must give 0 Coins for denomination set not having one", functionName);
  assert(4, determineMinimumNoOfCoins(13, [1, 4, 7]), "Amount of 13 must give 4 Coins for denomination set of 1,4 and 7", functionName);
}

const runTestForGetUnarrangedDenominationSet = function() {
  const functionName = "determineMinimumNoOfCoins";
  printHeadLine("Running Test For Unarranged Denomination List");

  assert(27, determineMinimumNoOfCoins(132, [5, 2, 1]), "Amount of 132 must give 27 coins for unordered denominations set of 1,2 and 5", functionName);
  assert(8, determineMinimumNoOfCoins(132, [5, 10, 2, 1, 20]), "Amount of 132 must give 8 coins for unordered", "determineMinimumNoOfCoins");

}

const runTestForSort = function() {
  const functionName = "sort";
  printHeadLine("Running Test For Sorting")

  assertArray([13, 6, 3], sort([6, 13, 3]), "Should give the arranged array for list of distinct element", functionName);
  assertArray([13, 10, 5, 5, 0], sort([13, 5, 10, 0, 5]), "Should give the arranged array for a mixed list of distinct and same element", functionName);
}

const runTestForGetDenominationLog = function() {
  const functionName = "getDenominationsLog";
  let message = "";
  printHeadLine("Running Test For Get Denomination Log");

  message = "Amount of 18 must give one coin of each Denomination of (1, 2, 5, 10)"
  assertObject({10: 1, 5: 1, 2:1, 1:1}, getDenominationsLog(18, [1, 2, 5, 10]), message , functionName);

  message = "Amount of 0 must return zero coins for each denominations of (1, 2, 5, 10)"
  assertObject({10: 0, 5: 0, 2: 0, 1: 0}, getDenominationsLog(0, [1, 2, 5, 10]), message,  functionName);
}

const runTests = function() {
  printHeadLine("Vending Machine Tests");

  runTestForGetArrangedDenominationSet();
  runTestForGetUnarrangedDenominationSet();
  runTestForSort();
  runTestForGetDenominationLog();
}

runTests();
displayTestSummary();
//console.table(getTestLog());

