const decendingSort = function(numbers) {
  const sortedNumbers = numbers.slice(0);
  let length = sortedNumbers.length;

  for (let pass = 0; pass < sortedNumbers.length - 1; pass++) {
    for (let index = 0; index < length - pass - 1; index++) {

      if (sortedNumbers[index] < sortedNumbers[index + 1]) {
        const temp = sortedNumbers[index];
        sortedNumbers[index] = sortedNumbers[index + 1];
        sortedNumbers[index + 1] = temp;
      }
    }
  }
  return sortedNumbers;
}

exports.decendingSort = decendingSort;
