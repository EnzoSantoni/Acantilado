import sobreImg from "../assets/img/img-sobre-nosotros.jpg"

export default function About() {
  return (
    <section id="sobre" className="bg-papel py-20 md:py-28 font-display font-semibold  ">
      <div className="mx-auto grid max-w-7xl grid-cols-[.9fr_1.1fr] gap-12 px-5 md:px-10 max-lg:grid-cols-1">
        <div>
          <p className="text-[18px] leading-4 font-bold uppercase tracking-[.2em] text-bordo">Detrás de la historia</p>
          <h2 className="mt-5 font-display text-[27px] font-semibold text-tinta">Sobre la novela</h2>
            <img src={sobreImg} alt="" className="mt-10 aspect-4/5 w-full max-w-sm border border-tinta/35 object-cover grayscale" />
        </div>
        <div className="flex flex-col justify-end">
          <p className="max-w-2xl font-display text-[18px] leading-[1.7] text-tinta">Acantilado es una historia sobre la luz y la oscuridad, sobre el duelo y la culpa que crecen con los años. Entre cartas al viento y una búsqueda para el diario, Iris termina encontrando en East Dean mucho más que a ella misma.</p>
          <dl className="mt-12 grid gap-7 border-y border-tinta/35 py-8 sm:grid-cols-2">
            <div>
              <dt className="text-[18px] font-bold uppercase tracking-[.18em] text-bordo">Género </dt>
              <dd className="mt-2 text-[18px] leading-[1.55] text-tinta">Ficción contemporánea · Drama íntimo</dd>
            </div>
            <div>
              <dt className="text-[18px] font-bold uppercase tracking-[.18em] text-bordo">Temas  </dt>
              <dd className="mt-2 text-[18px] leading-[1.55] text-tinta">Memoria, amor, amistad, duelo, lugares que nos transforman y la posibilidad de comenzar otra vez. </dd>
            </div>
          </dl>
          <div className="mt-10 border border-lavanda p-6 font-semibold">
            <p className="text-[18px] font-bold uppercase tracking-[.18em] text-bordo">Nota de la autora</p>
            <p className="mt-3 max-w-xl font-display text-[18px] leading-[1.6] italic whitespace-pre-line text-tinta">Mi nombre es Abril Novoa, tengo 27 años. Un gusto! <br/> <br/> Escribo esta novela como quien deja una luz encendida en una casa vacía.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
