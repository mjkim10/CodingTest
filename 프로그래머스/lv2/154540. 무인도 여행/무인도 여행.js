function solution(maps) {
    var answer = [];
    
    let visitObj = {};
    let mapArr = maps.map((v, idx) => {
        visitObj[idx] = [];
        return v.split("");
    });
    let sum = 0;
    

    const searchMap = (i, j) => {
        if (checkArr(i, j)) {
            searchMap(i, j + 1);
            searchMap(i + 1, j);
            searchMap(i, j - 1);
            searchMap(i - 1, j);
        }

    }
    
    const checkArr = (i, j) => {
        if (i < 0 || j < 0) return false;
        if (i >= mapArr.length || j >= mapArr[i].length) return false;
        if (mapArr[i][j] !== 'X' && !visitObj[i].includes(j)) {
            sum += Number(mapArr[i][j]);
            visitObj[i].push(j);
            return true;
        } 
        return false;
    }
    
    for (let i = 0; i < mapArr.length; i++) {
        let row = mapArr[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 'X' || visitObj[i].includes(j)) continue;
            searchMap(i, j);
            
            answer.push(sum);
            sum = 0;
        }
    }
    
    return answer.length ? answer.sort((a,b) => a - b) : [-1];
}