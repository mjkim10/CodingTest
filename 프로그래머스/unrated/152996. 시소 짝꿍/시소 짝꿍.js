function solution(weights) {
    var answer = 0;
    let map = new Map();
    let scales = [2, 3/2, 4/3];
    
    for (let i = 0; i < weights.length; i++) {
        map.set(weights[i], (map.get(weights[i]) || 0) + 1);
    }
    
    for (const [weight, cnt] of map) {
        if (cnt > 1) answer += cnt * (cnt - 1) / 2;
        for (let i = 0; i < scales.length; i++) {
            if (map.has(weight * scales[i])) {
                answer += cnt * map.get(weight * scales[i]);
            }
        }
    }
    
    return answer;
}