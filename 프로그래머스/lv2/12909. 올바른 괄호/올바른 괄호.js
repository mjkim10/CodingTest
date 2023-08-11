function solution(s){
    var answer = true;
    let arr = [];
    let cnt = 0;
    
    answer = s.split('').every(v => {
        v === '(' ? cnt++ : cnt--;
        return cnt > -1;
    });
    
    return answer && !!cnt ? false : answer;
}