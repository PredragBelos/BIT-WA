//VARIABLES
import { document, cardSection, navBtn, logo } from "../js/Page elements/pageElements.js";

//CLASSES
import Caracter from "./Classes/classes.js";

//FUNCTIONS
import { loadPage } from "../js/Functions/fillPageOnLoad.js";
import { openPage } from "../js/Functions/openPageOnClick.js";
import {openCaracterInfoPage} from "../js/Functions/openInfoPage.js";










//EVENTS
document.on("load", loadPage);
navBtn.on("click", openPage);
cardSection.on("click", openCaracterInfoPage)
logo.on("click", loadPage);