function solution(board) {
    var answer = 0;
    
    const existMine = (i, j) => {
        if (i > 0) {
            if (board[i - 1][j - 1]) return 1;
            if (board[i - 1][j]) return 1;
            if (board[i - 1][j + 1]) return 1;
        }
        if (i < board.length - 1) {
            if (board[i + 1][j + 1]) return 1;
            if (board[i + 1][j]) return 1;
            if (board[i + 1][j - 1]) return 1;
        }
        if (board[i][j - 1]) return 1;
        if (board[i][j]) return 1;
        if (board[i][j + 1]) return 1;
        return 0;
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (!existMine(i,j)) answer++;
        }
    }
    
    return answer;
}