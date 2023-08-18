function solution(a, b, n) {
    var answer = 0;
    let total = n;
    
    while (total >= a) {
        let cnt = Math.floor(total / a) * b;
        answer += cnt;
        total = total % a + cnt;
    }
    
    return answer;
}