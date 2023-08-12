function solution(babbling) {
    var answer = 0;
    let word = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        let s = babbling[i], existDup = false;
        for (const w of word) {
            if (s.length !== s.replace(new RegExp(`(${w})+`, 'g'), w).length) {
                existDup = true; break;
            } 
        }
        if (existDup) continue;
        
        for (const w of word) s = s.replace(new RegExp(`${w}`, 'g'), '0');
        if (!isNaN(s)) answer++;
    }
    
    return answer;
}