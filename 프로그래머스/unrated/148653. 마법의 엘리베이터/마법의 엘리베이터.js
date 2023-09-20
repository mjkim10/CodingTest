function solution(storey) {
    var answer = 0;
    
    const calc = (num, cnt) => {
        if (!num) {
            answer = Math.min(cnt, answer || cnt); 
            return;
        }
        if (answer && cnt > answer) return;
        if (num < 10) {
            if (storey < 10) calc(0, num < 6 ? num : 11 - num);
            else calc(0, cnt + (num < 6 ? num : 11 - num));
            return;
        }
        
        let str = String(num);
        let btn = 10 ** (str.length - 1);
        calc(num - +str[0] * btn, cnt + +str[0]);
        calc((+str[0] + 1) * btn - num, cnt + (+str[0] + 1 === 10 ? 1 : +str[0] + 1));
        if (str[0] > 4) calc(10 * btn - num, cnt + 1);
    }
    
    calc(storey, 0);
    
    return answer;
}