#!/usr/bin/env node

const { Command } = require("commander");
const chalk = require("chalk");

const program = new Command();

function generarPassword(longitud, opciones) {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%&";

    let caracteres = "";

    if (opciones.numbers) {
        caracteres = numeros;
    } else if (opciones.noSymbols) {
        caracteres = letras + numeros;
    } else {
        caracteres = letras + numeros + simbolos;
    }

    let password = "";
    for (let i = 0; i < longitud; i++) {
        const random = Math.floor(Math.random() * caracteres.length);
        password += caracteres[random];
    }

    return password;
}

program
    .argument("<longitud>", "Longitud de la contraseña")
    .option("--numbers", "Solo números")
    .option("--no-symbols", "Sin símbolos")
    .action((longitud, opciones) => {
        const pass = generarPassword(Number(longitud), opciones);
        console.log(chalk.green("Contraseña generada:"), pass);
    });

program.parse();
