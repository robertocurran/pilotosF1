document.addEventListener("DOMContentLoaded", function() {
    paintCars();
}, false);
function getLivery(team) {
    switch(team.toString()){
        case "alpine":
            return `hue-rotate(${String(233)}deg) brightness(1.5)`;
        case "mercedes":
            return `grayscale(100%) brightness(1.5)`;
        case "redbull":
            return `hue-rotate(${String(240)}deg)  brightness(0.3)`;
        case "ferrari":
            return "saturate(80%);";
        case "mclaren":
            return `hue-rotate(${String(20)}deg)`;
    }
}
function paintCars() {
    const elements = document.getElementsByClassName("cars");
    for(i in elements){
        const element = elements.item(i);
        if (element instanceof HTMLImageElement) element.style.filter = getLivery(element.attributes.alt.value);
    }
}

//# sourceMappingURL=coches.42f3cca4.js.map
