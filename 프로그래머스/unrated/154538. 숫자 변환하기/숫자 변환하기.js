function solution(x, y, n) {
    var answer = -1;
    let stack = [{ num: y, cnt: 0 }];
 
    while (stack.length) {
        let { num, cnt } = stack.shift();
        
        if (num === x) {
            answer = cnt; break;
        }
        
        if (num % 2 === 0) {
            stack.push({ num: num / 2, cnt: cnt + 1});
        }
        if (num % 3 === 0) {
            stack.push({ num: num / 3, cnt: cnt + 1});
        }
        if (num - n >= x) {
            stack.push({ num: num - n, cnt: cnt + 1});
        }
    }
    
    return answer;
}