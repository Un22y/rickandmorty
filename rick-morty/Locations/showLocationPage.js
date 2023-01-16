import Modal from "../characterPage/modal.js";
import { charWindow, episodeWindow, locationList, locationWindow } from "../constants.js";
import method from "../functions.js";
import getLocationsData from "./getLocationData.js";

const templateCard = document.querySelector("#location__card").content;

export default async function showLocationPage(){
    let data = await getLocationsData();
    method.setActive([locationWindow],[episodeWindow,charWindow])
    data.map(elem => createLocation(elem))
}

function createLocation(data){
    let card = method.cloneNode(templateCard);
    card.querySelector('.location__title').textContent ='Name - ' + data.name;
    card.querySelector('.location__dimension').textContent ='Dimension - ' + data.dimension;
    let box = card.querySelector('.location__residents');
    data.residents.map(async(url) => {
        const charData = await Modal.getCharacterByUrl(url);
        let img = method.createNode('img');
        img.classList.add('img-small');
        img.src = charData.image;
        img.id = charData.id;
        img.addEventListener('click',Modal.showModalChar);
        method.append(box,img);
    });

    method.append(locationList,card)
}