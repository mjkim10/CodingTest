function solution(numbers) {
    var answer = [...Array(numbers.length)].map(_ => -1);
    let stack = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        while (stack.length && numbers[i] >= stack.at(-1)) stack.pop();
        if (stack.length) answer[i] = stack.at(-1);
        stack.push(numbers[i]);
    }
    
    
    return answer;
}