import API from './data.js';
import dropdownMenu from './dom.js'

const dropdown = document.querySelector("#dropDown");
dropdown.addEventListener("change", (event) => {
    console.log("whichID", dropdown.selectedIndex);
    let rest = API.getRestaurants(dropdown.selectedIndex)
        .then(results => {
            console.log(results)
        })
})


API.getCusines()
    .then(allCusines => {
        console.log("All", allCusines)
        dropdownMenu.makeDropDown(allCusines);
        console.log("api", API.getArray());
        console.log("give me the tacos", API.cuisines)
    })

