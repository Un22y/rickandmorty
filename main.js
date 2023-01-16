import {showEpisodeList} from "./Episodes/fetchEpisodeData.js";
import {setCurrent} from "./Search&Filters/setCurrentPage.js";
import displayNameMatches from "./Search&Filters/nameSearch.js";
import {statusFilter, genderFilter, charactersPageButton, locationButton, nameInput} from "./constants.js";
import addToSearch from "./Search&Filters/filters.js";
import showLocationPage from "./Locations/showLocationPage.js";

function app() {
    charactersPageButton.addEventListener('click', setCurrent);
    const episodePageButton = document.querySelector('.episode__button_start');
    episodePageButton.addEventListener('click', showEpisodeList);
    locationButton.addEventListener('click', showLocationPage)
    nameInput.addEventListener('change', displayNameMatches);
    nameInput.addEventListener('keyup', displayNameMatches);
    statusFilter.addEventListener('change', addToSearch);
    genderFilter.addEventListener('change', addToSearch);
}

app();