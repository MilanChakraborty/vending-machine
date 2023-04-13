const getNoOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const sort = function(list) {
  const listCopy = list.slice(0);
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

const getDenominationsLog = function(amount, denominationList) {
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
  return sumOf(getDenominationsLog(amount, denomination_list));
}

exports.getMinimumNoOfCoins = getMinimumNoOfCoins;
exports.sort = sort;
exports.getDenominationsLog = getDenominationsLog;
