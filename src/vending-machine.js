const sort = require("../lib/sorting-utilities.js");
const math = require("../lib/math-utilities.js")

const decendingSort = sort.decendingSort;

const sumOf = math.sumOf;


const getNoOfCoins = function(amount, denomination) {
  return Math.floor(amount / denomination);
}

const getDenominationsLog = function(amount, denominations) {
  const coinsForEachDenominations = {};
  let remainingAmount = amount;
  denominations = decendingSort(denominations);

  for (const denomination of denominations) {
    const coins = getNoOfCoins(remainingAmount, denomination);

    coinsForEachDenominations[denomination] = coins;
    remainingAmount = remainingAmount - (coins * denomination);
  }

  return coinsForEachDenominations;
}

const determineMinimumNoOfCoins = function(amount, denomination_list) {
  return sumOf(getDenominationsLog(amount, denomination_list));
}

exports.determineMinimumNoOfCoins = determineMinimumNoOfCoins;
exports.decendingSort = decendingSort;
exports.getDenominationsLog = getDenominationsLog;
