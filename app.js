import { preguntasLVL1, preguntasLVL2, preguntasLVL3, preguntasLVL4, preguntasLVL5 } from "./model/Question.js";

const random = Math.floor((Math.random() * 5));

let pregunta = []
let respuestaSeleccionada
let nivel = parseInt(window.localStorage.getItem('lvl', 0))
switch (nivel) {
    case 0:
        pregunta = preguntasLVL1[random]
        break;
    case 1:
        pregunta = preguntasLVL2[random]
        break;
    case 2:
        pregunta = preguntasLVL3[random]
        break;
    case 3:
        pregunta = preguntasLVL4[random]
        break;
    case 4:
        pregunta = preguntasLVL5[random]
        break;
    default:
        break;
}
let score = window.localStorage.getItem('score')
if (window.localStorage.getItem('score') == null) {
    score = 0
}
/**
 * anadir lemento dom
 */

////////////////////////

const container = document.querySelector("#container");

container.innerHTML = `
<div class="container mt-5">
<h1>PUNTAJE: ${score}</h2>
</div>
<div class="d-flex justify-content-center">
<div class="card col-md-8 mt-5 bg-light">
<div class="container d-flex justify-content-center mt-5">
    <div border-radius="40px" class="card col-md-8 bg-warning">
        <h3 class="text-center text-black">${pregunta.question}</h5>
    </div>
    <div class="container">
        <h5 class="mt-2">Selecciona la respuesta correcta</h5>
        <div class="col-md-8 d-flex justify-content-around mt-4">
            <button class="btn btn-danger col-md-4 elemento">${pregunta.a}</button>
            <button class="btn btn-danger col-md-4 elemento">${pregunta.b}</button>
        </div>
        <div class="col-md-8 d-flex justify-content-around mt-5 mb-5">
            <button class="btn btn-danger col-md-4 elemento">${pregunta.c}</button>
            <button class="btn btn-danger col-md-4 elemento">${pregunta.d}</button>
        </div>
    </div>
    <div class="mt-5 mb-5">
        <button class="btn btn-success" id="next">Continuar</button>
    </div>
</div>
</div>
</div>
`;
/**
 * This function is used to get the required element of the page
 *
 * @version 1.0.0 14/07/2022
 * @author Andrés Camilo Díaz Merlano
 * @since 1.0.0
 */
const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
        if (e.target.closest(selector)) {
            e.preventDefault();
            handler(e);
        }
    });
};

on(document, "click", ".elemento", (e) => {
    respuestaSeleccionada = e.target.textContent;
    console.log(respuestaSeleccionada);
    console.log(pregunta.respuesta);

});
/**
 * Esta función sirve para validar la respuesta y si es verdadera cambiará el nivel del juego
 * @version 1.0.0 14/07/2022
 * @author Andrés Camilo Díaz Merlano
 * @since 1.0.0
 */


const changeLVL = () => {
    if (respuestaSeleccionada == pregunta.respuesta) {
        if ((nivel == 4) || nivel == '4') {
            window.alert("Felicidades, has completado el juego. PUNTUACIÓN FINAL: 50")
            window.localStorage.setItem('lvl', 0)
            window.localStorage.setItem('score', 0)
            location.reload();

        } else {
            const up = nivel + 1
            const scoreUP = up * 10
            location.reload();
            window.localStorage.setItem('lvl', up)
            window.localStorage.setItem('score', scoreUP)
        }
    } else {
        window.localStorage.setItem('lvl', 0)
        window.localStorage.removeItem('score')
        window.alert("Has perdido, volverás al nivel 1")
        location.reload()
    }

}
/**
 * Esta función sirve para pasar al siguiente nivel
 *
 * @version 1.0.0 14/07/2022
 * @author Andrés Camilo Díaz Merlano
 * @since 1.0.0
 */
const nextPage = document.querySelector('#next')
nextPage.addEventListener('click', changeLVL)
console.log("nivel: ", nivel)