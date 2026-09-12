export function validarCapitulo(text) {
    const numero = Number(text)

    const progreso = numero > 0 && numero <= 6 ? numero : 1

    return progreso
}