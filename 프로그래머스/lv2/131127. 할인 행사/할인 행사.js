function solution(want, number, discount) {
    var answer = 0;
    let wantObj = {};
    
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        let temp = {...wantObj};
        
        for (let j = i; j < 10 + i; j++) {
            if (!temp[discount[j]]) break;
            if (--temp[discount[j]] < 0) break;
            
            if (j === i + 9) {
                if (!Object.values(temp).filter(v => v).length) answer++;
            }
        }
        
    }
    
    return answer;
}