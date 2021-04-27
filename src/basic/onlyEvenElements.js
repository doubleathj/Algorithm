'use strict';
// onlyEvenElements
// Given an array of numbers, onlyEvenElements returns a new array of just the even numbers.

function onlyEvenElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
