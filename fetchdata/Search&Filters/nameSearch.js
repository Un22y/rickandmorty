// import showPage from "../characterPage/showPage.js";
import { nameInput, url } from "../constants.js";
import { getPageByUrl } from "./setCurrentPage.js";

export default function displayNameMatches() {
    url.searchParams.delete('name');
    url.searchParams.delete('page');
    findName(this.value);
}


function findName(nameToFind) {
    url.searchParams.append('name',nameToFind);
    getPageByUrl(url);
}

const resetButton = document.querySelector('.reset');

function resetFilters() {
    nameInput.value = '';
    findName(nameInput.value);
}

resetButton.addEventListener('click', resetFilters);