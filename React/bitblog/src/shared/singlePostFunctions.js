/* Function for filtering elements text content*/
export const selectResult = (item) => {
    let result = "";

    if(item === undefined){
        result = "";
    }
    else{
        result = item;
    }
    return result;
}


/*Function for set author name*/
export const setAuthorName = (userArr, postObject) => {
    for(let i = 0; i < userArr.length; i++){
        if(userArr[i].id === postObject.userId){
            postObject.setAuthorName(userArr[i].name);
        }
    }
}