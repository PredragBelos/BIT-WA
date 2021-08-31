
/* Class that presents users objects*/
export class User {
    constructor(id, name, userName, email, phone, street, city, zipCode, lat, lng, companyName, slogan){

        try {
            /*Validation rules for controling property existence*/
            if(!id){
                throw new Error("User id must be defined!");
            }
            if(!name){
                throw new Error("User name must be defined!");
            }
            if(!userName){
                throw new Error("User userName must be defined!");
            }
            if(!email){
                throw new Error("User email must be defined!");
            }
            if(!phone){
                throw new Error("User phone must be defined!");
            }
            if(!street){
                throw new Error("User street must be defined!");
            }
            if(!city){
                throw new Error("User city must be defined!");
            }
            if(!zipCode){
                throw new Error("User city zipCode must be defined!");
            }
            if(!lat){
                throw new Error("City lat must be defined!");
            }
            if(!lng){
                throw new Error("City lng must be defined!");
            }
            if(!companyName){
                throw new Error("User companyName must be defined!");
            }
            if(!slogan){
                throw new Error("User company slogan must be defined!");
            }

            this.id = id;
            this.name = name;
            this.userName = userName;
            this.email = email;
            this.phone = phone;
            this.street = street;
            this.city = city;
            this.zipCode = zipCode;
            this.lat = lat;
            this.lng = lng;
            this.companyName = companyName;
            this.slogan = slogan; 

        } catch (error) {
            console.log(error.message);
        }
    }
}



















// {
//     "id": 1,
//      "name": "Leanne Graham",
//      "username": "Bret",
//      "email": "Sincere@april.biz",
//           "address": {
//                  "street": "Kulas Light",
//                  "suite": "Apt. 556",
//                  "city": "Gwenborough",
//                  "zipcode": "92998-3874",
//                  "geo": {
//                       "lat": "-37.3159",
//                       "lng": "81.1496"
//                          }
//                       },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//                 }
// },