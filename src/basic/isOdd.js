'use strict'
// Write a function called `isOdd`.

// Given an integer, `isOdd` returns whether the integer is odd or not.


// let output1 = isOdd(42);
// console.log(output1); // --> false

// let output2 = isOdd(19);
// console.log(output2); // --> true


// **처음 접근한 방법 (수도 코드)**
// 나머지 연산을 통해 1이 나오면 홀수


// **My solution**


function isOdd(num) {
 if(num % 2 === 1) {
   return true
 } 
  return false 
}


// **놓친부분**

// - 없음

// **피드백**

// - 없음

// **modified code**
