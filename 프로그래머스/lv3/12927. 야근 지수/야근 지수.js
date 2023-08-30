function solution(n, works) {
    var answer = 0;
    
    works.sort((a,b) => a - b);
    let rem = works.reduce((acc, v) => acc + v, 0) - n;
    
    for (let i = 0; i < works.length && rem > 0; i++) {
        let div = Math.floor(rem / (works.length - i));
        
        let num = Math.min(works[i], div);
        rem -= num
        answer += num ** 2;
    }
    
    return answer;
}