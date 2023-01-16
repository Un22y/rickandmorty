import createPage from "../characterPage/showPage.js";
import { url,pageData,episodeWindow,charWindow} from "../constants.js"


export function setCurrent(){
    episodeWindow.classList.add('unactive');
    charWindow.classList.remove('unactive');
    url.searchParams.delete('page');
    url.searchParams.append('page', this.id);
    pageData.currentId = this.id;
    pageData.currentUrl = url.href;
    getPageByUrl(url.href);
}

export async function getPageByUrl(pageUrl) {
    const response = await fetch(pageUrl);
    const data = await response.json();
    pageData.totalPages = data.info.pages;
    pageData.data = [...data.results];
    console.log(pageData.data)
    pageData.nextUrl = data.info.next;
    pageData.prevUrl = data.info.prev;
    createPage(pageData.data,pageData.nextUrl,pageData.prevUrl,pageData.totalPages);
}