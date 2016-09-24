var arraySorts = (function() {
var module = {};

module.bubbleSort = function (array){
  //var sortedArray = array;
  var moves = 0;
  var swaps = 1;

  while (swaps > 0 ) {
    var pick1;
    var pick2;
    var temporary;
    swaps = 0;
    for (var i = 1; i < array.length; i++) {
      pick1 = array[i-1];
      pick2 = array[i];
      if (pick1 > pick2) {
        temporary = pick1;
        array[i-1] = pick2;
        array[i] = pick1;
        swaps ++;
        //console.log('swaps', swaps);
      }
      moves = moves + swaps;
      //console.log('array', array);
    }
  }
  //console.log('moves', moves);
  return {
    array: array,
    moves: moves
  };
};



return module;
});


module.exports = arraySorts;