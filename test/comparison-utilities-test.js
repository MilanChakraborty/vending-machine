const testing = require("../lib/testing-utilities.js");
const check = require("../lib/comparison-utilities");

const assert = testing.assert;
const assertArray = testing.assertArray;
const assertObject = testing.assertObject;
const printHeadLine = testing.printHeadLine;
const groupingTestLog = testing.groupingTestLog;
const getTestLog = testing.getTestLog;
const displayTestSummary = testing.displayTestSummary;

const areArraysEqual = check.areArraysEqual;
const areObjectsEqual = check.areObjectsEqual;

const testAreArraysEqual = function() {
  const functionName = "areArraysEqual";
  printHeadLine("Running Test For Are arrays Equal");

  let detail = "Two empty arrays must be equal";
  let expected = true;
  let actual = areArraysEqual([], []);
  assert(expected, actual, detail, functionName);

  detail = "Two Arrays with Same Elements in Same Order must be Equal";
  expected = true;
  actual = areArraysEqual([1, 2, 3], [1, 2, 3]);
  assert(expected, actual, detail, functionName);

  detail = "Two Arrays with Same Elements not in Same Order must not be Equal";
  expected = false;
  actual = areArraysEqual([1, 2, 3], [2, 1, 3]);
  assert(expected, actual, detail, functionName);

  detail = "Two Arrays with Different Elements must not be Equal";
  expected = false;
  actual = areArraysEqual([1, 2, 3], [4, 5, 6]);
  assert(expected, actual, detail, functionName);
}

const testAreObjectsEqual = function() {
  const functionName = "areObjectsEqual"
  printHeadLine("Running Test For Are Objects Equal");

  let detail = "Two empty objects must be equal";
  let expected = true;
  let actual = areObjectsEqual({}, {});
  assert(expected, actual, detail, functionName);

  detail = "Two Objects with Same Entries and Keys  in Same Order must be Equal";
  expected = true;
  actual = areObjectsEqual({one: 1, two: 2, three: 3}, {one: 1, two: 2, three: 3});
  assert(expected, actual, detail, functionName);

  detail = "Two Objects with Same Entries and Keys Not in Same Order must be Equal";
  expected = true;
  actual = areObjectsEqual({one: 1, two: 2, three: 3}, {two: 2, three: 3, one: 1});
  assert(expected, actual, detail, functionName);

  detail = "Two Objects with unequal Entries must not be equal";
  expected = false;
  actual = areObjectsEqual({one: 1, two: 2, three: 3, four: 4}, {one: 1, two: 2, three: 3});
  assert(expected, actual, detail, functionName);

  detail = "Two Objects with Different Entries and Keys in must not be Equal";
  expected = false;
  actual = areObjectsEqual({one: 1, two: 2, three: 3}, {four: 4, five: 5, six: 6});
  assert(expected, actual, detail, functionName);

}

const test = function() {
  testAreArraysEqual();
  testAreObjectsEqual();
}

test();
displayTestSummary();



