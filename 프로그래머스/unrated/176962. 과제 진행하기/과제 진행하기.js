function solution(plans) {
    var answer = [];
    let remArr = [];
    
    const toMin = time => +time.slice(0,2) * 60 + +time.slice(3,5);
    
    plans.sort((a, b) => a[1] > b[1] ? 1 : -1);
    
    for (let i = 0; i < plans.length; i++) {
        if (i === plans.length - 1) {
            answer.push(plans[i][0]);
            while (remArr.length) answer.push(remArr.pop()?.name);
            break;
        }
        let plan = plans[i], diff = toMin(plans[i + 1][1]) - toMin(plan[1]);
        if (+plan[2] <= diff) {
            answer.push(plan[0]);
            diff -= +plan[2];
            while (remArr.length && diff > 0) {
                let temp = remArr.pop();
                if (temp?.time - diff <= 0) {
                    answer.push(temp?.name);
                    diff -= temp?.time;
                }
                else {remArr.push({...temp, 'time': temp?.time - diff}); break;}
            }
        }
        else remArr.push({'name': plan[0], 'time': +plan[2] - diff});
    }
    
    return answer;
}