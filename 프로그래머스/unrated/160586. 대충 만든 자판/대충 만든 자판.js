function solution(keymap, targets) {
    var answer = [];
    var keyObj = {};
    
    for (keyStr of keymap) {
        keyStr.split('').forEach((key, idx) => {
            if (!keyObj[key] || keyObj[key] > idx + 1) keyObj[key] = idx + 1;
        })
    }
    
    targets.forEach(targetStr => {
        let cnt = 0;
        
        for (let target of targetStr.split('')) {
            if (!keyObj[target]) {
                cnt = -1; break;
            }
            cnt += keyObj[target];
        }

        answer.push(cnt);
    })
    
    return answer;
}