/*Import section*/
import{jokeDetail} from "../Page elements/pageElements.js";


//FUNCTION

/*Function for preview joke and create paragraph in jokeDetail div*/
export const previewJoke = () => {
    let url = "https://api.chucknorris.io/jokes/random";

    fetch(url)
    .then(request => {
        return request.json();
    })
    .then(object => {
        jokeDetail.empty();

        let jokeDetailHTML = `<p class="text-center m-0">${object.value}</p>`;

        jokeDetail.append(jokeDetailHTML);
    });
};