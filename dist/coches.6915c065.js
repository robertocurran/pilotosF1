document.addEventListener("DOMContentLoaded", function() {
    shiftLogo();
}, false);
function shiftLogo() {
    const elemento = document.getElementById("logo");
    const rand = Math.floor(Math.random() * 360);
    const filterStr = `hue-rotate(${String(rand)}deg)`;
    elemento.style.filter = filterStr;
}

//# sourceMappingURL=coches.6915c065.js.map
