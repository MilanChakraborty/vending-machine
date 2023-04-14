const areArraysEqual = function(array1, array2) {
  if(array1 == array2) {
    return true;
  }

  if (array1.length !== array2.length) {
    return false;
  };

  for (let index of array1) {
    if (array1[index] !== array2[index]) {
      return false;
    };
  };

  return true;
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

const areExactlySame  = function(actualValue, expectedValue) {
  return expectedValue === actualValue;
}

const areAlmostSame  = function(actualValue, expectedValue, precision) {
  return (expectedValue >= actualValue - precision) && (expectedValue <= actualValue + precision);
}

const areSame  = function(actualValue, expectedValue) {
  if (areExactlySame(actualValue, expectedValue)) {
    return true;
  }
  return areAlmostSame(actualValue, expectedValue, 0.01);
}

exports.areArraysEqual = areArraysEqual;
exports.areObjectsEqual = areObjectsEqual;
exports.areSame = areSame;
