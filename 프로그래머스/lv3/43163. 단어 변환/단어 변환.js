function solution(begin, target, words) {
    var answer = 0;
    let len = begin.length;
    
    const check = (curr, visit, a) => {
        if (answer && a > answer) return; 
        if (curr === target) {
            if (!answer || answer > a) answer = a;
            return;
        }
        
        for (let i = 0; i < visit.length; i++) {
            let currCnt = 0, targetCnt = 0;
            for (let j = 0; j < len; j++) {
                if (curr[j] === visit[i][j]) currCnt++;
                if (target[j] === visit[i][j]) targetCnt++;
            }
            if (currCnt !== len - 1) continue;
            check(visit[i], [...visit.slice(0, i), ...visit.slice(i+1)], a + 1);
        }
    }
    
    if (!words.includes(target)) return 0;
    check(begin, [...words], 0);
    
    return answer;
}