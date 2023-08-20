function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    
    for (let i = 1; i <= Math.floor(Math.sqrt(yellow)); i++) {
        if (yellow % i) continue;
        if (total === (yellow / i + 2) * (i + 2)) {
            answer = [yellow / i + 2, i + 2]; break;
        }
    }
    
    return answer;
}