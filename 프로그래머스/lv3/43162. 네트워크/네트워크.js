function solution(n, computers) {
    var answer = 0;
    let comArr = [];
    let visit = Array(n).fill(0);
    
    for (let i = 0; i < computers.length; i++) {
        let arr = [];
        for (let j = 0; j < computers.length; j++) {
            if (i === j) continue;
            if (computers[i][j]) arr.push(j);
        }
        comArr.push(arr);
    }
    
    const check = (idx) => {
        if (visit[idx]) return 0;
        visit[idx] = 1; 
        
        for (let i = 0; i < comArr[idx].length; i++) 
            check(comArr[idx][i]);
        return 1;
    }
    
    for (let i = 0; i < comArr.length; i++) {
        answer += check(i);
    }
    
    return answer;
}