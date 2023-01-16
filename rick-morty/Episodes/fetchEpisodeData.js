import method from "../functions.js";
import { episodeLink as url,episodeWindow,episodesList,charWindow,episodeInfo, locationWindow, episodeData } from "../constants.js";
import createEpisodeButton from "./ShowEpisodesPage.js"
import Modal from "../characterPage/modal.js";

export async function showEpisodeList() {    
    method.setActive([episodeWindow,episodesList],[charWindow,episodeInfo,locationWindow]);
    if(episodesList.children.length !== 0) return
    const allEpisodes = await getAllEpisodes();
    allEpisodes.map(elem => createEpisodeButton(elem));
    return allEpisodes;
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