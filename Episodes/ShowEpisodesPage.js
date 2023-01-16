import renderCard from "../characterPage/createCard.js";
import method from "../functions.js";
import Modal from "../characterPage/modal.js";
import {episodeChars,episodeData,episodeHeader,episodeInfo,episodesList, episodeWindow} from "../constants.js"

export default function createEpisodeButton(data) {
    let button = method.createNode('button');
    let preloader = episodeWindow.querySelector('.preloader');
    button.classList.add('episode');
    button.textContent = `${data.id}. ${data.name}`;
    button.id = data.id;
    button.addEventListener('click', showEpisode);
    method.showLoader(button,preloader);
    method.append(episodesList, button);
    episodesList.classList.remove('loaded_hiding')
    episodesList.classList.add('loaded');
}

async function showEpisode() {
    const data = await Modal.getEpisodeById(this.id);
    const title = episodeHeader.querySelector('.episode__title');
    title.textContent = `${data.id}. ${data.name}`;
    title.addEventListener('click', Modal.showModalEpisode)
    title.id = this.id;
    const nextButton = episodeHeader.querySelector('.episode__button_next');
    const prevButton = episodeHeader.querySelector('.episode__button_prev');
    if(data.id == episodeData.totalPages) nextButton.disabled = true
    else {
        nextButton.disabled = false
        nextButton.id = data.id + 1;
        nextButton.addEventListener('click',showEpisode)
    }
    if(data.id == 1 ) prevButton.disabled = true
    else {
        prevButton.disabled = false
        prevButton.id = data.id - 1;
        prevButton.addEventListener('click',showEpisode)
    }
    let dataArray = [...data.characters];
    displayList(dataArray);
}

async function displayList(dataArray){
    method.deleteSection(episodeChars);
    dataArray.forEach(async (url) => {
        let data = await Modal.getCharacterByUrl(url);
        renderCard(data,episodeChars);
    });
    method.setActive([episodeInfo],[episodesList]);
}