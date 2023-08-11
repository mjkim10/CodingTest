function solution(operations) {
    var answer = [];
    const sortedArr = [];
    
    let maxIdx = 0, minIdx = 0;
    for (let i = 0; i < operations.length; i++) {
        let opArr = operations[i].split(' ');
        
        if (opArr[0] === 'I') {
            let num = Number(opArr[1]);
            
            if (answer.length) {
                if (answer[maxIdx] < num) maxIdx = answer.length;
                if (answer[minIdx] > num) minIdx = answer.length;
            } else {
                maxIdx = 0, minIdx = 0;
            }
            answer.push(num);
            
        }
        else if (opArr[0] === 'D') {
            if (!answer.length) continue;
            if (opArr[1] == 1) {
                answer.splice(maxIdx, 1);
                minIdx -= maxIdx < minIdx ? 1 : 0;
            } else {
                answer.splice(minIdx, 1);
                maxIdx -= minIdx < maxIdx ? 1 : 0;
            }
        }
    }
    
    return answer.length ? [Math.max(...answer), Math.min(...answer)] : [0,0];
}