const determineNoOf10RupeeCoins = function(amount) {
  return Math.floor(amount / 10);
}

const determineNoOf5RupeeCoins = function(amount) {
  return Math.floor(amount / 5);
}

const determineNoOf2RupeeCoins = function(amount) {
  return Math.floor(amount / 2);
}

const determineNoOfCoins = function(amount) {
  let remainingAmount = amount;

  const noOfTenRupeeCoins = determineNoOf10RupeeCoins(remainingAmount);
  remainingAmount = remainingAmount - (noOfTenRupeeCoins * 10);

  const noOfFiveRupeeCoins = determineNoOf5RupeeCoins(remainingAmount);
  remainingAmount = remainingAmount - (noOfFiveRupeeCoins * 5);

  const noOfTwoRupeeCoins = determineNoOf2RupeeCoins(remainingAmount);
  remainingAmount = remainingAmount - (noOfTwoRupeeCoins * 2);

  const noOfOneRupeeCoins = remainingAmount % 2 === 0 ? 0 : 1;

  const totalCoins = noOfOneRupeeCoins + noOfTwoRupeeCoins + noOfFiveRupeeCoins + noOfTenRupeeCoins;
  return totalCoins;
}

exports.determineNoOfCoins = determineNoOfCoins;
