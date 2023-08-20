function solution(n, words) {
    var answer = [0,0];
    let wordObj = {};
    let char = words[0][0];
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (char !== word[0] || wordObj[char]?.includes(word)) {
            answer = [i % n + 1, Math.ceil((i + 1) / n)];
            break;
        }
        wordObj[char] = [...wordObj[char]||[], word];
        char = word[word.length - 1];
    }

    return answer;
}