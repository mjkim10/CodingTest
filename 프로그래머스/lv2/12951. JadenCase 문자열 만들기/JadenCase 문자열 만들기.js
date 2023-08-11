function solution(s) {
    var answer = '';
    
//     let arr = s.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
//     }
//     return arr.join(' ');
    
    return s.split(' ').map(v => v.slice(0,1).toUpperCase() + v.slice(1).toLowerCase()).join(' ');
}