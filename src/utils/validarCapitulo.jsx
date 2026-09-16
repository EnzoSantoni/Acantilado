import { chapters } from "../data/chapters"

export function validarCapitulo(text) {
    const numero = Number(text)

    const progreso = numero > 0 && numero <= chapters.length ? numero : 1

    return progreso
}