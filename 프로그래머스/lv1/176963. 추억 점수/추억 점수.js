function solution(name, yearning, photo) {
    var answer = [];
    var scoreObj = {};
    name.forEach((n, idx) => {
        scoreObj[n] = yearning[idx];
    })
    
    answer = photo.map((pArr, idx) => {
        return pArr.reduce((sum, _name) => {
            return (scoreObj[_name] || 0) + sum
        }, 0);
    })
    
    
    return answer;
}