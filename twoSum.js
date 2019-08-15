const twoSum = (array, number) => {
  let solution = [];
  for (let num1 = 0; num1 < array.length; num1++){
    if (solution.length > 0){
      break;
    }
    for (let num2 = 0; num2 < array.length; num2++){
      if (num1 !== num2 && array[num1] + array[num2] === number){
	solution.push(num1);
	solution.push(num2);
      }
    }
  }
  return solution;
};

module.exports = twoSum;
