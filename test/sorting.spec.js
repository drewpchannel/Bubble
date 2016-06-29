var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var bubbleSort = require('./../bubbleSort.js');

describe('what?', function () {

  it('run the sorting function', function () {
    expect(bubbleSort).to.be.a('function');
  });

});
