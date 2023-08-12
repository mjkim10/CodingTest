function solution(s) {
    var answer = [0,0];
    
    while (s !== '1') {
        let temp = s.toString().replace(/[0]/g, '');
        answer[0] += 1;
        answer[1] += s.length - temp.length;
        s = temp.length.toString(2);
    }
    
    return answer;
}