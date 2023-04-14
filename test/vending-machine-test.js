const testing = require("../lib/testing-utilities.js");
const vendingMachine = require("../src/vending-machine.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const determineMinimumNoOfCoins = vendingMachine.determineMinimumNoOfCoins;
const getDenominationsLog = vendingMachine.getDenominationsLog;

const testDetermineMinimumNoOfCoins = function() {
  const functionName = "determineMinimumNoOfCoins";
  printHeadLine("Running Test for Get Minimum No Of Coins");

  let expected = 0;
  let actual = determineMinimumNoOfCoins(0, [1, 2, 5, 10]);
  let detail = "Amount of Zero must give 0 Coins for any denomination set";
  assert(expected, actual, detail, functionName);

  expected = 0;
  actual = determineMinimumNoOfCoins(10, []);
  detail = "When the Denominations set is empty, Must give 0 coins for any amount";
  assert(expected, actual, detail, functionName);

  expected = 1;
  actual = determineMinimumNoOfCoins(1, [1, 2, 5, 10]);
  detail = "When the amount is same as any denomination value, it must give one coin";
  assert(expected, actual, detail, functionName);

  expected = 0;
  actual = determineMinimumNoOfCoins(1, [2, 5, 10]);
  detail = "When the amount is lower than all denomination values, it must give zero coin";
  assert(expected, actual, detail, functionName);

  expected = 3;
  actual = determineMinimumNoOfCoins(8, [1, 2, 5, 10]);
  detail = "Must give the Minimum numbers of coins required for an given amount";
  assert(expected, actual, detail, functionName);

  expected = 4;
  actual = determineMinimumNoOfCoins(18, [1, 2, 5, 10]);
  detail = "Must give the Minimum number of coins required, when the denomination set is ordered";
  assert(expected, actual, detail, functionName);

  expected = 6;
  actual = determineMinimumNoOfCoins(88, [1, 2, 5, 10, 20, 50]);
  detail = "When an unordered array is provided, must return the minimum no of coins ";
  assert(expected, actual, detail, functionName);
}

const testGetDenominationLog = function() {
  const functionName = "getDenominationsLog";
  printHeadLine("Running Tests For Get Denomination Log");

  let expected = {};
  let actual = getDenominationsLog(10, []);
  let detail = "When an empty denomination set is provided, must give an empty set of coins log";
  assertObject(expected, actual, detail , functionName);

  expected = {1: 0, 2: 0, 5: 0};
  actual = getDenominationsLog(0, [1, 2, 5]);
  detail = "When the Amount is Zero, the coin log must have zero coins for each denomination";
  assertObject(expected, actual, detail , functionName);

  expected = {1: 0, 2: 0, 5: 1};
  actual = getDenominationsLog(5, [1, 2, 5]);
  detail = "When the Amount is equal to any denomination value, must give one coin of that denomination";
  assertObject(expected, actual, detail , functionName);

  expected = {2: 0, 5: 0, 10: 0};
  actual = getDenominationsLog(0, [2, 5, 10]);
  detail = "When the Amount is Lower Than all denomination values, must give zero coins for all denominations";
  assertObject(expected, actual, detail , functionName);

  expected = {1: 1, 2: 1, 5: 1};
  actual = getDenominationsLog(8, [1, 2, 5]);
  detail = "When an ordered Denomination List is Provided, must give log of minimum coins required";
  assertObject(expected, actual, detail , functionName);

  expected = {1: 1, 2: 1, 5: 1, 10: 1};
  actual = getDenominationsLog(18, [10, 1, 5, 2]);
  detail = "An unordered Denomination List must give log of minimum coins required for the amount";
  assertObject(expected, actual, detail , functionName);
}

const test = function() {
  printHeadLine("Vending Machine Tests");

  testDetermineMinimumNoOfCoins();
  testGetDenominationLog();
}

test();
displayTestSummary();
console.table(getTestLog());

