import { validarCapitulo } from "./validarCapitulo"

const lsProgreso = "acantilado:progreso"

export function getProgress() {
    
    try {
        const dato = localStorage.getItem(lsProgreso)

        return validarCapitulo(dato)
    } catch (error) {
        console.log(error)
        return 1
    }
    
}

export function saveProgress(number) {
    
    try {
        localStorage.setItem(lsProgreso, number)
    } catch (error) {
        console.log(error)
    }
}
