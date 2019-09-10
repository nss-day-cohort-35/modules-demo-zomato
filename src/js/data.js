let cuisines = [];

const API = {
    getCusines: () => {
        return fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=8a01deba21be38288fd5bc344316885f")
            .then(response => response.json())
            .then(parsedResult => {
                cuisines = parsedResult
                return parsedResult;
            })
    },
    getArray: () => {
        return cuisines;
    },
    getRestaurants: (cuisineId) => {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${cuisineId}&apikey=8a01deba21be38288fd5bc344316885f`)
            .then(response => response.json())
    }
}

export default API