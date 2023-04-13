//------------------------------------------ Global Variables

const assertions = {totalAssertions: 0, passedAssertions: 0}
let totalAssertions = 0;
let passedAssertions = 0;
const testLog = [];

//------------------------------------------ Functions for Formating 

const formating = function(formatCode, text) {
  return "\033["+formatCode+"m"+text+"\033[0m";
}

const redFg = function(text) {
  return formating("31", text);
}

const greenFg = function(text) {
  return formating("32", text);
}

const yellowFg = function(text) {
  return formating("33", text);
}

const bold = function(text) {
  return formating("1", text);
}

const underline = function(text) {
  return formating("4", text);
}

const printNewline = function() {
  console.log();
}

const printHeadline = function(text) {
  console.log(yellowFg(bold(underline("\n"+text+"\n"))));
}

//--------------------------------------------- Functions to Compare

const areArraysEquals = function(array1, array2) {
  if(array1 == array2) {
    return true;
  }

  if (array1.length !== array2.length) {
    return false;
  };

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    };
  };

  return true;
}


const areApproximatelySame = function(actualValue, expectedValue, precision) {
  if (expectedValue === actualValue) {
    return true;
  }

  return (expectedValue >= actualValue - precision) && (expectedValue <= actualValue + precision);
}

const areExactlySame  = function(actualValue, expectedValue) {
  return expectedValue === actualValue;
}

const areAlmostSame  = function(actualValue, expectedValue, precision) {
  return (expectedValue >= actualValue - precision) && (expectedValue <= actualValue + precision);
}

const areObjectsEqual = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for ( key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

const areSame  = function(actualValue, expectedValue) {
  if (areExactlySame(actualValue, expectedValue)) {
    return true;
  }
  return areAlmostSame(actualValue, expectedValue, 0.01);
}

//--------------------------------------- Functions for Formating Result 

const formatTestResultDetail  = function(actual, expected) {
  const line1 = greenFg("\n\tExpected:  " + expected);
  const line2 =   redFg("\n\t  Actual:  " + actual);
  return line1 + line2;
}

const formatAssertionsMessage  = function(result, actual, expected, message) {
  const icon = result ? "✅" : "❌";
  const summary = icon + " " + message;
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

const updateTestLog = function(result, expected, actual, funcName, message) {
  testLog.push({
    result : result,
    expected : expected,
    actual : actual,
    functionName : funcName, 
    message : message});
}

const getTestLog = function() {
  return testLog;
}

const updateAssertionCount  = function(result) {
  assertions.totalAssertions += 1;
  assertions.passedAssertions += (result ? 1 : 0);
}

const assert  = function(expected, actual, message, funcName) {
  const result = areSame(actual, expected);
  updateAssertionCount(result);
  updateTestLog(result, expected, actual, funcName, message);
  console.log(formatAssertionsMessage(result, actual, expected, message));
}

const assertArray  = function(expected, actual, message, funcName) {
  const result = areArraysEquals(actual, expected);
  updateAssertionCount(result);
  updateTestLog(result, expected, actual, funcName, message);
  console.log(formatAssertionsMessage(result, actual, expected, message));
}

const assertObject  = function(expected, actual, message, funcName) {
  const result = areObjectsEqual(actual, expected);
  updateAssertionCount(result);
  updateTestLog(result, expected, actual, funcName, message);
  console.log(formatAssertionsMessage(result, actual, expected, message));
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
  let  message = "\nSummary: ";
  message += getPassedAssertions() + " / " + getTotalAssertions();
  message += " passed";
  console.log(message);
}

//--------------------------------------- Example Of Run Tests 

/*
assert(expected, actual, message, functionName);
runTestForSelectOdd();
displayTestSummary();
console.table(testLog);
console.log(groupingTestLog(getTestLog(), "result"));
*/

//------------------------------------------- Export Functions 

exports.printHeadLine = printHeadline;
exports.assert = assert;
exports.assertArray = assertArray;
exports.assertObject = assertObject;
exports.displayTestSummary = displayTestSummary;
exports.groupingTestLog = groupingTestLog;
exports.getTestLog = getTestLog;
