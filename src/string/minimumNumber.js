"use strict";
function minimumNumber(n, password) {
    const specialChars = new Set("!@#$%^&*()-+");
    let requirements = [0, 0, 0, 0]; // [digit, lower, upper, special]
    for (const char of password) {
        if (/\d/.test(char))
            requirements[0] = 1;
        else if (/[a-z]/.test(char))
            requirements[1] = 1;
        else if (/[A-Z]/.test(char))
            requirements[2] = 1;
        else if (specialChars.has(char))
            requirements[3] = 1;
    }
    const missingTypes = requirements.reduce((sum, count) => sum + (1 - count), 0);
    const totalNeeded = Math.max(missingTypes, 6 - n);
    return totalNeeded;
}
minimumNumber(3, "A");
