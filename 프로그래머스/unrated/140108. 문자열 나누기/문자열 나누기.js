function solution(s) {
    var answer = 0;
    let arr = s.split('');
    
    for (let i = 0, char = '', cnt = 0; i < arr.length; i++) {

        if (cnt === 0) {
            answer++;
            char = arr[i];
        }

        cnt += char === arr[i] ? 1 : -1;
        
    }
    
    return answer;
}