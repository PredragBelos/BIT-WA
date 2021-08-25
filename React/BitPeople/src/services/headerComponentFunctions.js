import { userCardIcon, userListIcon} from "../data/data";

/* Function for send state of userList*/
export const sendUserListState = (state, func) => {
    if(state === "block"){
        func("hide");  
    }
    else{
        func("block");   
    }
}

/*Function for send state of userCard*/
export const sendUserCardState = (state, func) => {
    if(state === "block"){
        func("hide");  
    }
    else{
        func("block");   
    }
}

/* Function for changing style of previewing icon*/
export const changeIcon = (state, func) => {
    if(state === userListIcon) {
        func(userCardIcon);
       }
       else{
        func(userListIcon); 
       }
} 

/* Function for detect click on refresh icon*/
export const refreshUsers = (state, func) => {
    if(state === true){
        func(false);
    }
    else{
        func(true); 
    }
}

/* Function for set about page visibiliti after click on about button*/
export const aboutButtonAction = (visibility, setVisibility) => {
    if(visibility === "hide"){
        setVisibility("visibility");
    }
}

/* Function for set about page visibiliti after click on LOGO*/
export const logoAction = (visibility, setVisibility) => {
    if(visibility !== "hide"){
        setVisibility("hide");
    }
}