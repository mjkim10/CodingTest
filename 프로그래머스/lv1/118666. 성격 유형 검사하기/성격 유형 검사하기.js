function solution(survey, choices) {
    let types = ['RT', 'CF', 'JM', 'AN'];
    let surveyObj = {};
    
    types.forEach(v => {
        surveyObj[v[0]] = 0;
        surveyObj[v[1]] = 0;
    })
    
    const getType = (typeStr) => {
        let arr = typeStr.split('')
        return surveyObj[arr[0]] >= surveyObj[arr[1]] ? arr[0] : arr[1];
    }
    
    for (let i = 0; i < survey.length; i++) {
        let typeArr = survey[i].split('');
        if (choices[i] > 4) surveyObj[typeArr[1]] += choices[i] - 4;
        else if (choices[i] < 4) surveyObj[typeArr[0]] += 4 - choices[i];
    }
    
    return types.reduce((acc, v) => acc + getType(v), '');
}
