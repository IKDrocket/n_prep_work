'use strict';

const memo = new Map();
memo.set(0,0);
memo.set(1,0);
memo.set(2,1);

function trib(number) {
    if (memo.has(number)) {
        return memo.get(number);
    }
    const value = trib(number - 1) + trib(number - 2) + trib(number - 3);
    memo.set(number, value);
    return value;
}

const length = 40;
for (let index = 0; index <= length; index++) {
    console.log(trib(index));
}
