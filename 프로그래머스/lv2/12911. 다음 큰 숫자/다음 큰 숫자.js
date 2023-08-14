function solution(n) {
    var answer = n + 1;
    
    while (answer.toString(2).match(/1/g).length !== 
                    n.toString(2).match(/1/g).length) answer++;
    
    return answer;
}