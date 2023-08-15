function solution(n, left, right) {
    var answer = [];
    
    for (let i = left; i < right + 1; i++) {
        let row = Math.floor(i/n), col = i%n;
        answer.push((row > col ? row : col) + 1);
    }
    
    return answer;
}