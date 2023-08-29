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
        if (visit[idx]) return;
        visit[idx] = 1;
        for (let i = 0; i < comArr[idx].length; i++) 
            check(comArr[idx][i]);
    }
    
    for (let i = 0; i < comArr.length; i++) {
        if (visit[i]) continue;
        visit[i] = 1; answer++; 
        
        if (!comArr[i].length) continue;
        
        for (let j = 0; j < comArr[i].length; j++) {
            check(comArr[i][j]);
        }
    }
    
    return answer;
}