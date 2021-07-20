/*Import section*/
import { cardSection, mainRow } from "../Page elements/pageElements.js";
import Caracter from "../Classes/classes.js";


/*Function for open and fill info page*/
export const openCaracterInfoPage = (e) => {
    let caracterID = e.target.id;

    mainRow.css("display", "none");
    
    if (e.target.className === "card-title" || e.target.className === "card-img-top") {

        const prom = new Promise((resolve, reject) => {
            const request = $.ajax({
                url: "https://rickandmortyapi.com/api/character",
                method: "GET",
            });

            request.done(result => {
                resolve(result);

            });

            request.fail(error => {
                reject(console.error);
            });
        });

        prom.then(result => {

            let caracterName = result.results[caracterID - 1].name;
            let caracterGender = result.results[caracterID - 1].gender;
            let caracterSpecies = result.results[caracterID - 1].species;
            let caracterStatus = result.results[caracterID - 1].status;
            let caracterLocation = result.results[caracterID - 1].location.name;
            let caracterImage = result.results[caracterID - 1].image;

            let caracter = new Caracter(caracterName, caracterGender, caracterSpecies, caracterLocation, caracterStatus, caracterImage);

            cardSection.empty();

            let innerHTML = `
            <div class="row headingRow">
                <h1>Character info</h1>
            </div>
            <div class="image col-12 col-sm-4 mb-4">
            <img src="${caracter.image}" alt="img...">
        </div>

        <div class="info col-12 col-sm-8">
            <p class="caracterPar">Name: <span>${caracter.name}</span></p>
            <p class="caracterPar">Gender: <span>${caracter.gender}</span></p>
            <p class="caracterPar">Species: <span>${caracter.species}</span></p>
            <p class="caracterPar">Location: <span>${caracter.location}</span></p>
            <p class="caracterPar">Status: <span>${caracter.status}</span></p>
        </div>`;

            cardSection.append(innerHTML);
        });

        prom.catch(error => {
            console.log(error);
        });
    }
};
