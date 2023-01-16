import method from "../functions.js";
import Modal from "./modal.js";

const templateCard = document.querySelector("#card").content;


export default function renderCard(data, parent) {
    let node = method.cloneNode(templateCard);
    let card = node.querySelector(".character");
    card.querySelector('.character__photo').src = data.image;
    card.querySelector('.character__name').textContent = data.name;
    card.id = data.id;
    card.addEventListener('click', Modal.showModalChar);
    method.append(parent,node);
}