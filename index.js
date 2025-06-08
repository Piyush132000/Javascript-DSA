"use strict";
function countDigits(x) {
    return Math.floor(Math.log10(x)) + 1;
}
function numberPalindrom(x) {
    let res = x;
    let revers = 0;
    while (x > 0) {
        let reminder = x % 10;
        revers = revers * 10 + reminder;
        x = Math.floor(x / 10);
    }
    return revers === res;
}
function factorial(x) {
    let res = 1;
    while (x > 0) {
        res *= x;
        x--;
    }
    return res;
}
function countTrailingZero(x) {
    let count = 0;
    for (let i = 5; i <= x; i = i * 5) {
        count = count + Math.floor(x / i);
    }
    return count;
}
function greatestNumber(a, b) {
    while (b != 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
console.log(isPrimeBySeiveOfErathosesnse(1099));
function leastMultipleNumber(a, b) {
    return a * b / greatestNumber(a, b);
}
function isPrime(n) {
    if (n == 1)
        return false;
    if (n === 2 || n === 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i == 0 && n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
function isPrimeBySeiveOfErathosesnse(n) {
    let prime = new Array(n + 1).fill(true);
    let count = 0;
    for (let i = 2; i * i <= n; i++) {
        if (prime[i] == true) {
            for (let j = i * i; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }
    for (let i = 2; i < n; i++) {
        if (prime[i])
            count++;
    }
    return count;
}
function primFactorial(x) {
    let res = [];
    return res;
}
