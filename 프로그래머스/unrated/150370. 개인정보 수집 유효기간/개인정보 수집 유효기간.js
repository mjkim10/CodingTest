function solution(today, terms, privacies) {
    var answer = [];
    var termsObj = {};
    
    for (value of terms) {
        let arr = value.split(" ");
        termsObj[arr[0]] = Number(arr[1]);
    }
    
    let todayDate = new Date(today);
    
    for (i = 0; i < privacies.length; i++) {
        let valueArr = privacies[i].split(" ");
        
        let newDate = new Date(valueArr[0]);
        newDate.setMonth(newDate.getMonth() + termsObj[valueArr[1]]);
        newDate.setDate(newDate.getDate() - 1);
    
        if (todayDate > newDate) answer.push(i + 1);
    }
    
    return answer;
}