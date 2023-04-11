const isEven = function(number) {
  return number % 2 === 0;
}

const determineNoOfCoins = function(amount) {
  const noOfTwoRupeeCoins = Math.floor(amount / 2);

  return isEven ? noOfTwoRupeeCoins : noOfTwoRupeeCoins + 1;
}

exports.determineNoOfCoins = determineNoOfCoins;
