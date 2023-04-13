const getNoOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const getCopy = function(list) {
  return list.slice(0);
}

const maxOf = function(listOfNumbers) {
  let currentMax = listOfNumbers[0];

  for (const value of listOfNumbers) {
    if (value > currentMax) {
      currentMax = value;
    };
  };
  return currentMax;
}

const sort = function(list) {
  const listCopy = getCopy(list);
  let length = listCopy.length;

  for (let i = 0; i < listCopy.length; i++) {
    for (let j = 0; j < length; j++) {

      if (listCopy[j] < listCopy[j + 1]) {
        const temp = listCopy[j];
        listCopy[j] = listCopy[j + 1];
        listCopy[j + 1] = temp;
      }
    }
    length = length - 1;
  }
  return listCopy;
}


//const sort = function(listOfNumbers) {
//  const listOfNumbersCopy = getCopy(listOfNumbers);
//  const sortedArray = [];
//  const length = listOfNumbersCopy.length;
//
//  for (let index = 0; index < length; index++) {
//    let currentMax = maxOf(listOfNumbersCopy);
//    let indexOfCurrentMax = listOfNumbersCopy.indexOf(currentMax);
//
//    sortedArray.push(currentMax);
//    listOfNumbersCopy.splice(indexOfCurrentMax, 1);
//  }
//  return sortedArray;
//}

const getCoinsLog = function(amount, denominationList) {
  const coinsForEachDenominations = {};
  let remainingAmount = amount;
  denominationList = sort(denominationList);

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
exports.sort = sort;
