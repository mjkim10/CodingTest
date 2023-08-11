function solution(id_list, report, k) {
    var answer = [];
    var userObj = {};
    var reportCntObj = {};
    
    for (id of id_list) {
        userObj[id] = [];
        reportCntObj[id] = 0;
    }
    
    report.forEach((value, idx) => {
        let arr = value.split(' ');
        if (!userObj[arr[0]].includes(arr[1])) {
            userObj[arr[0]].push(arr[1]);
            reportCntObj[arr[1]]++;
        }
    })
    
    answer = id_list.map((value, idx) => {
        let cnt = 0;
        userObj[value].forEach(name => {
            if (reportCntObj[name] >= k) cnt++;
        })
        return cnt;
    });
    
    return answer;
}