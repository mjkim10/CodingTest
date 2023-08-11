function solution(ingredient) {
    var answer = 0;
    let order = [1,2,3,1];

    for (let i = 0; i < ingredient.length - order.length + 1; i++) {
        if (ingredient[i] === 1 && ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
            ingredient.splice(i, 4);
            answer++;
            i = i > 3 ? i - 4 : -1;
        }
    }
     
    return answer;
}
