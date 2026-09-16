import { ArrowRight, Lock } from 'lucide-react';
import {chapters} from '../data/chapters'


export default function ChapterIndex({unlockedUpTo, onOpenChapter}) {
  const foco = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordo';

  return (
    <section id='capitulos' className='border-y border-tinta/45 bg-papel py-20 font-display'> 
      <div className='mx-auto max-w-7xl px-5 md:px-10'>
        <div className='mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end'>
          <div>
            <p className='text-[18px] leading-4 font-bold uppercase tracking-[.2em] text-bordo'>Índice de lectura</p>
            <h2 className='mt-3 font-display text-[27px] font-semibold text-tinta'>Capítulos</h2>
          </div>
          <p className='max-w-md text-[18px] leading-[1.6] text-tinta'>Seis fragmentos para quedarse con Iris al borde del acantilado, reconocer el olor de lo que ya se fue y seguir una luz que no debería estar encendida.</p>
        </div>
        <div className='mx-auto max-w-5xl'>
          {chapters.map(c => {
            const desbloqueado = c.numero <= unlockedUpTo;

            return <article className='group flex items-center justify-between gap-5 border-t border-tinta/42 py-7 px-4 transition-transform duration-300 ease-[ease] last:border-b hover:translate-x-2 hover:bg-bordo/6' key={c.numero}>
              <span className={`font-display text-[18px] leading-9 font-normal ${desbloqueado ? "text-bordo" : "text-bordo/40"}`}>{String(c.numero).padStart(2,"0")}</span>
              <div className='flex min-w-0 flex-1 items-center justify-between gap-4'>
                <h3 className={`font-display text-[21px] font-semibold ${desbloqueado ? "text-tinta" : "text-gris-nota"} `}>{c.titulo}</h3>
                <button type="button" aria-label={`Leer capítulo ${c.numero}`} className={`${foco} inline-flex size-8 shrink-0 items-center justify-center rounded-full border transition hover:bg-bordo hover:text-papel ${desbloqueado ? 'border-bordo p-0 text-bordo' : 'border-tinta/30 text-gris-nota'}`} onClick={() => onOpenChapter(c.numero)}>
                  {desbloqueado ? <ArrowRight className="size-4 transition-transform duration-250 ease-[ease] group-hover:translate-x-1" /> : <Lock className="size-3.5" />}
                </button> 
              </div>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
