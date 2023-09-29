function solution(board) {
    var answer = 0;
    let arr = [[0,0],[0,-1],[0,1],[-1,0],[-1,-1],[-1,1],[1,0],[1,-1],[1,1]];
    
    const existMine = (i, j) => {
        for (let k = 0; k < arr.length; k++) {
            if (board[i + arr[k][0]] && board[i + arr[k][0]][j + arr[k][1]]) return 1;
        }
        return 0;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (!existMine(i,j)) answer++;
        }
    }
    
    return answer;
}