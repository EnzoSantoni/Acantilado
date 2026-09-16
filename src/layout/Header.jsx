import { BookOpen } from "lucide-react";
import { navLinks } from "../data/navLinks";
import { useState } from "react";


export default function Header() {
    const [ active, setActive] = useState(false)

    const foco = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordo"
    const link = "relative text-[18px] font-semibold text-tinta after:absolute after:bottom-[-5px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-bordo after:transition-transform after:duration-250 after:ease-[ease] hover:after:scale-x-100 focus-visible:after:scale-x-100"
    const linkMobile = "relative text-[18px] font-semibold text-tinta after:absolute after:bottom-[1px] after:left-0 after:h-px after:w-full after:border-b after:border-bordo after:bg-bordo"

    return (
        <header className="sticky top-0 z-30 border-b border-tinta/35 flex justify-center bg-papel">
            <div className="flex w-full max-w-7xl items-center justify-between gap-6 p-5 md:px-10 relative bg-papel" >
                <a href="#inicio" className={`shrink-0 ${foco}`}>
                    <span className="block font-display text-[24px] font-semibold tracking-tight text-bordo">Acantilado</span>
                    <span className="mt-1 block text-[18px] font-bold uppercase tracking-[.18em] text-tinta">Una novela por QR</span>
                </a>
                <nav className="items-center gap-7 leading-4 font-semibold uppercase tracking-[.13em] hidden lg:flex" aria-label="Navegación principal"> 
                    {navLinks.map(l => {
                        return <a href={l.href} className={`${link} ${foco}`} key={l.label}>{l.label}</a>
                    })}
                </nav>
                <div className="flex gap-6 justify-center items-center"> 
                    <button type="button" aria-controls="mobile-menu" aria-expanded={active} className={` ${active ? 'bg-bordo text-papel' : 'bg-papel text-bordo'} lg:hidden inline-flex items-center justify-center rounded-md border border-bordo px-3 py-2 text-2xl leading-none hover:bg-bordo hover:text-papel transition duration-200`} onClick={() => setActive(prev => !prev)} aria-label={active ? 'Cerrar menu de navegacion' : 'Abrir menu de navegacion'} >
                    ☰
                    </button>
                    <a href="#capitulos" aria-label="Ir a capítulos" className="inline-flex rounded-full border border-bordo p-2 text-bordo transition hover:bg-bordo hover:text-papel">
                            <BookOpen className="size-4" />
                        </a>
                </div>
                <nav className={`${ active ? "translate-y-0 opacity-100 visible" : "-translate-y-header opacity-0 pointer-events-none"} flex flex-col px-5 pt-4 pb-4 gap-4 md:px-10 border-b border-bordo lg:hidden absolute top-full left-0 bg-papel w-full -z-1 justify-center items-center transition duration-200 uppercase tracking-[.13em]`} id="mobile-menu" aria-label="Menú móvil">
                    {navLinks.map(l => {
                        return <a href={l.href} className={`${linkMobile} ${foco}`} onClick={() => setActive(false)} key={l.label}>{l.label}</a>
                    })}
                </nav>
            </div>
        </header>
    )
}

