function solution(numbers, hand) {
    var answer = '';
    let lArr = [1,4,7], rArr = [3,6,9];
    let obj = {};
    [...Array(9)].forEach((v, idx) => {
        obj[idx + 1] = [Math.ceil((idx + 1)/3)-1, (idx+1 +2)%3];

        if(idx === 8) {
            obj['*'] = [3,0];
            obj[0] = [3,1];
            obj['#'] = [3,2];
        }
    })
    let lPos = obj['*'], rPos = obj['#'];

    const pressKey = (key, num) => {
        if (key === 'R') rPos = obj[num];
        else lPos = obj[num];
        answer += key;
    }
    
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (lArr.includes(num)) {
            pressKey('L', num);
        } else if (rArr.includes(num)) {
            pressKey('R', num);
        } else {
            let numPos = obj[num];
            let ldis = Math.abs(numPos[0] - lPos[0]) + Math.abs(numPos[1] - lPos[1]);
            let rdis = Math.abs(numPos[0] - rPos[0]) + Math.abs(numPos[1] - rPos[1]);
            if (rdis < ldis) {
                pressKey('R', num);
            } else if (ldis < rdis) {
                pressKey('L', num);
            } else {
                pressKey(hand === 'right' ? 'R' : 'L', num);
            }
        }
        
    }
    return answer;
}