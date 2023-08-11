function solution(t, p) {
    var answer = 0;
    
    let len = p.length;
    
    for (let i = 0; i <= t.length - len; i++) {
        if (+t.substr(i, len) <= +p) answer++;
    }
    
    return answer;
}