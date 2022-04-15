import { format, formatDistance, compareAsc } from "date-fns";
import { es } from "date-fns/locale";

document.addEventListener(
    "DOMContentLoaded",
    function () {
        // Espera forzada para disfrutar de la animación
        setTimeout(loadCircuits, 1000);
    },
    false
);

//export
export function loadCircuits() {
    fetch("https://ergast.com/api/f1/current.json")
        .then((response) => response.json())
        .then((data) => printCircuits(data["MRData"]["RaceTable"]["Races"]));
}

//export
export function printCircuits(table) {
    document.getElementById("cargando-circuito").style.display = "none";
    const carreras = document.getElementById("carreras");
    carreras.style.display = "grid";

    const headNumCarrera = document.createElement("div");
    headNumCarrera.classList.add("header-carreras");
    headNumCarrera.innerHTML = "Ronda";

    const headNombre = document.createElement("div");
    headNombre.classList.add("header-carreras");
    headNombre.innerHTML = "Circuito";

    const headFecha = document.createElement("div");
    headFecha.classList.add("header-carreras");
    headFecha.innerHTML = "Comienzo";

    const headFaltan = document.createElement("div");
    headFaltan.classList.add("header-carreras");
    headFaltan.innerHTML = "Faltan";

    carreras.appendChild(headNumCarrera);
    carreras.appendChild(headNombre);
    carreras.appendChild(headFecha);
    carreras.appendChild(headFaltan);

    for (let i in table) {
        const race = table[i];
        console.log(race);

        const numCarrera = document.createElement("div");
        numCarrera.classList.add("num-carrera");
        numCarrera.innerHTML = race.round;
        carreras.appendChild(numCarrera);
        const nombre = document.createElement("div");
        nombre.classList.add("nombre-carrera");
        nombre.innerHTML = race.raceName;
        carreras.appendChild(nombre);
        const fechaElement = document.createElement("div");
        const fechaArr = race.date.split("-");
        const fecha = new Date(
            parseInt(fechaArr[0]),
            //Meses empiezan de 0
            parseInt(fechaArr[1] - 1),
            parseInt(fechaArr[2])
        );
        fechaElement.innerHTML = format(fecha, "d LLLL yyyy", { locale: es });
        carreras.appendChild(fechaElement);
        let faltaRes = "";
        const compDate = compareAsc(new Date(), fecha);
        if (compDate === 1) {
            faltaRes = "Finalizada";
        } else if (compDate === 0) {
            faltaRes = "¡Es hoy!";
        } else {
            faltaRes = `${formatDistance(fecha, new Date(), {
                locale: es,
            })}`;
        }

        const falta = document.createElement("div");
        falta.innerHTML = faltaRes;
        carreras.appendChild(falta);
    }
}
