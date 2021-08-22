import { randomBitUsersUrl } from "../data/data";

/* Function for creating random users array*/
export const createRandomUsers = () => {

    return fetch(randomBitUsersUrl)
    
    .then(request => {
        return request.json();
    })
    .then(users => {
        return users;
    })
}

