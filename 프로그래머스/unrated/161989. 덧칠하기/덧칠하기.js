function solution(n, m, section) {
    var answer = 0;
    let preSection = 0;
    
    for (let i = section.length - 1; i >= 0; i--) {
        let value = section[i];
        
        if (preSection && preSection - m + 1 <= value) {
            continue;
        }
        
        preSection = value;
        answer += 1;
        
    }
    
    return answer;
}