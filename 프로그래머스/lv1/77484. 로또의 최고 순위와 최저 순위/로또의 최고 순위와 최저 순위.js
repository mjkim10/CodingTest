function solution(lottos, win_nums) {
    var answer = [];
    let corCnt = 0;
    let missCnt = 0;
    let rank = [6,6,5,4,3,2,1];
    
    lottos.sort((a,b) => a-b);
    win_nums.sort((a,b) => a-b);
    
    for (let i = 0, j = 0; i < lottos.length; i++) {
        if (!lottos[i]) {missCnt++; continue;}
        while (j < win_nums.length && win_nums[j] < lottos[i]) j++;
        if (lottos[i] === win_nums[j]) corCnt++;
    }
    
    return [rank[corCnt + missCnt], rank[corCnt]];
}