function solution(a, b) {
    
    return a.reduce((sum, v, i) => sum + v * b[i], 0);
}