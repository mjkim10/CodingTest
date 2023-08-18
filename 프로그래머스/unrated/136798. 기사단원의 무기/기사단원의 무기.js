function solution(number, limit, power) {
    var answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let cnt = 0, j = 1;
        while (1) {
            if (!(i % j)) cnt += (i === j ** 2 ? 1 : 2);
            if (cnt > limit) {answer += power; break;}
            if (parseInt(Math.sqrt(i)) === j) {answer += cnt; break;}
            j++;
        }
    }
    
    return answer;
}