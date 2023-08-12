function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a,b) => b-a);
    
    for (let i = 0, len = score.length; i + m - 1 < len; i += m) {
        answer += m * score[i + m - 1];
    }
    
    return answer;
}