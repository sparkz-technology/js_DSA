"use strict";
const pangrams = (sentence) => {
    sentence = sentence.toLowerCase();
    const regex = /[a-z]/;
    const letters = new Set();
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (regex.test(char)) {
            letters.add(char);
        }
    }
    return letters.size == 26 ? "pangram" : "not pangram";
};
