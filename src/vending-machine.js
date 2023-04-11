const determineNoOfCoins = function(amount) {
  let remainingAmount;
  const noOfFiveRupeeCoins = Math.floor(amount / 5);
  remainingAmount = amount - (noOfFiveRupeeCoins * 5);
  const noOfTwoRupeeCoins = Math.floor(remainingAmount / 2);
  const noOfOneRupeeCoins = remainingAmount % 2 === 0 ? 0 : 1;

  const TotalCoins = noOfOneRupeeCoins + noOfTwoRupeeCoins + noOfFiveRupeeCoins;
  return TotalCoins;
}

exports.determineNoOfCoins = determineNoOfCoins;
