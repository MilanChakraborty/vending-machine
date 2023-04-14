const testing = require("../lib/testing-utilities.js");
const sort = require("../lib/sorting-utilities.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const decendingSort = sort.decendingSort;

const testDecendingSort = function() {
  const functionName = "decendingSort";
  printHeadLine("Running Tests For Decending Sort");

  let detail = "Sorting of Empty Array Must return an empty array";
  let expected = [];
  let actual = decendingSort([]);
  assertArray(expected, actual, detail, functionName);

  detail = "Sorting of One element must return the same element";
  expected = [1];
  actual = decendingSort([1]);
  assertArray(expected, actual, detail, functionName);

  detail = "Sorting array of same elements must give the same array";
  expected = [1, 1, 1];
  actual = decendingSort([1, 1, 1]);
  assertArray(expected, actual, detail, functionName);

  detail = "Sorting array of positive integers must give sorted array in decending order";
  expected = [15, 10, 5];
  actual = decendingSort([5, 15, 10]);
  assertArray(expected, actual, detail, functionName);

  detail = "Sorting array of both negative and positive elements, must give sorted array in decending form";
  expected = [15, 1, -15];
  actual = decendingSort([-15, 15, 1]);
  assertArray(expected, actual, detail, functionName);

  detail = "Sorting array of repeating elements, sorted array must have conecutively repeated elements";
  expected = [1, 1, 1];
  actual = decendingSort([1, 1, 1]);
  assertArray(expected, actual, detail, functionName);
}

testDecendingSort();
displayTestSummary();
console.table(getTestLog());
