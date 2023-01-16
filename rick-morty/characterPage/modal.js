const modalChar = document.querySelector('#modal_char');
const modalEpisode = document.querySelector('#modal_episode');
const modalCharDisplay = modalChar.querySelector('.modal__char_container');
const modalEpisodeDisplay = modalEpisode.querySelector('.modal__episode_container');
const Modal = {

    showModalChar: async function() {
        const id = this.id;
        const data = await Modal.getCharacterById(id);
        modalChar.classList.add('modal__active');
        modalCharDisplay.querySelector(".modal__photo").src = data.image
        modalCharDisplay.querySelector('.modal__name').innerText = data.name;
        modalCharDisplay.querySelector('.modal__gender').innerText = data.gender;
        modalCharDisplay.querySelector('.modal__statusandlocation').innerText = `${data.status}, ${data.location.name}`
    },

    showModalEpisode: async function() {
        const data = await Modal.getEpisodeById(this.id);
        modalEpisode.classList.add('modal__active')
        modalEpisodeDisplay.querySelector(".modal__episode_airdate").innerText =`First air date - ${data.air_date}` 
        modalEpisodeDisplay.querySelector('.modal__episode_name').innerText = `Episode ${data.id}: ${data.name}`;
        modalEpisodeDisplay.querySelector('.modal__episode_created').innerText =`Created in ${data.created}` ;
        modalEpisodeDisplay.querySelector('.modal__episode_episode').innerText = data.episode;
    },

    getCharacterById: async function(id) {
        const pageResponse = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const pageData = await pageResponse.json();
        return pageData;
    },

    getEpisodeById: async function(id) {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
        const data = await response.json();
        return data;
    },

    getCharacterByUrl: async function(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    },
}

modalChar.addEventListener('click',(e) => {
    let withinBoundaries = e.composedPath().includes(modalCharDisplay);
    if (!withinBoundaries) {
        modalChar.classList.remove('modal__active');
    }
});

modalEpisode.addEventListener('click',(e) => {
    let withinBoundaries = e.composedPath().includes(modalEpisodeDisplay);
    if (!withinBoundaries) {
        modalEpisode.classList.remove('modal__active');
    }
});


export default Modal;