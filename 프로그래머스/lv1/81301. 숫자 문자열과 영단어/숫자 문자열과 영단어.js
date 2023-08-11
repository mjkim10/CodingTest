function solution(s) {
    var answer = 0;
    
    var numberArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    numberArr.map((num, idx) => {
        s = s.replace(new RegExp(num, 'g'), String(idx));
        if (idx === numberArr.length - 1) answer = Number(s);
    })
    
    return answer;
}