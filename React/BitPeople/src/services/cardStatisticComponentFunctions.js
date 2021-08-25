/* Function for check number of male users*/
export const numberOfMaleUsers = (arr) => {
    let result = arr.filter(item => {
        return item.gender === "male";
    })
    return result.length;
}

/* Function for check number of female users*/
export const numberOfFemaleUsers = (arr) => {
    let result = arr.filter(item => {
        return item.gender === "female";
    })
    return result.length;
}