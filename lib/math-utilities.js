const sumOf = function(list) {
  let sum = 0;
  for (const value of Object.values(list)) {
    sum += value;
  }
  return sum;
}

const quotient = function(dividend, divisor) {
  return Math.floor(dividend / divisor);
}

exports.sumOf = sumOf;
exports.quotient = quotient;
