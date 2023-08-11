function solution(s) {
    var answer = [];
    let idxObj = {};
    
    answer = s.split('').map((v, idx) => {
        let num = idxObj[v] > -1 ? idx - idxObj[v] : -1;
        idxObj[v] = idx;
        return num;
    }) 
    
    return answer;
}