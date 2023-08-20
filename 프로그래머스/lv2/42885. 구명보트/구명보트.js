function solution(people, limit) {
    var answer = 0;
    people.sort((a,b) => a - b);
    
    while (people.length) {
        if (people[0] + people.pop() <= limit) people.shift();
        answer++;
    }
    
    return answer;
}