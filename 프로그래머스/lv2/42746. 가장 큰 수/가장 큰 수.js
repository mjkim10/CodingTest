function solution(numbers) {
    let str = numbers.map(v => String(v))
        .sort((a,b) => a + b < b + a ? 1 : -1).join('');
    return +str[0] ? str : '0';
    
}