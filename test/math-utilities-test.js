const testing = require("../lib/testing-utilities.js");
const math = require("../lib/math-utilities.js");

const assert = testing.assert;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const sumOf = math.sumOf;

const testSumOfForArrays = function() {
  const functionName = "sumOf";
  printHeadLine("Testing For Sum Of When Provided Arrays");

  let expected = 0;
  let actual = sumOf([]);
  let detail = "For an empty array the sum must be 0";
  assert(expected, actual, detail, functionName);

  expected = 0;
  actual = sumOf([0, 0, 0]);
  detail = "For an array having all elements zero, sum must be 0";
  assert(expected, actual, detail, functionName);

  expected = 2;
  actual = sumOf([1, 1]);
  detail = "For array of positive elements, sum must be sum of elements";
  assert(expected, actual, detail, functionName);

  expected = 0;
  actual = sumOf([1, -1]);
  detail = "For array of both positive and negative elements, sum must be sum of elements";
  assert(expected, actual, detail, functionName);
}

const testSumOfForObjects = function() {
  const functionName = "sumOf";
  printHeadLine("Testing For Sum Of when Provided Objects");

  let expected = 0;
  let actual = sumOf({});
  let detail = "For an empty object the sum must be 0";
  assert(expected, actual, detail, functionName);

  expected = 0;
  actual = sumOf({val1: 0, val2: 0, val3: 0});
  detail = "For an object having all elements zero, sum must be 0";
  assert(expected, actual, detail, functionName);

  expected = 2;
  actual = sumOf({val1: 1,val2: 1});
  detail = "For object of positive elements, sum must be sum of elements";
  assert(expected, actual, detail, functionName);

  expected = 0;
  actual = sumOf({val1: 1, val2: -1});
  detail = "For object of both positive and negative elements, sum must be sum of elements";
  assert(expected, actual, detail, functionName);
}

const testSumOf = function() {
  testSumOfForArrays();
  testSumOfForObjects();
}

testSumOf();
displayTestSummary();
//console.table(getTestLog());
