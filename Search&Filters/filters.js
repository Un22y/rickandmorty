import {url,pageData, nameInput} from "../constants.js";
import displayNameMatches from "./nameSearch.js";
import { getPageByUrl } from "./setCurrentPage.js";

export default function addToSearch() {
    if (this.value === 'none') {
        url.searchParams.delete(this.name);
        changeParams();
        return
    } else {
        url.searchParams.delete(this.name);
        url.searchParams.append(this.name,this.value);
        changeParams();
    }
    
}

function changeParams(){
    url.searchParams.delete('page');
    pageData.currentId = 1;
    getPageByUrl(url);
}