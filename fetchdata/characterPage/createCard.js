import method from "../functions.js";
import Modal from "./modal.js";
import { characterPreloder as preloader } from "../constants.js";
const templateCard = document.querySelector("#character_card").content;


export default function renderCard(data, parent) {
    let node = method.cloneNode(templateCard);
    let card = node.querySelector(".character");
    let image = card.querySelector('.character__photo');
    image.src = data.image;
    image.alt = data.name;
    image.onload = function() {
        preloader.classList.add('clear');
        preloader.classList.remove('active');
        preloader.classList.add('unactive');
    }
    card.querySelector('.character__name').textContent = data.name;
    card.id = data.id;
    card.addEventListener('click', Modal.showModalChar);
    method.append(parent,node);
}