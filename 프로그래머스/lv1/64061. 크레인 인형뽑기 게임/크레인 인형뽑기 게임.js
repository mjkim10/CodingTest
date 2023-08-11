function solution(board, moves) {
    var answer = 0;
    let arr = [];
    let newBoard = board.map((row, rIdx) => 
                             row.reduce((newArr, col, cIdx) => 
                                        !board[cIdx][rIdx] 
                                        ? newArr 
                                        : [...newArr, board[cIdx][rIdx]], []))
    
    for (let i = 0; i < moves.length; i++) {
        let num = newBoard[moves[i] - 1].shift();
        if (num) arr.push(num);
        
        let len = arr.length;
        if (len > 1 && arr[len - 1] === arr[len - 2]) {
            arr.pop(); arr.pop();
            answer += 2;
        }
    }
    
    return answer;
}