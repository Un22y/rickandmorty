import { locationUrl,locationData } from "../constants.js";

export default async function getLocationsData() {
    const response = await fetch(locationUrl);
    const data = await response.json()
    if(locationData.length != 0) return locationData;
    for(let i=1; i<= data.info.pages; i++){
        locationUrl.searchParams.delete('page');
        locationUrl.searchParams.append('page',i);
        const response = await fetch(locationUrl);
        const data = await response.json()
        locationData.push(...data.results);
    }
    return locationData;
}