const Chai = require('chai');
let Expect = Chai.expect;
const arraySorts = require('../js/sorting');

describe ('arraySorts Function', function(){
  var mySorts;
  beforeEach(function (){
    mySorts = arraySorts;
  });
      // test point 1, must pass if you connected correctly the js file in Step7
  it('Should exist',() => {
    Expect(arraySorts).to.be.a('object');
  });
  it('Should have a bubbleSort methode',() => {
    Expect(mySorts.bubbleSort).to.be.a('function');
  });
  it('Should have a quickSort methode',() => {
    Expect(mySorts.quickSort).to.be.a('function');
  });
  it('Should have a selection Sort methode',() => {
    Expect(mySorts.selectionSort).to.be.a('function');
  });
  it('Should have a insertion Sort methode',() => {
    Expect(mySorts.selectionSort).to.be.a('function');
  });
  it('Should have a merge Sort methode',() => {
    Expect(mySorts.mergeSort).to.be.a('function');
  });

  it('Should return an object with moves' ,() => {
    Expect(mySorts.bubbleSort([5,1,4,2,8]).array).to.deep.equal([1,2,4,5,8]);
    Expect(mySorts.bubbleSort([5,1,4,2,8]).moves).to.deep.equal(12);
  });

  it('Should return an array for swaps', () => {
    Expect(mySorts.bubbleSort([5,1,4,2,8]).swapsCache).to.deep.equal([0,1,2,1]);
  });

  it('Should return an array by quicksort', () => {
    Expect(mySorts.quickSort([5,1,4,2,8])).to.deep.equal([1,2,4,5,8]);
  });
  it('Should return an array by selectionsort', () => {
    Expect(mySorts.selectionSort([5,1,4,2,8])).to.deep.equal([1,2,4,5,8]);
  });
  it('Should return an array by insertionsort', () => {
    Expect(mySorts.insertionSort([5,1,4,2,8])).to.deep.equal([1,2,4,5,8]);
  });
  it('Should return an array by mergesort', () => {
    Expect(mySorts.mergeSort([14,33,27,10,35,19,42,44,45])).to.deep.equal([10,14,19,27,33,35,42,44,45]);
    Expect(mySorts.mergeSort([9,8,7,6,5,4,3,2,1])).to.deep.equal([1,2,3,4,5,6,7,8,9]);
  });



});
