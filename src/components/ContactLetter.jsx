

export default function ContactLetter() {
  const labelStyle = "mb-3 block text-[18px] leading-4 font-bold uppercase tracking-[.12em] text-bordo"

  return (
    <section id="contacto" className="bg-papel py-20 font-display font-semibold">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[.9fr_1.1fr] md:px-10">
        <div>
          <p className="text-[18px] leading-4 font-bold uppercase tracking-[.2em] text-bordo">Carta a la autora</p>
          <h2 className="mt-4 font-display text-[27px] font-semibold text-tinta">{`Gracias por leerme :)`}</h2>
          <div className="mt-5 max-w-xl text-[18px] leading-[1.6] text-tinta">
            <p>Hola!</p>
            <p className="mt-4">Sería un honor que compartieras una impresión, una pregunta o un fragmento de esta historia que haya quedado en tu corazón. Tu lectura también forma parte de este mundo.</p>
            <p className="my-6 text-center">***</p>
            <p className="italic">Si llegaste hasta acá, además, caminaste un pedacito de la ciudad detrás de esta historia. Eso, para mí, ya es un regalo que no sé cómo devolver del todo. Contame que hiciste el recorrido completo: cuando Acantilado se publique, diez de las personas que llegaron hasta el final van a recibir un ejemplar firmado por mí, como agradecimiento por haber creído en esta locura conmigo.</p>
            <p className="mt-5">{`Gracias por leer. Gracias por caminar. Gracias por creer en Acantilado :)`}</p>
          </div>
        </div>
        <form className="rounded-xs border border-tinta/25 bg-papel p-9 shadow-xs md:p-11">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="mt-2">
              <label htmlFor="reader-name" className={labelStyle}>Tu Nombre</label>
              <input name="reader-name" type="text" id="reader-name" required className="w-full border-b border-tinta/55 bg-transparent px-2 py-3 text-sm text-tinta outline-hidden transition focus:border-bordo "/>
            </div>
          </div>
            <div className="mt-8">
              <label htmlFor="reader-message" className={labelStyle}>Tu Mensaje</label>
              <textarea name="reader-message" id="reader-message" required rows={4} className="w-full resize-none border-b border-tinta/55 bg-transparent px-2 py-3 text-sm leading-relaxed text-tinta outline-hidden transition focus:border-bordo"></textarea>
            </div>
            <div className="mt-8">
              <label htmlFor="chapter-feedback" className={labelStyle}>Comentario sobre el Capítulo</label>
              <textarea name="chapter-feedback" id="chapter-feedback" rows={2} className="w-full resize-none border-b border-tinta/55 bg-transparent px-2 py-3 text-sm leading-relaxed text-tinta outline-hidden transition focus:border-bordo"></textarea>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button type="submit" className="rounded-full bg-bordo px-6 py-4 text-[18px] leading-4 font-bold uppercase tracking-[.12em] text-papel transition hover:-translate-y-0.5 hover:bg-tinta hover:shadow-lg">
                Enviar Carta
              </button>
              <p aria-live="polite" className="text-sm text-tinta"></p>
            </div>
        </form>
      </div>
    </section>
  )
}
