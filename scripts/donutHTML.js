/*It represents what a donut should look like in html */
const donutHTML = (donut) => {
    return `
    <div class="donut">
    <h4>${donut.name}</h4>
    <p>Donut Type: ${donut.type}</p>
    <p>Donut Flavor: ${donut.flavor}</p>
    <p>Donut Glaze: ${donut.glaze}</p>
    <p>Donut Topping: ${donut.topping}</p>
    </div>
    `
}
export default donutHTML;
