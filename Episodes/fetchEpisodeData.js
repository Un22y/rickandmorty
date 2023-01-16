import method from "../functions.js";
import { episodeLink as url,episodeWindow,episodesList,charWindow,episodeInfo, locationWindow, episodeData } from "../constants.js";
import createEpisodeButton from "./ShowEpisodesPage.js"
import Modal from "../characterPage/modal.js";

export async function showEpisodeList() {
    let loading = episodeWindow.querySelector('.preloader');
    method.setActive([episodeWindow],[charWindow,episodeInfo,locationWindow]);
    if(episodesList.children.length !== 0) {
        method.setActive([episodesList],[loading]);
        return
    }
    const allEpisodes = await getAllEpisodes();
    allEpisodes.map(elem => createEpisodeButton(elem));
    method.setActive([episodesList],[loading])
}

async function getAllEpisodes() {
    const response = await fetch(url);
    const data = await response.json();
    let dataArray = [];
    episodeData.totalPages = data.info.count;
    for(let i=1; i<=data.info.count; i++) {
        const data = await Modal.getEpisodeById(i);
        dataArray.push(data);
    }
    return dataArray;
}