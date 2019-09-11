import API from "./DataManager.js"

const dropdown = {
    makeTypesDropDown: () => {
        API.getTypes().then(allTypes => {
            const typeDropdown = document.querySelector("#typeDropdown")
            allTypes.forEach(type => {
                typeDropdown.innerHTML += `<option id="type-${type.id}">${type.name}</option>`
            })
        })
    },
    makeFlavorsDropDown: () => {
        API.getFlavors().then(allFlavors => {
            const flavorDropdown = document.querySelector("#flavorDropdown")
            allFlavors.forEach(flavor => {
                flavorDropdown.innerHTML += `<option id="flavor-${flavor.id}">${flavor.name}</option>`
            })
        })
    },
    makeGlazesDropDown: () => {
        API.getGlazes().then(allGlazes => {
            const glazeDropdown = document.querySelector("#glazeDropdown")
            allGlazes.forEach(glaze => {
                glazeDropdown.innerHTML += `<option id="glaze-${glaze.id}">${glaze.name}</option>`
            })
        })
    },
    makeToppingsDropDown: () => {
        API.getToppings().then(allToppings => {
            const toppingDropdown = document.querySelector("#toppingDropdown")
            allToppings.forEach(topping => {
                toppingDropdown.innerHTML += `<option id="topping-${topping.id}">${topping.name}</option>`
            })
        })
    }
}

export default dropdown