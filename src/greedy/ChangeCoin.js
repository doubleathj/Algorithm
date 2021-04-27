'use strict'

// 500원, 100원, 50원, 10원 동전으로 거스름돈을 N원을 줄 때 줘야 할 동전의 최소 개수 (단, N은 10의 배수)

const ChangeCoin = (money) => {
    let n = money;
    let count = 0;
    let coinType = [500, 100, 50, 10];

    // 단위가 큰 동전 부터 나누고 다 안나눠지면 그 다음 동전으로 나눈다.
    for (let coin of coinType) {
        count += Math.floor(n / coin);
        n = n % coin;
    }
    return count;
}



