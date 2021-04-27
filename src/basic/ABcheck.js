'use strict'
// Using the JavaScript language, have the function `ABCheck(str)` take the str parameter being passed and return the true if the characters a and b are separated by exactly 3 places anywhere in the string at least once Otherwise return the false.

// For example, `lane Borrowed` would result in true because there is exactly three characters between `a` and `B`

// You should consider about space and capital character.

// Please Note: you have to take care of `undefined` input case


// 처음 접근한 방법

// - if a와 b 사이에 3글자 존재하면 true (공백도 글자 취급) str.splite('') 사용?
// - if undefined 일 때 케이스 (예외 처리)
// - for 문으으로 a와 b사이에 length 가 3이면 true

// My solution

function ABCheck(str) {
  if (str === undefined) return false;
  str = str.toLowerCase();
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' && arr[i + 4] === 'b') {
      return true;
    }
    if (arr[i] === 'b' && arr[i + 4] === 'a') {
      return true;
    }
  }
  return false;
}

// 놓친부분
// - 대소문자 경우와 a b 의 순서도 고려했어야했다.

// 테스트는 통과 했지만 두번의 if 문을 || 을 사용해서 한번에 작성 했으면 더 깔끔했을 것 이다.

function ABCheck(str) {
  if (str === undefined) return false;
  str = str.toLowerCase();
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === 'a' && arr[i + 4] === 'b') ||
      (arr[i] === 'b' && arr[i + 4] === 'a')
    ) {
      return true;
    }
  }
  return false;
}
