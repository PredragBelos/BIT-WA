/* Function for change visibility of loading animation*/
export const loadingAnimationVisibility = (arr) => {

    if (arr.length !== 0) {
        return "hide";
    }
    else {
        return "visibility";
    }
}

/* Function for change visibility of search bar*/
export const searchBarVisibility = (arr) => {

    if (arr.length !== 0) {
        return "visibility";
    }
    else {
        return "hide";
    }
}

/* Function for change visibility of userNotFound page*/
export const userNotFounfVisibility = (loadingAnimationVisibility, refreshUserArr, userDataArr) => {
    if(loadingAnimationVisibility(userDataArr) === "hide" && refreshUserArr.length === 0){
        return "visibility";
    }
    else{
        return "hide";
    }
}

/* Function for change visibility of user statistic*/
export const userStatisticVisibility = (arr) => {

    if (arr.length !== 0) {
        return "visibility";
    }
    else {
        return "hide";
    }
}
