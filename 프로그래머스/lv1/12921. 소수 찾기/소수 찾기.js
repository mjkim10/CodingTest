function solution(n) {
    var answer = n - 1;
    let primes = [];
    
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        let flag = 0;
        for (let j = 0; j < primes.length; j++) {
            if (!(i % primes[j])) {flag=1; break;}
        }
        if (!flag) primes.push(i)
    }
    
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < primes.length; j++) {
            if (!(i % primes[j]) && i !== primes[j]) {answer--; break;}
        }
    }
    
    return answer;
}