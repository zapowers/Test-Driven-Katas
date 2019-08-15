const { expect } = require('chai');
const lcp = require('./longestCommonPrefix.js');

describe('Longest common prefix', () => {
  it('Should be a function', () => {
    expect(lcp).to.be.a('function');
  });
  it('Should return a string', () => {
    expect(lcp(['foo', 'bar', 'baz'])).to.be.a('string');
  });
  it('Should solve the problem', () => {
    expect(lcp(['foobar', 'foo', 'foolish'])).to.equal('foo');
  });
});
