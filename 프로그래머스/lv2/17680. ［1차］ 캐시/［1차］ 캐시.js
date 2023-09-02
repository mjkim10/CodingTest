function solution(cacheSize, cities) {
    var answer = 0;
    let arr = [];
    
    if (!cacheSize) return cities.length * 5;
    
    for (let i = 0; i < cities.length; i++) {
        let idx = arr.indexOf(cities[i].toLowerCase());
        
        if (idx > -1) {
            arr = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
            answer++;
        } else answer += 5;
        
        arr.push(cities[i].toLowerCase());
        if (arr.length > cacheSize) arr.shift();
        
    }
    
    return answer;
}