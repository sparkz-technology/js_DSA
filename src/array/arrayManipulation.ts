function arrayManipulation(n: number, queries: number[][]): number {
    const computation: number[] = new Array(n).fill(0);

    queries.forEach(([a, b, k]) => {
        computation[a - 1] += k;
        if (b < n) {
            computation[b] -= k; 
        }
    });

    const prefixSums = computation.reduce((acc, curr) => {
        const sum = acc.length > 0 ? acc[acc.length - 1] + curr : curr;
        acc.push(sum);
        return acc;
    }, [] as number[]);

    return Math.max(...prefixSums);
}
