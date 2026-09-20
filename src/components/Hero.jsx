import { ArrowDownRight } from "lucide-react"
import { chapters } from "../data/chapters"


export default function Hero({ onOpenChapter, currentChapter }) {
    const foco = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordo'
    const chapter = chapters.find(ch => ch.numero === currentChapter)

    return (
        <section id="inicio" className="overflow-hidden bg-papel font-display">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch px-5 md:px-10 lg:grid-cols-2"> 
                <div className="flex min-h-130 animate-reveal flex-col justify-center py-16 md:pr-16">
                    <p className="mb-6 text-[18px] leading-4 font-bold uppercase tracking-[.2em] text-bordo">Novela contemporánea · Lectura en curso</p>
                    <h1 className="max-w-2xl text-[54px] leading-[.98] font-semibold text-bordo">Acantilado</h1>
                    <p className="mt-7 max-w-lg text-[19px] leading-[1.6] text-tinta font-semibold ">Iris llega a un pueblo costero arrastrando una pérdida que no sabe nombrar. Algo en la costa empieza a encenderse cuando ella más lo necesita, y ya no sabe si el mundo le está hablando, o si es ella la que se está apagando.</p>
                    <p className="mt-4 max-w-lg text-[16px] leading-[1.45] italic text-gris-nota opacity-75">Es real: esto es una novela que reparto capítulo a capítulo por las calles de Buenos Aires mediante QR. Leela gratis, sin dejar ningún dato tuyo.</p>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <button className={`inline-flex items-center gap-3 rounded-full bg-bordo px-6 py-3 leading-5 font-bold text-papel transition hover:-translate-y-0.5 hover:shadow-lg ${foco}`} onClick={() => onOpenChapter(1)}>
                            <ArrowDownRight className="size-4" />
                            <span className="text-[18px] font-bold text-papel">Leer el primer capítulo</span>
                        </button>
                        <a className={`text-[18px] leading-4 font-bold uppercase tracking-[.14em] text-bordo no-underline ${foco}`} href="#next-qr-notice">Ubicación de QR</a>
                    </div>
                </div>
                <div className="relative my-7 h-105 overflow-hidden rounded-xs border border-tinta/25 md:my-10 lg:h-auto">
                    <img src={chapter.img} alt="Imagen del acantilado" className="absolute inset-0 h-full w-full object-cover"/>
                    <div className="absolute inset-0 bg-linear-to-t from-tinta/65 via-transparent to-transparent">
                        <p className="absolute bottom-5 left-5 text-[18px] leading-4 italic text-papel">Puede haber fantasmas en la luz</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
