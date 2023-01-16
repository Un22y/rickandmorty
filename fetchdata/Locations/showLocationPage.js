import Modal from "../characterPage/modal.js";
import { charWindow, episodeWindow, locationWindow,locationCharBox,locationList} from "../constants.js";
import method from "../functions.js";
import getLocationsData from "./getLocationData.js";

const templateCard = document.querySelector("#location__card").content;

export default async function showLocationPage(){
    let data = await getLocationsData();
    method.setActive([locationWindow],[episodeWindow,charWindow])
    data.map(elem => createLocation(elem));
}


function createLocation(data){
    let card = method.cloneNode(templateCard);
    card.querySelector('.location__title').textContent ='Name - ' + data.name;
    card.querySelector('.location__dimension').textContent ='Dimension - ' + data.dimension;
    let container = card.querySelector('.location__residents');
    if(data.residents.length) {
        card.querySelector('.location__subtitle').textContent = `Residents (${Number(data.residents.length)})`;
        data.residents.map((url) => createResident(url,container,card))
    } else {
        card.querySelector('.location__subtitle').textContent = 'No one lives here anymore ;('
        let preloader = card.querySelector('.preloader');
        preloader.classList.add('unactive');
    }
    method.append(locationList,card);
}

async function createResident(url,parent,card) {
    let preloader = card.querySelector('.preloader');
    let clone = method.cloneNode(locationCharBox);
    let box = clone.querySelector('.location__character_box');
    let image = box.querySelector('.img-small');
    const charData = await Modal.getCharacterByUrl(url);
    box.id = charData.id;
    image.src = charData.image;
    method.showLoader(image,preloader);
    image.alt = charData.name;
    box.addEventListener('click', Modal.showModalChar);
    method.append(parent,box);
}
