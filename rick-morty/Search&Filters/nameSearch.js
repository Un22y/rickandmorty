// import showPage from "../characterPage/showPage.js";
import { url } from "../constants.js";
import { getPageByUrl } from "./setCurrentPage.js";

export default function displayNameMatches() {
    url.searchParams.delete('name');
    url.searchParams.delete('page');
    findName(this.value);
}


function findName(nameToFind) {
    url.searchParams.append('name',nameToFind);
    console.log(url.href);
    getPageByUrl(url);
}