import method from "../functions.js";
import renderCard from "./createCard.js";
import { url,pageData, navigation, navigationButtons,charList } from "../constants.js";
import { setCurrent } from "../Search&Filters/setCurrentPage.js";

export default function createPage(data,next,prev,count) {
    method.clearPage(navigation, '.nav__pagebutton');
    console.log(data)
    createFullList(data);
    getNavigation(count);
    createNext(next);
    createPrev(prev);
}

function createFullList(data) {
    console.log(data)
    method.clearPage(charList,".character");
    data.map((elem) => renderCard(elem,charList));
}

async function getNavigation(count) {
    for (let i=1; i <= count; i++){
        let button = method.createNode('button');
        button.textContent = button.id = i;
        button.classList.add('nav__pagebutton');
        if(button.id == pageData.currentId) button.classList.add('current');
        button.addEventListener('click',setCurrent);
        method.append(navigationButtons,button);
    }
}

async function createNext(nextUrl) {
    method.clearPage(navigation,'.nav__button_next');
    let nextButton = method.createNode('button');
    nextButton.textContent = "Next";
    nextButton.classList.add('nav__button_next');
    nextUrl == null ? nextButton.disabled = true 
    : nextButton.id =  Number(url.searchParams.get('page'))+1;
    nextButton.addEventListener('click', setCurrent);
    navigation.appendChild(nextButton);
}


async function createPrev(prevUrl) {
    method.clearPage(navigation, '.nav__button_prev');
    let prevButton = method.createNode('button');
    prevButton.textContent = "Prev"
    prevButton.classList.add('nav__button_prev');
    prevUrl == null ? prevButton.disabled = true 
    : prevButton.id =  Number(url.searchParams.get('page'))-1;
    prevButton.addEventListener('click', setCurrent);
    navigation.insertBefore(prevButton,navigationButtons);
}