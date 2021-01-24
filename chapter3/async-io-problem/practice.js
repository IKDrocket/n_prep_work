'use strict';
const fs = require('fs');
const { resolve } = require('path');
const fileName = './test.txt';

//answer1
function main_bk() {
    for (let count = 0; count < 30; count++) {
        fs.appendFileSync(fileName, 'おはようございます\n', 'utf8');
        fs.appendFileSync(fileName, 'こんにちは\n', 'utf8');
        fs.appendFileSync(fileName, 'こんばんは\n', 'utf8');
    }
}


//answer2
function appendFilePromise(fileName, str) {
    return new Promise((resolve) => {
        fs.appendFile(fileName, str, 'utf-8', () => resolve());
    });
}

async function main() {
    for (let count = 0; count < 30; count++) {
        await appendFilePromise(fileName, 'おはようございます\n');
        await appendFilePromise(fileName, 'こんにちは\n');
        await appendFilePromise(fileName, 'こんばんは\n');
    }
}


//main_bk();
main();