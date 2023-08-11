function solution(r1, r2) {
    var answer = 0;
    
    let lineCnt = r2 - r1 + 1;
    let others = 0;
    
    for (let i = 1; i < r2; i++) {
        let s = (i >= r1) ? 0 : getSize(i, r1);
        let b = getSize(i, r2);
        
        others += b - s;
        
        if (i < r1 && Number.isInteger(Math.sqrt(r1**2 - i**2))) {
            others+=1;
        }
    }
    
    answer = (lineCnt + others) * 4;
    return answer;
}

const getSize = (x, r) => {
    return Math.floor(Math.sqrt(r**2 - x**2));
}