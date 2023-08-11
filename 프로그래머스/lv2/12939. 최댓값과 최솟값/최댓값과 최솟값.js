function solution(s) {
    var answer = '';
    
    let arr = s.split(' ').map(v => Number(v));
    answer = [Math.min(...arr), Math.max(...arr)].join(' ');
    
    return answer;
}