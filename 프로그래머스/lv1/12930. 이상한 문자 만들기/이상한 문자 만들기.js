function solution(s) {
    var answer = '';
    
    for (let i = 0, cnt = 1; i < s.length; i++) {
        if (s[i] === ' ') cnt = 1;
        else cnt++;
        answer += cnt % 2 ? s[i].toLowerCase() : s[i].toUpperCase();
    }
    
    return answer;
}