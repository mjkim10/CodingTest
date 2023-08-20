function solution(n) {
    let str = '수박';
    return str.repeat(parseInt(n/2)) + (n % 2 ? '수' : '');
}