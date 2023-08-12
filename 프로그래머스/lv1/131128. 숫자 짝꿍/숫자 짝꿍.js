function solution(X, Y) {
    let numArr = [];
    let xObj = {}, yObj = {};
    
    for (let x of X) xObj[x] = (xObj[x] || 0) + 1;
    for (let y of Y) yObj[y] = (yObj[y] || 0) + 1;
    
    for (let i = 9; i >= 0; i--) {
        let cnt = Math.min(xObj[i]||0, yObj[i]||0);
        while (cnt--) numArr.push(i); 
    }
    
    return numArr.length 
        ? numArr[0] == '0' ? '0' : numArr.join('')
        : '-1';
}