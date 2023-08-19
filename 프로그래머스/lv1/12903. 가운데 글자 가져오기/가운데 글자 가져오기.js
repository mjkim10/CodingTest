function solution(s) {
    let len = s.length;
    return s.slice(Math.ceil(len/2) - 1, Math.floor(len/2) + 1);
}