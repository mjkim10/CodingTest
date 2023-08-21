function solution(sequence, k) {
    var answer = [];
    
    sequence.sort((a,b) => a - b);
    
    for (let i = 0, j = 0, sum = 0; i < sequence.length; i++) {
        while (sum < k && j < sequence.length) sum += sequence[j++];
        if (sum === k && (!answer.length || answer[1] - answer[0] > j - 1 - i)) {
            answer = [i, (j - 1)||0];
        }
        sum -= sequence[i];
        
    }
    
    return answer;
}