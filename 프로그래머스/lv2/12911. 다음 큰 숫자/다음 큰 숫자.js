function solution(n) {
    var answer = n + 1;
    let cnt = n.toString(2).match(/1/g).length;
    
    while (1) {
        let num = answer.toString(2).match(/1/g).length;
        if (num === cnt) break;
        answer++;
    }
    
    return answer;
}