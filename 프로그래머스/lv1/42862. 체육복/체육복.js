function solution(n, lost, reserve) {
    var answer = n - lost.length;
    
    lost.sort((a,b) => a - b);
    reserve.sort((a,b) => a - b);
    
    reserve = reserve.filter(v => {
        let lIdx = lost.indexOf(v);
        if (lIdx > -1) {
            lost.splice(lIdx, 1); answer++;
            return false;
        }
        return true;
    });    
    
    for (let i = 0, j = 0; i < lost.length && j < reserve.length; i++) {
        while(j < reserve.length) {
            if (lost[i] - 1 > reserve[j]) {j++; continue;}
            else if (Math.abs(lost[i] - reserve[j]) < 2) {
                answer++; j++; break;
            } else break;
        }
    }
    
    return answer;
}