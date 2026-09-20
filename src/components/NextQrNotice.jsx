

export default function NextQrNotice({ currentChapter }) {
  return (
    <section className="bg-papel px-5 py-10 text-center md:px-10 font-semibold" id="next-qr-notice" >
      {currentChapter === 6 
      ? <p className="mx-auto max-w-xl text-[18px] leading-relaxed text-tinta font-display">{`El recorrido todavía se está armando. Cada capítulo tiene su propio QR, escondido en un punto distinto de la ciudad — vas a encontrar la pista del siguiente en el flyer que ya escaneaste :)`}</p>
      : <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-tinta font-display">Acantilado se presentó al Premio PROA, y por eso todavía no tiene final. Lo estoy escribiendo ahora, mientras vos leías esto.
      <br /><br />
      En noviembre voy a saber si ganó, y voy a contarlo sin importar cuál sea la respuesta. Si no gana, no se termina nada: tengo una editora esperando el manuscrito, y vamos a seguir buscándole un lugar donde salir a la luz. Esta historia va a existir en papel. Solo todavía no sé por qué camino.
      <br /><br />
      Lo que sí sé es que no quiero que exista sola. Si algo de todo esto es cierto, es que Acantilado se escribió para ser compartida, y por eso la repartí por la ciudad antes de tenerla terminada. Los diez ejemplares de los que te hablé en la carta son mi forma de devolver algo de esto.
      <br /><br />
      En noviembre voy a saber si ganó. Mientras tanto sigo escribiendo, y lo que va pasando (los QR nuevos, el final, las cartas que me van llegando), lo cuento por acá: <a href="https://www.instagram.com/abby.escritora_acantilado?stkn=MTJ1bmtuOXprcTBlaw==" className="text-bordo" target="_blank" rel="noopener noreferrer">Instagram</a>
      <br /><br />
      Gracias por haber caminado. Falta poco.
      <br /><br />
      El recorrido terminó (por ahora), <span className="text-bordo font-bold">la historia no</span>. 
      </p>}
      
    </section>
  )
}
