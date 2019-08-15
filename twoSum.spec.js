const { expect } = require('chai');
const twoSum = require('./twoSum');


describe('twoSum', () => {
  it('Is a function', () => {
    expect(twoSum).to.be.a('function');
  });
  it('Returns an array', () => {
    expect(twoSum([1, 2, 3], 5)).to.be.an('array');
  });
  it('Returns an array of length 2 or 0', () => {
    expect(twoSum([1, 2, 3], 5).length).to.equal(2);
    expect(twoSum([1, 2, 3], 32).length).to.equal(0);
  });
  it('Actually solves the problem', () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
    expect(twoSum([8, 4, 7, 2, 3], 5)).to.deep.equal([3, 4]);
    expect(twoSum([1, 2, 5, 32049, 3], 6)).to.deep.equal([0, 2]);
    expect(twoSum([1, 2, 3], 5000000)).to.deep.equal([]);
  }); 
});
