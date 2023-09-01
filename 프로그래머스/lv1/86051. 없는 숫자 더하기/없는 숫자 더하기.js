function solution(numbers) {
    return [...Array(10)].reduce((acc, v, i) => acc + (numbers.includes(i) ? 0 : i), 0)
}