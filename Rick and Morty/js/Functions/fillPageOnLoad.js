/*Import section*/
import {document, cardSection, navBtn, mainRow} from "../Page elements/pageElements.js";


/* function for fill page 1*/
export const loadPage = () => {

    /*Create request for API*/
    const req = $.ajax({
        url: "https://rickandmortyapi.com/api/character",
        method: "GET",
    });

    /*Create promise*/
    const promiseOne = new Promise((resolve, reject) => {
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
    promiseOne.then(result => {
        mainRow.css("display", "block");
        let stringHTML = "";
        for (let i = 0; i < 20; i++) {
            stringHTML +=
                `<div class="card">
            <img id="${result[2][i]}" src="${result[1][i]}" class="card-img-top" alt="img...">
            <div class="card-body">
                <h5 id="${result[2][i]}" class="card-title">${result[0][i]}</h5>
                <a href="#" class="btn btn-primary"><i class="fa fa-thumbs-up" aria-hidden="true"></i>Like</a>
            </div>
        </div>`;
        };

        cardSection.empty();
        cardSection.append(stringHTML);
    });

    /*If promise acion  was negative realization*/
    promiseOne.catch(error => {
        console.log("Error is" + error + ".");
    });
}
