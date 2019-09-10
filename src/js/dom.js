import API from './data.js'

const dropdown = document.querySelector("#dropDown");
dropdown.addEventListener("change", (event) => {
    // console.log("whichID", dropdown.selectedIndex);
    let rest = API.getRestaurants(dropdown.selectedIndex)
        .then(results => {
            console.log(results)
        })
})

let makeDropItem = (item) => {
    return `<option value="${item.cuisine.cuisine_id}">${item.cuisine.cuisine_name}</option>`
}

const dropdownMenu = {
    makeDropDown: (stuff) => {
        stuff.cuisines.forEach(item => {
            dropdown.innerHTML += makeDropItem(item);
        });
    }
}

export default dropdownMenu;