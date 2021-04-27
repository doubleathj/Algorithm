'use strict';

// Week 2-3 bugInApple
// Find out "B"(Bug) in a lot of "A"(Apple).
// (수많은 "A"(Apple) 사이에서 "B"(Bug)를 찾으세요.)

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
// (사과(apple) 사이에는 언제나 항상 한개의 벌레(bug)가 있으므로 벌레가 없는 경우나 한개 이상인 경우는 고려하지 않으셔도 됩니다.)

// Note: 2-dimesional Array will be input.
// (노트: 2차원 배열이 매개변수로 주어집니다.)

// input:

// [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]]
// output:

// [1,1]

let bugInApple = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 'B') {
        result.push(i, j);
      }
    }
  }
  return result;
};
