function solution(cacheSize, cities) {
    var answer = 0;
    let arr = [];
    
    if (!cacheSize) return cities.length * 5;
    
    for (let i = 0; i < cities.length; i++) {
        let idx = arr.indexOf(cities[i].toLowerCase());
        
        if (idx > -1) {
            arr.splice(idx, 1);
            answer++;
        } else answer += 5;
        
        if (cacheSize === 1) 
            arr = [cities[i].toLowerCase()]
        else 
            arr = [...arr.slice((cacheSize - 1) * -1), cities[i].toLowerCase()];
    }
    
    return answer;
}