const decendingSort = function(numbers) {
  const sortedNumbers = numbers.slice(0);
  let length = sortedNumbers.length;

  for (let i = 0; i < sortedNumbers.length; i++) {
    for (let j = 0; j < length; j++) {

      if (sortedNumbers[j] < sortedNumbers[j + 1]) {
        const temp = sortedNumbers[j];
        sortedNumbers[j] = sortedNumbers[j + 1];
        sortedNumbers[j + 1] = temp;
      }
    }
    length = length - 1;
  }
  return sortedNumbers;
}

exports.decendingSort = decendingSort;
