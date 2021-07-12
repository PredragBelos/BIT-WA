import {movies, genres} from "../Entities/movie.js";
import {programs} from "../Entities/program.js";
import Movie from "../Entities/movie.js";
import Program from "../Entities/program.js";


//VARIABLES
let genreList = document.querySelector("#genre");
let movieList = document.querySelector("#filmsList")
let createMovieButton = document.querySelector("#createMovieButton");
let movieTitle = document.querySelector("#title");
let movieLength = document.querySelector("#length");
let movieGenre = document.querySelector("#genre");
let createMovieForm = document.querySelector("#createMovieForm");
let programDate = document.querySelector("#date");
let createProgramButton = document.querySelector("#createProgramButton");
let programDropDownList = document.querySelector("#program");
let addMoviButton = document.querySelector("#addMovieButton");
let movieDropDownList = document.querySelector("#movie");


//FUNCTIONS
(function (genres) {

    for (let i = 0; i < genres.length; i++) {
        let genre = document.createElement("option");
        genre.textContent = genres[i];
        genreList.appendChild(genre);

    }

})(genres);


/*Function for create movie*/
function createMovie() {

    try {

        let movie = new Movie(movieTitle.value, movieGenre.value, parseInt(movieLength.value));

        if (!movieTitle.value) {
            throw new Error("Title of movie must be defined.")
        }

        if (movieGenre.value === "-" || movieGenre.value === " ") {
            throw new Error("Genre of movie must be defined.")
        }

        if (!parseInt(movieLength.value)) {
            throw new Error("Length of movie must be defined.")
        }

        movies.push(movie);
        let movieListElement = document.createElement("li");
        let movieDropDownElement = document.createElement("option");
        movieDropDownElement.setAttribute("class", "movieItem");
        movieDropDownElement.textContent = movieTitle.value;
        movieListElement.textContent = movie.getData();
        movieList.appendChild(movieListElement);
        movieDropDownList.appendChild(movieDropDownElement);

        /*Clear textBox after creating movie*/
        movieTitle.value = "";
        movieGenre.value = "";
        movieLength.value = "";

    } catch (error) {
        alert(error.message);
    }
}

/*Function for create date string*/
function createDateString() {
    try {
        let result = "";
        let date = programDate.value.split("-");
        let month = date[1];
        let day = date[2];
        let year = date[0];
        result += month + "/" + day + "/" + year;

        if (month === undefined || month === undefined || month === undefined) {
            throw new Error("Date of program must be selected!");
        }

        return result;
    }
    catch (error) {
        alert(error.message);
    }
}

/*Function for create program*/
function createProgram() {
    try {
        let program = new Program(createDateString());
        programs.push(program);

        /*Clear drop down list*/
        clearProgramList();
        clearProgramListUl();

        /*Insert programs to drop down list*/
        for (let i = 0; i < programs.length; i++) {
            let programItem = document.createElement("option");
            let programListItem = document.createElement("li");
            let programsUl = document.querySelector("#programsUl");
            programItem.setAttribute("class", "programItem");
            programItem.textContent = programs[i].getDate();
            programDropDownList.appendChild(programItem);
            programListItem.setAttribute("class", "programList");
            programListItem.textContent = programs[i].getReport();
            programsUl.appendChild(programListItem);

        }
    }
    catch (error) {
        console.log(error.message);
    }
}

/*Function for clear program list*/
function clearProgramList() {
    let programDropDownItems = document.querySelectorAll("#program .programItem");

    for (let i = 0; i < programDropDownItems.length; i++) {
        let programItem = document.querySelector(".programItem");
        let programDropDownList = programItem.parentElement;
        programDropDownList.removeChild(programItem);
    }
}

/*Function to clear program list Ul*/
function clearProgramListUl() {
    let programLiItems = document.querySelectorAll("#programsUl .programList");

    for (let i = 0; i < programLiItems.length; i++) {
        let programItem = document.querySelector(".programList");
        let programListItems = programItem.parentElement;
        programListItems.removeChild(programItem);
    }
}

/*Function for adding films to programs*/
function addFilmToProgram() {

    try {
        /*Select film object*/
        let movieListTitle = movieDropDownList.value;
        let film = movies.filter(function (item) {
            return item.title === movieListTitle;
        });

        if (film.length < 1) {
            throw new Error("Movie for program must be selected!");
        }
        let moviObject = film[0];

        /*Select program object*/
        let programListItem = programDropDownList.value;
        let program = programs.filter(function (item) {
            return item.getDate() === programListItem;
        });

        if (program.length < 1) {
            throw new Error("Program must be selected!");
        }

        let programObject = program[0];

        programObject.addMovie(moviObject);

        /*Unset value of drop down lists*/
        programDropDownList.value = "-";
        movieDropDownList.value = "-";

        /*Unset program list*/
        clearProgramListUl();

        for (let i = 0; i < programs.length; i++) {
            let programListItem = document.createElement("li");
            programListItem.setAttribute("class", "programList");
            programListItem.textContent = programs[i].getReport();
            programsUl.appendChild(programListItem);
        }

    }
    catch (error) {
        alert(error.message);
    }
}

/*Function to prevent defaoult forms actions*/
let forms1 = document.getElementById("createMovieForm");
let forms2 = document.getElementById("createProgramForm");

function preventDefaultAction(e) {
    e.preventDefault();
}




//EVENTS

createMovieButton.addEventListener("click", createMovie);
createProgramButton.addEventListener("click", createProgram);
addMoviButton.addEventListener("click", addFilmToProgram);
forms1.addEventListener("submit", preventDefaultAction);
forms2.addEventListener("submit", preventDefaultAction);










