const getNoOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const getCoinsLog = function(amount, denomination_list) {
  const coinsForEachDenominations = [];
  let remainingAmount = amount;

  for (let index = denomination_list.length - 1; index >= 0; index--) {
    const coins = getNoOfCoins(remainingAmount, denomination_list[index]);
    coinsForEachDenominations.push(coins);
    remainingAmount = remainingAmount - (coins * denomination_list[index]);
  }

  return coinsForEachDenominations;
}

const sumOf = function(list) {
  let sum = 0;
  for (number of list) {
    sum += number;
  }
  return sum;
}

const getTotalNoOfCoins = function(amount, denomination_list) {
  return sumOf(getCoinsLog(amount, denomination_list));
}

exports.getTotalNoOfCoins = getTotalNoOfCoins;
