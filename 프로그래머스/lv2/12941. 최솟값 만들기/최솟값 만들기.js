function solution(A,B){
    var answer = 0;
    
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    
    answer = A.reduce((sum, v, idx) => sum + v * B[idx], 0)
    
    return answer;
}