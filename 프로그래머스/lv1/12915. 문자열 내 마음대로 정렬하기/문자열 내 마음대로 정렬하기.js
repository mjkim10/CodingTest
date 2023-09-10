function solution(strings, n) {
    return strings.sort((a,b) => a[n] + a > b[n] + b ? 1 : -1);
}