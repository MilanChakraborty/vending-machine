const styling = require("./style-utilities.js");
const check = require("./comparison-utilities.js");

const style = styling.style;
const redFg = styling.redFg;
const greenFg = styling.greenFg;
const printHeadline = styling.printHeadline;
const printNewLine = styling.printNewLine;

const areObjectsEqual = check.areObjectsEqual;
const areArraysEquals = check.areArraysEquals;
const areSame = check.areSame;

//------------------------------------------ Global Variables

const assertions = {totalAssertions: 0, passedAssertions: 0}
const testLog = [];

//--------------------------------------- Functions for Formating Result 

const formatTestResultDetail  = function(actual, expected) {
  const line1 = greenFg("\n\tExpected:  " + expected);
  const line2 =   redFg("\n\t  Actual:  " + actual);
  return line1 + line2;
}

const formatAssertionsMessage  = function(result, actual, expected, detail) {
  const icon = result ? "✅" : "❌";
  const summary = icon + " " + detail;
  const details = formatTestResultDetail (actual, expected);

  return result ? summary : summary + details;
}

//-------------------------------------------- Functions for Assertion 

const getTotalAssertions  = function() {
  return assertions.totalAssertions;
}

const getPassedAssertions  = function() {
  return assertions.passedAssertions;
}

const updateTestLog = function(result, expected, actual, funcName, detail) {
  testLog.push({
    result : result,
    expected : expected,
    actual : actual,
    functionName : funcName, 
    detail : detail});
}

const getTestLog = function() {
  return testLog;
}

const updateAssertionCount  = function(result) {
  assertions.totalAssertions += 1;
  assertions.passedAssertions += (result ? 1 : 0);
}

const assert  = function(expected, actual, detail, funcName) {
  const result = areSame(actual, expected);
  updateAssertionCount(result);
  updateTestLog(result, expected, actual, funcName, detail);
  console.log(formatAssertionsMessage(result, actual, expected, detail));
}

const assertArray  = function(expected, actual, detail, funcName) {
  const result = areArraysEquals(actual, expected);
  updateAssertionCount(result);
  updateTestLog(result, expected, actual, funcName, detail);
  console.log(formatAssertionsMessage(result, actual, expected, detail));
}

const assertObject  = function(expected, actual, detail, funcName) {
  const result = areObjectsEqual(actual, expected);
  updateAssertionCount(result);
  updateTestLog(result, expected, actual, funcName, detail);
  console.log(formatAssertionsMessage(result, actual, expected, detail));
}

const groupingTestLog = function(testLog, key) {
  const groupedTestLog = {};
  for (object of testLog) {
    if (groupedTestLog[object[key]]  === undefined) {
      groupedTestLog[object[key]] = [];
    }

    groupedTestLog[object[key]].push(object);
  }
  return groupedTestLog;
}

const displayTestSummary  = function() {
  let  detail = "\nSummary: ";
  detail += getPassedAssertions() + " / " + getTotalAssertions();
  detail += " passed";
  console.log(detail);
}

//------------------------------------------- Export Functions 

exports.printHeadLine = printHeadline;
exports.assert = assert;
exports.assertArray = assertArray;
exports.assertObject = assertObject;
exports.displayTestSummary = displayTestSummary;
exports.groupingTestLog = groupingTestLog;
exports.getTestLog = getTestLog;
