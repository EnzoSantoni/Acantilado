import { ArrowLeft, ArrowRight, Focus } from "lucide-react";
import { chapters } from "../data/chapters";

export default function Reader({currentChapter, onOpenChapter}) {
    const foco = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordo';
    const chapter = chapters.find(ch => ch.numero === currentChapter)

    return (
        <section id='lector' className='bg-papel py-20 md:py-28 font-display'>
            <div className='mx-auto max-w-7xl px-5 md:px-10'>
                <div className='mb-9 flex items-center justify-between border-b border-tinta/45 pb-5'>
                    <p className="text-[18px] leading-4 font-bold uppercase tracking-[.2em] text-bordo">Sala de lectura</p>
                    <button type="button" className={`inline-flex items-center gap-2 rounded-full border border-bordo px-4 py-2 leading-4 font-bold uppercase tracking-[.12em] text-bordo transition hover:bg-bordo hover:text-papel ${foco}`}>
                        <Focus className="size-4" />
                        <span className="text-[18px] font-bold">Modo lectura</span>
                    </button>
                </div>
                <div className="mx-auto max-w-4xl rounded-xs border border-tinta/25 bg-papel px-6 py-12 transition-all duration-300 md:px-16 md:py-16">
                    <article key={chapter.numero}>
                        
                        <p className="text-[18px] leading-4 font-bold uppercase tracking-[.2em] animate-page-in text-bordo">Capítulo {String(chapter.numero).padStart(2,"0")}</p>
                        <h2 className="mt-4 font-display text-[27px] font-semibold text-tinta">{chapter.titulo}</h2>
                        <div className="my-9 h-px w-16 bg-bordo"></div>
                        <div className="max-w-2xl space-y-[1.9em]">
                            <p className="whitespace-pre-line font-display text-[18px] leading-[1.9] font-medium text-tinta">{chapter.parrafos}</p>
                        </div>
                        <p className="mt-6 max-w-2xl text-[16px] leading-[1.45] italic text-gris-nota opacity-75">{chapter.nota}</p>
                    </article>
                    <div className="mt-14 flex items-center justify-between gap-4 border-t border-tinta/45 pt-7 max-lg:flex-col max-lg:items-stretch">
                    
                        <button type="button" className={`inline-flex items-center gap-2 rounded-full border border-bordo px-5 py-3 leading-4 font-bold uppercase tracking-widest text-bordo transition max-lg:justify-center hover:bg-bordo hover:text-papel ${foco} ${currentChapter <= 1 ? "opacity-0 pointer-events-none" : ''}`} onClick={() => onOpenChapter(currentChapter - 1)}>
                            <ArrowLeft className="size-4" />
                            <span className="text-[18px] font-bold" >Capítulo anterior</span>
                        </button>
                        <button type="button" className={`inline-flex items-center gap-2 rounded-full bg-bordo px-5 py-3 leading-4 font-bold uppercase tracking-widest text-papel transition hover:bg-tinta ${foco} ${currentChapter >= chapters.length ? "opacity-0 pointer-events-none invisible" : ''}`} onClick={() => onOpenChapter(currentChapter + 1)}>
                            <ArrowRight className="size-4" />
                            <span className="text-[18px] font-bold">Siguiente capítulo</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
