function solution(n) {
    var answer = 0;
    
    if (n === 1) return 1;
    for (let i = Math.ceil(n / 2), j = 0, sum = 0; i > 0 && i > j; i--) {
        while (i > j) {
            sum += i - j;
            if (sum === n) {answer++; break;}
            if (sum > n) break;
            j++;
        }
        sum -= i;
    }
    
    return answer + 1;
}