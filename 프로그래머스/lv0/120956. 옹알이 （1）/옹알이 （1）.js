function solution(babbling) {
    var answer = 0;
    let word = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        let str = babbling[i].replace(/aya|ye|woo|ma/g, '')
        if (!str.length) answer++;
    }
    
    return answer;
}