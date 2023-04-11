const getNoOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const getCoinsLog = function(amount) {
  const denominations = [1, 2, 5, 10];
  const coinsForEachDenominations = [];
  let remainingAmount = amount;

  for (let index = denominations.length - 1; index >= 0; index--) {

    const coins = getNoOfCoins(remainingAmount, denominations[index]);
    coinsForEachDenominations.push(coins);
    remainingAmount = remainingAmount - (coins * denominations[index]);
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

const getTotalNoOfCoins = function(amount) {
  return sumOf(getCoinsLog(amount));
}

exports.getTotalNoOfCoins = getTotalNoOfCoins;
