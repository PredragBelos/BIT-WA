import { randomBitUsersUrl } from "../data/data";
import { User } from "../entitys/users";

/* Function for creating random users array*/
export const createRandomUsers = () => {

    return fetch(randomBitUsersUrl)
    
    .then(request => {
        return request.json();
    })
    .then(users => {
        return users.results.map(user => {
            return new User(user.gender, user.name.first, user.email, user.dob.date, user.picture.large);
        })
    })
}

