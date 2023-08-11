function solution(wallpaper) {
    var answer = [];
    let [top, bottom, left, right] = [-1, 0, -1, 0];
    
    wallpaper.forEach((str, idx) => {
        if (!str.includes('#')) return;
        if (top < 0) top = idx;
        bottom = idx + 1;
        
        let strIdx = str.indexOf('#');
        let strLastIdx = str.lastIndexOf('#');
        if (left < 0) left = strIdx;
        if (left > strIdx) left = strIdx;
        if (right <= strLastIdx) right = strLastIdx + 1;
    })
    
    answer = [top, left, bottom, right]
    return answer;
}