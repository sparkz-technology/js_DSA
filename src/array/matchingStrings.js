"use strict";
function matchingStrings(stringList, queries) {
    const result = [];
    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < stringList.length; j++) {
            if (stringList[j] === queries[i]) {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}
