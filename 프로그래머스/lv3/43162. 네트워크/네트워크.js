function solution(n, computers) {
    var answer = 0;
    let comArr = [];
    let visit = Array(n).fill(0);
    
    const check = (idx) => {
        if (visit[idx]) return 0;
        visit[idx] = 1; 
        
        for (let i = 0; i < computers[idx].length; i++) 
            if (computers[idx][i]) check(i);
        return 1;
    }
    
    for (let i = 0; i < computers.length; i++) {
        answer += check(i);
    }
    
    return answer;
}