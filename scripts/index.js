
/**
 * Autor: Diego Alonso Molina (Full Stack Developer)
 * GitHub: https://github.com/DiegusNueva/ejemplo-cajero.git
 */

document.addEventListener("DOMContentLoaded", () => {

    /*Declaramos dos variables: una con el saldo inicial y otra con el 
    saldo en cada actual en cada momento*/
    const saldoInicial = 1000;
    let saldoActual = saldoInicial;

    /*Enlazamos os elementos HTML al JS*/
    const mensajeElemento = document.getElementById("mensaje");
    const saldoElemento = document.getElementById("saldo");
    const importeElemento = document.getElementById("importe");
    const retirarBoton = document.getElementById("retirar");
    const depositarBoton = document.getElementById("depositar");

    /*Botón retirar dinero: addEventListener correspondiente*/
    retirarBoton.addEventListener("click", () => {
        const cantidad = parseFloat(importeElemento.value);
        if (isNaN(cantidad) || cantidad <= 0 || cantidad > saldoActual) {
            mensajeElemento.textContent = "Importe no válido";
        } else {
            saldoActual -= cantidad;
            actualizarSaldo();
            mensajeElemento.textContent = `Retirado: ${cantidad}€`;
        }
    });

    /*Botón depositar dinero: addEventListener correspondiente*/
    depositarBoton.addEventListener("click", () => {
        const cantidad = parseFloat(importeElemento.value);
        if (isNaN(cantidad) || cantidad <= 0) {
            mensajeElemento.textContent = "Importe no válido";
        } else {
            saldoActual += cantidad;
            actualizarSaldo();
            mensajeElemento.textContent = `Depositado: ${cantidad}€`;
        }
    });

    /*Método para actualizar el saldo*/
    const actualizarSaldo = () => {
        saldoElemento.textContent = `Saldo: ${saldoActual}€`;
    };
});
