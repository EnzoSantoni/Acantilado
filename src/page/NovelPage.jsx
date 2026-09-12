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



export default function NovelPage() {
    const { numero } = useParams()
    const numeroPagina = validarCapitulo(numero);
    const numeroGuardado = getProgress()
    const unlockedUpTo = Math.max(numeroPagina, numeroGuardado)
    const [ currentChapter, setCurrentChapter ] = useState(numeroPagina)



    useEffect(() => {
        saveProgress(unlockedUpTo)
    }, [unlockedUpTo])

    return (
        <div className="flex flex-col"> 
            <Hero />
            <ChapterIndex />
            <Reader  currentChapter={1}/>
            <NextQrNotice />
            <About />
            <ContactLetter />
        </div>
    )
}
