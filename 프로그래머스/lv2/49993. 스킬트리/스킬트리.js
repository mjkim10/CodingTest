function solution(skill, skill_trees) {
    var answer = 0;
    
    for (let i = 0; i < skill_trees.length; i++) {
        let s = skill_trees[i].replace(new RegExp(`[^${skill}]`, 'g'), '');
        if (skill.indexOf(s) === 0) answer++;
    }
    
    return answer;
}