"use strict";
function upperCase(string) {
    return string.charCodeAt(0) >= 65 && string.charCodeAt(0) <= 90;
}
function camelcase(s) {
    return s.split("").filter((letter) => upperCase(letter)).length + 1;
}
