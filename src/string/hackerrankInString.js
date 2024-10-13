"use strict";
const hackerrankInString = (string) => {
    const target = "hackerrank";
    let acc = 0;
    for (const char of string) {
        if (char === target[acc]) {
            acc++;
        }
        if (acc === target.length) {
            return "YES";
        }
    }
    return "NO";
};
console.log(hackerrankInString("hereiamstackerrank")); // "YES"
