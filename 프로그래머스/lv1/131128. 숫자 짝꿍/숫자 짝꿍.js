function solution(X, Y) {
    let numArr = [];
    let xObj = {};

    for (let x of X) xObj[x] = (xObj[x] || 0) + 1;
    
    for (let y of Y) {
        if (xObj[y]) {
            numArr.push(y); xObj[y]--;
        }
    }

    numArr.sort((a,b) => b-a);
    
    return numArr.length 
        ? numArr[0] == 0 ? '0' : numArr.join('')
        : '-1';
}