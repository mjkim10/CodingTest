function solution(n) {
    var ans = 0;
    
    while (1) {
        if (n === 1) {ans++; break;}
        if (!(n % 2)) {n /= 2; continue;}
        if (n % 2) {n--; ans++; }
    } 
    
    return ans;
}