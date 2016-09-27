// let sortingModule = (function() {
// let module = {};

exports.bubbleSort = function (array){
  let moves = 0;
  let swaps = 1;
  let swapsCache = [];
  while (swaps > 0 ) {
    let pick1;
    let pick2;
    let temporary;
    swaps = 0;
    for (var i = 1; i < array.length; i++) {
      pick1 = array[i-1];
      pick2 = array[i];
      if (pick1 > pick2) {
        temporary = pick1;
        array[i-1] = pick2;
        array[i] = pick1;
        swaps ++;
        swapsCache.push(i-1);
      }
      moves = moves + swaps;
    }
  }
  return {
    array: array,
    moves: moves,
    swapsCache: swapsCache
  };
};

function quickSort(array){
  if (array.length <= 1) {
    return array;
  }
  let pivot = array.shift();
  let left = array.filter(element => {
    return element <= pivot;
  });
  let right = array.filter(element => {
    return element >= pivot;
  });
  return quickSort(left).concat(pivot, quickSort(right));
}
exports.quickSort = quickSort; //module.exports = quickSort;

exports.selectionSort = function (array){
  let minIndex;
  let temp;
  let i = 0;
  while (i < array.length - 1) {
    minIndex = i;
    for (var j = i + 1; j < array.length ; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    i ++;
  } //eof while
  return array;
};
//exports.selectionSort = selectionSort;

exports.insertionSort = function (array){
  for (var j = 1; j < array.length -1; j++) {
    let pick1 = array[j];
    i = j-1;
    while (i >= 0 && array[i] >= pick1) {
      array[i+1] = array[i];
      i --;
    } //eof while
    array[i+1] = pick1;
  }
  return array;
};

function merge (array1, array2) {
  let mergedArr = [];
  while (array1.length > 0 && array2.length > 0) {
    if ( array1[0] <= array2[0]) {
      mergedArr.push(array1[0]);
      array1.splice(0,1);
    } else {
      mergedArr.push(array2[0]);
      array2.splice(0,1);
    }
   } // oef while
  while (array1.length > 0) {
    mergedArr.push(array1[0]);
    array1.splice(0,1);
  } //eof while
  while (array2.length > 0) {
    mergedArr.push(array2[0]);
    array2.splice(0,1);
  } //eof while
  return mergedArr;
}
function mergeSort (array) {
  let rightArr = [];
  let leftArr = [];
  if (array.length <= 1){
    return array;
  }
  if (array.length %2 === 0) {
    n = array.length /2;
  } else {
    n = (array.length - 1) /2;
  }
  rightArr = array.slice(n);
  leftArr = array.slice(0,n);
  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);
  return merge(leftArr, rightArr);
}
exports.mergeSort = mergeSort;

// return module;
// });
// module.exports = sortingModule;

