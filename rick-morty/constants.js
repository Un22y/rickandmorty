export const pageData =  {
    main: "https://rickandmortyapi.com/api/",
    currentUrl: "",
    currentId: 1,
    data: [],
    nextUrl: '',
    prevUrl: '',
    totalPages: '',
};
export const episodeData = {
    totalPages: ''
}
export const url = new URL('https://rickandmortyapi.com/api/character/');

export const statusFilter = document.querySelector('#status');
export const genderFilter = document.querySelector('#gender');
export const pageList = document.querySelector(".pagelist");
export const main = document.querySelector('#main');

export const episodeLink = new URL("https://rickandmortyapi.com/api/episode/");
export const episodesList = document.querySelector('#episodes__list');
export const episodeChars = document.querySelector("#episode__chars");
export const episodeWindow = document.querySelector("#episode__window");
export const episodeHeader = episodeWindow.querySelector("#episode__header")
export const episodeInfo = episodeWindow.querySelector("#episode__info")


export const charactersPageButton = document.querySelector(".main__page_start");
export const charWindow = document.querySelector('#characters__window');
export const charList = document.querySelector("#character_list");

export const navigation = document.querySelector("#navigation");
export const navigationButtons = document.querySelector(".navigation__buttons_container");

export const locationUrl = new URL("https://rickandmortyapi.com/api/location/");
export const locationButton = document.querySelector('#location_button');
export const locationList = document.querySelector("#location__list");
export const locationWindow = document.querySelector('#location__window');
export const locationData = [];