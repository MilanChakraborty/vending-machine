const getNoOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const maxOf = function(listOfNumbers) {
  let currentMax = listOfNumbers[0];

  for (value of listOfNumbers) {
    if (value > currentMax) {
      currentMax = value;
    };
  };
  return currentMax;
}

const maxSort = function(listOfNumbers) {
  const sortedArray = [];
  const length = listOfNumbers.length;

  for (let index = 0; index < length; index++) {
    let currentMax = maxOf(listOfNumbers);
    let indexOfCurrentMax = listOfNumbers.indexOf(currentMax);

    sortedArray.push(currentMax);
    listOfNumbers.splice(indexOfCurrentMax, 1);
  }
  return sortedArray;
}

const getCoinsLog = function(amount, denominationList) {
  const coinsForEachDenominations = {};
  let remainingAmount = amount;
  denominationList = maxSort(denominationList);

  for (const denomination of denominationList) {
    const coins = getNoOfCoins(remainingAmount, denomination);

    coinsForEachDenominations[denomination] = coins;
    remainingAmount = remainingAmount - (coins * denomination);
  }

  return coinsForEachDenominations;
}

const sumOf = function(list) {
  let sum = 0;
  for (const value of Object.values(list)) {
    sum += value;
  }
  return sum;
}

const getMinimumNoOfCoins = function(amount, denomination_list) {
  return sumOf(getCoinsLog(amount, denomination_list));
}

exports.getMinimumNoOfCoins = getMinimumNoOfCoins;
exports.maxOf = maxOf;
exports.maxSort = maxSort;
