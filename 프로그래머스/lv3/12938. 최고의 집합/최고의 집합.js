function solution(n, s) {
    var answer = [];
    
    let div = Math.floor(s/n);
    let rem = s % n;
    
    return div 
    ? [...Array(n)].map((_, i) => div + (rem - i > 0 ? 1 : 0)).reverse()
    : [-1];
}