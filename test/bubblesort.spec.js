const Chai = require('chai');
let Expect = Chai.expect;
const arraySorts = require('../js/bubblesort');

describe ('arraySorts Function', function(){
  var mySorts;
  beforeEach(function (){
    mySorts = arraySorts();
  });
      // test point 1, must pass if you connected correctly the js file in Step7
  it('Should exist',() => {
    Expect(arraySorts).to.be.a('function');
  });
  it('Should have a bubbleSort methode',() => {
    Expect(mySorts.bubbleSort).to.be.a('function');
  });


  it('Should return an object with moves' ,() => {
    Expect(mySorts.bubbleSort([5,1,4,2,8]).array).to.deep.equal([1,2,4,5,8]);
    Expect(mySorts.bubbleSort([5,1,4,2,8]).moves).to.deep.equal(12);
  });


});
