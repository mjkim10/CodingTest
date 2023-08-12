function solution(k, score) {
    let arr = [];
    
    // return score.map(v => {
    //     if ((arr[k - 1] || -1) < v) {
    //         let idx = (arr.length < k ? arr.length : k) - 1;
    //         while ((arr[idx] || -1) < v && idx > -1) idx--;
    //         arr.splice(idx + 1, 0, v);
    //     }
    //     return arr[(arr.length < k ? arr.length : k) - 1];
    // });
    
    return score.map(v => {
        arr.push(v);
        arr.sort((a,b) => b - a);
        if (arr.length > k) arr.pop();
        return arr[(arr.length < k ? arr.length : k) - 1];
    })
}