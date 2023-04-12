const getNoOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const getCoinsLog = function(amount, denomination_list) {
  const coinsForEachDenominations = {};
  let remainingAmount = amount;
  denomination_list = denomination_list.reverse();

  for (const denomination of denomination_list) {
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
