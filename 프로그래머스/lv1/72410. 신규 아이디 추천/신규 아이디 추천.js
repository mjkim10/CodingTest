function solution(new_id) {
    var answer = '';

    answer = new_id
    .toLowerCase()
    .replace(/[^A-Za-z0-9\w-._]/g, '')
    .replace(/[.]+/g, '.')
    .replace(/^\.|\.$/g, '');

    answer = (answer || 'a')
    .slice(0,15).replace(/^\.|\.$/g, '');

    while(answer.length <= 2) {
        answer += answer[answer.length - 1];
    }
    
    return answer;
}