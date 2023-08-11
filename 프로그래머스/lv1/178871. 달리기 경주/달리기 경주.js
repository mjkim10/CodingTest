function solution(players, callings) {
    var answer = [];
    var playerObj = {};
    
    players.forEach((v, idx) => {
        playerObj[v] = idx;
    })
    
    answer = [...players];
    callings.forEach(p => {
        let rank = playerObj[p];
        let pre = answer[rank - 1];
        
        playerObj[p] = rank - 1;
        playerObj[pre] = rank;
        
        answer[rank - 1] = p;
        answer[rank] = pre;
    })
    
    
    return answer;
}