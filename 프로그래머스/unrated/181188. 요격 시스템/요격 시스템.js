function solution(targets) {
    var answer = 0;
    let prev = [];
    
    targets.sort((a,b) => a[1] - b[1]);
    
    for (let i = 0; i < targets.length; i++) {
        if (!prev.length || targets[i][0] >= prev[1]) {
            prev = targets[i]; 
            answer++;
        }
    }
    
    
    return answer;
}