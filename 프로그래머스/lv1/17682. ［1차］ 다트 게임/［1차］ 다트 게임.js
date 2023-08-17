function solution(dartResult) {
    var answer = 0;
    let scoreArr = [];
    
    for (let i = 0; i < dartResult.length; i++) {
        let s = dartResult[i];
        if (!isNaN(s) && !isNaN(dartResult[i + 1])) {
            scoreArr.push(Number(s + dartResult[i + 1])); i++; continue;
        } else if (!isNaN(s)) {scoreArr.push(Number(s)); continue;}
    	
        let idx = scoreArr.length - 1;
        switch(s) {
            //case 'S': break;
            case 'D': scoreArr[idx] **= 2; break;
            case 'T': scoreArr[idx] **= 3; break;
            case '*': {
                if (idx) scoreArr[idx - 1] *= 2;
                scoreArr[idx] *= 2; break;
            }
            case '#': scoreArr[idx] *= -1;
        }
    }
	
    
    return scoreArr.reduce((acc, v) => acc + v, 0);
}