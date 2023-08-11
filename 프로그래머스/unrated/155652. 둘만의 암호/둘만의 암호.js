function solution(s, skip, index) {
    
    arr = 'abcdefghijklmnopqrstuvwxyz'.replace(new RegExp(`[${skip}]`, 'g'), '');
    
    return s.split('').map(v => arr[(arr.indexOf(v) + index) % arr.length]).join('');
    
}
