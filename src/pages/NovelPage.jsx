import About from "../components/About";
import ChapterIndex from "../components/ChapterIndex";
import ContactLetter from "../components/ContactLetter";
import Hero from "../components/Hero";
import NextQrNotice from "../components/NextQrNotice";
import Reader from "../components/Reader";
import { useParams  } from "react-router";
import { getProgress, saveProgress } from "../utils/progreso";
import { validarCapitulo } from "../utils/validarCapitulo";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



export default function NovelPage() {
    const { numero } = useParams()
    const numeroPagina = validarCapitulo(numero);
    const numeroGuardado = getProgress()
    const unlockedUpTo = Math.max(numeroPagina, numeroGuardado)
    const [ currentChapter, setCurrentChapter ] = useState(numeroPagina)



    useEffect(() => {
        saveProgress(unlockedUpTo)
    }, [unlockedUpTo])

    function openChapter(n) {

        if (n < 1 ) {
            return
        }
        
        if (n > unlockedUpTo) {
            const section = document.getElementById('next-qr-notice');
            section.scrollIntoView({behavior: 'smooth', block: 'center'})
            Swal.fire({
                icon: "error",
                title: "No tienes desbloqueado este capitulo",
                text: "Por favor, encuentra los siguientes QR para desbloquearlo",
                background: "#F4EBDC",
                color: '#2B2420',
                iconColor: '#9C4A35',
                returnFocus: false,
                confirmButtonColor: '#9C4A35'
            })

            return
        }

        setCurrentChapter(n)
        const paginaCapitulo = document.getElementById('lector')
        paginaCapitulo.scrollIntoView({behavior: 'smooth', block: "start"})

    }

    return (
        <div className="flex flex-col"> 
            <Hero onOpenChapter={openChapter} currentChapter={currentChapter} />
            <ChapterIndex  unlockedUpTo={unlockedUpTo} onOpenChapter={openChapter}/>
            <Reader  currentChapter={currentChapter} onOpenChapter={openChapter}/>
            <NextQrNotice currentChapter={currentChapter} />
            <About />
            <ContactLetter />
        </div>
    )
}
