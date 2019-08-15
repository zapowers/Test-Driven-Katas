const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Solves the example given to us with lorem ipsum', () => {
    const solution = `Lorem ipsum dolor
sit eu amet, elit na
magna sem amet nulla
vel purus ac ligula.`;
    const example = wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20);
    expect(example).to.equal(solution);
  });
});
