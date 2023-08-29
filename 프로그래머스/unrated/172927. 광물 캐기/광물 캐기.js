function solution(picks, minerals) {
    var answer = 0;
    let arr = [];
    
    for (let i = 0, cnt = []; i < minerals.length; i++) {
        if (!(i % 5)) cnt = [0,0,0]; 
        switch (minerals[i]) {
            case 'diamond': cnt[0]++; break;
            case 'iron': cnt[1]++; break;
            case 'stone': cnt[2]++;
        }
        
        if (!((i + 1) % 5) || i === minerals.length - 1) 
            arr.push(cnt.join(''));
    }
    
    let total = picks.reduce((acc, v) => acc + v, 0);
    
    let p = 0;
    answer = arr.slice(0, total).sort((a,b) => b - a).reduce((acc, v) => {
        while (p < picks.length) {
            if (picks[p]) {picks[p]--; break;}
            p++;
        }
        
        for (let i = 0; i < v.length; i++) {
            let point = 1;
            if (i === 0 && p === 2) point = 25;
            else if (i === 0 && p === 1) point = 5;
            else if (i === 1 && p === 2) point = 5;
            
            acc += point * v[i];
        }
        
        return acc;
    }, 0);
    
    return answer;
}