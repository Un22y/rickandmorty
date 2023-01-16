import createPage from "../characterPage/showPage.js";
import { url,pageData,episodeWindow,charWindow, locationWindow, charList, errorTitle} from "../constants.js"
import method from "../functions.js";


export function setCurrent(){
    method.setActive([charWindow],[locationWindow,episodeWindow]);
    url.searchParams.delete('page');
    url.searchParams.append('page', this.id);
    pageData.currentId = this.id;
    pageData.currentUrl = url.href;
    getPageByUrl(url.href);
}

export async function getPageByUrl(pageUrl) {
        try {
            errorTitle.classList.add('clear');
            const response = await fetch(pageUrl);
            const data = await response.json();
            pageData.totalPages = data.info.pages;
            pageData.data = [...data.results];
            pageData.nextUrl = data.info.next;
            pageData.prevUrl = data.info.prev;
            createPage(pageData.data,pageData.nextUrl,pageData.prevUrl,pageData.totalPages);
        } catch(e) {
            method.clearPage(charList,'.character')
            showError();
        }
        
}

function showError() {
    errorTitle.classList.add('active');
    errorTitle.classList.remove('clear');
}