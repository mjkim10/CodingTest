function solution(participant, completion) {
    var answer = '';
    
    participant.sort();
    completion.sort() 
    
    return participant.find((v, idx) => v !== completion[idx]);
}