import { User } from "../entities/users";
import { userURL } from "../shared/data";


export const usersList = () => {
    return fetch(
        userURL,
    )
        .then(request => {
            return request.json();
        })
        .then(users => {
            return users.map(item => {
               return new User(item.name, item.username, item.email, item.phone, item.address.street, item.address.city, item.address.zipcode, item.address.geo.lat, item.address.geo.lng, item.company.name, item.company.bs); 
            })
        })
}