const sumOf = function(list) {
  let sum = 0;
  for (const value of Object.values(list)) {
    sum += value;
  }
  return sum;
}

exports.sumOf = sumOf;
