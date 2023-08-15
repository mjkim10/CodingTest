function solution(n) {
    var answer = BigInt(0);
    
    for (let i = 0, pre = 1n; i < n; i++) {
        if (i === 0) {answer += 0n; continue;}
        if (i === 1) {answer += 1n; continue;}
        answer += pre;
        pre = answer - pre;
    }
    
    return answer % 1234567n;
}