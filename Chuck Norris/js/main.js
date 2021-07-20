/*Variables*/
import {jokeDetail, jokeBtn} from "./Page elements/pageElements.js";

/*Function*/
import {previewJoke} from "./Functions/previewJoke.js";


/*Events*/
jokeBtn.on("click", previewJoke);