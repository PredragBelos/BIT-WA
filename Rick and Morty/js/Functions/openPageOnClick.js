/*Import section*/
import {document, cardSection, navBtn} from "../Page elements/pageElements.js";



/*Function for create current page*/
export const openPage = e => {
    const promiseTwo = new Promise((resolve, reject) => {
        if (e.target.className === "page-link pageBtn") {
            resolve(`https://rickandmortyapi.com/api/character/?page=${e.target.innerHTML}`);
        }
    });

    promiseTwo.then(url => {
        /*Create request for API*/
        const req = $.ajax({
            url: url,
            method: "GET",
        });

        /*Create promise*/
        const promiseThree = new Promise((resolve, reject) => {
            req.done(object => {
                let caractersArr = [];
                let picturesArr = [];
                let caracterID = [];
                let result = [];
                $(object.results).each((index, element) => {
                    caractersArr.push(element.name);
                    picturesArr.push(element.image);
                    caracterID.push(element.id);
                });

                result.push(caractersArr);
                result.push(picturesArr);
                result.push(caracterID);

                resolve(result);    //Resolve statment in promise
            });

            req.fail(error => {
                reject(error);      //Reject statment in promise
            });
        });

        /*If promise acion  was positive realization*/
        promiseThree.then(result => {
            let stringHTML = "";
            for (let i = 0; i < 20; i++) {
                stringHTML +=
                    `<div class="card">
        <img id="${result[2][i]}" src="${result[1][i]}" class="card-img-top" alt="img...">
        <div class="card-body">
            <h5 id="${result[2][i]}"  class="card-title">${result[0][i]}</h5>
            <a href="#" class="btn btn-primary"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Like</a>
        </div>
    </div>`;
            };

            cardSection.empty();
            cardSection.append(stringHTML);
        });

        /*If promise acion  was negative realization*/
        promiseThree.catch(error => {
            console.log("Error is" + error + ".");
        });
    });
};
