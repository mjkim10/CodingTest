function solution(book_time) {
    var answer = 0;
    
    let sortedArr = book_time.map(arr => arr.map(v => Number(v.replace(':', '')))).sort((a,b) => a[0] - b[0]);
    let finishTime = [];
    
    for (let i = 0; i < sortedArr.length; i++) {
        
        if (!finishTime.length) {
            finishTime.push(sortedArr[i][1]);
        } else {
            let existIdx = -1;
            for (let j = 0; j < finishTime.length; j++) {
                if (convertIntTime(finishTime[j] + 10) <= sortedArr[i][0]) {existIdx = j; break;}
            }
            if (existIdx > -1) finishTime[existIdx] = sortedArr[i][1];
            else {
                finishTime.push(sortedArr[i][1]);
            }
        }
    }
    
    answer = finishTime.length;
    
    return answer;
}

const convertIntTime = num => {
    let hour = Math.floor(num/100);
    let min = num%100;
    if (min >= 60) {
        min -= 60;
        return Number('' + (hour + 1) + (min >= 10 ? min : '0' + min))
    }
    return num;
}