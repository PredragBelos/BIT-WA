
/* Function for create short email adrress*/
export const createShortEmail = array => {
    return `${array[0].slice(0, 3)}...${array[0].slice(array[0].length - 3, array[0].length)}@${array[1]}`;
}

/* Function for crete formated date object*/
export const createFormatedDate = date => {
    let result = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;
    return result;
}

/* Function for check user gender*/
export const checkGender = gender => {
    if (gender === "female") {
        return "redish"
    }
    else {
        return "";
    }
}




