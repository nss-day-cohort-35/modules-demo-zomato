//api 8a01deba21be38288fd5bc344316885f


API = {
    getCusines: () => {
        return fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=8a01deba21be38288fd5bc344316885f")
        .then(response => response.json())
    },
    getRestaurants: (cuisineId) => {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${cuisineId}&apikey=8a01deba21be38288fd5bc344316885f`)
            .then(response => response.json())
    }
}



API.getCusines()
.then(allCusines => {
    console.log("All", allCusines)
    makeDropDown(allCusines);
})

const dropdown = document.querySelector("#dropDown");
dropdown.addEventListener("change", (event) => {
    console.log("whichID", dropdown.selectedIndex);
    let rest = API.getRestaurants(dropdown.selectedIndex)
    .then(results => {
        console.log(results)
    })
})

makeDropItem = (item) => {
    return `<option value="${item.cuisine.cuisine_id}">${item.cuisine.cuisine_name}</option>`
}

makeDropDown = (stuff) => {
    stuff.cuisines.forEach(item => {
        dropdown.innerHTML += makeDropItem(item);
    });
}