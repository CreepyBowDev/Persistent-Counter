const display = document.querySelector(".display");
const agregar = document.querySelector(".incremento");
const quitar = document.querySelector(".decrecimiento");
const reset = document.querySelector(".reset");

document.addEventListener('DOMContentLoaded', () => {
    display.textContent = localStorage.getItem("save") || "0";
    verifEntero();
});

function actualizarContador(valor) {
    let currentValue = parseFloat(display.textContent) || 0;
    let newValue = currentValue + valor;
    display.textContent = newValue;
    verifEntero();
    localStorage.setItem("save", newValue);
}

agregar.addEventListener('click', () => actualizarContador(1));
quitar.addEventListener('click', () => actualizarContador(-1));

reset.addEventListener('click', () => {
    display.textContent = "0";
    display.style.color = "white";
    localStorage.removeItem("save");
});

function verifEntero() {
    let value = parseFloat(display.textContent) || 0;
    display.style.color = value > 0 ? "green" : "red";
}
