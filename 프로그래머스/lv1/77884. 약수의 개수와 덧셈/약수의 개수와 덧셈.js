function solution(left, right) {
    var answer = 0;
    
    for (let i = left; i <= right; i++) {
        let cnt = [...Array(i)].filter((_, idx) => i % (idx + 1) === 0).length
        if (cnt % 2) answer -= i;
        else answer += i;
    }
    return answer;
}