import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <footer className="bg-bordo px-5 py-9 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex flex-col gap-2">
          <span className="font-display text-xl font-medium text-papel">Acantilado</span>
          <span className="mt-2 text-[18px] leading-4 font-normal text-papel"><span className="text-black ">©</span> 2026. Todos los derechos reservados.</span>
        </div>
        <div className="flex flex-wrap gap-5 leading-4 font-semibold uppercase tracking-[.12em]">
          <a href="https://www.instagram.com/abby.music_?stkn=MTFzeTU2NTV5dGdyeg==" className="inline-flex items-center gap-2 font-semibold text-papel transition 
          focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bordo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-[14px]" />
            INSTAGRAM
            </a>
        </div>
      </div>
    </footer>
  )
}
