const wrap = (line, maxLen) => {
  return line.split(' ').reduce((solution, word, index) => {
    let solutionArray = solution.split('\n');
    if (solutionArray[solutionArray.length - 1].length
	+ word.length >= maxLen){
      solution += `\n${word}`;
      return solution;
    }
    return solution + ((index === 0) ? '' : ' ') + word;
  });
};
module.exports = wrap;
