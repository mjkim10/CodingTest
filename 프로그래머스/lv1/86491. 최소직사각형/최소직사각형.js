function solution(sizes) {
    let maxW = 0, maxH = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        let w, h;
        w = sizes[i][sizes[i][0] > sizes[i][1] ? 0 : 1];
        h = sizes[i][sizes[i][0] > sizes[i][1] ? 1 : 0];
        if (maxW < w) maxW = w;
        if (maxH < h) maxH = h;
    }
    
    return maxW * maxH;
}