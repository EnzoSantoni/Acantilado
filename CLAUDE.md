# Acantilado — versión React

## Contexto

Sitio de *Acantilado*, la novela de Abril (mi novia). Ella lo armó en Canva. Yo lo recreo desde cero en React por dos razones: practicar React, React Router y Tailwind, y tener código propio que pueda hostear en Netlify.

La novela se reparte capítulo a capítulo mediante QR pegados por Buenos Aires. Cada flyer tiene además tiritas con el QR para arrancar y llevarse a casa. Todo el proyecto gira alrededor de la confianza: quien escanea tiene que sentir que hay una persona real atrás, no una campaña.

Archivos de referencia (leelos completos antes de proponer nada):

- `referencia/canva-original.html` — el código que generó Canva. **Es la fuente de verdad visual.**
- `referencia/resumen-proyecto.md` — el documento con todo el proyecto (sitio, QR, flyer, difusión).

Si los dos se contradicen en algo visual o de estructura, manda el HTML.

## Cómo quiero trabajar: modo enseñanza

Lo escribo yo. Vos me guiás.

- Antes de cada paso, explicame el concepto y comparalo con cómo lo resuelve el original. El HTML de Canva está hecho con JS vanilla (`getElementById`, `classList.toggle`, `addEventListener`), así que es la comparación perfecta para cada cosa que pase a React.
- Un paso por vez: me das el ejercicio, esperás mi código y lo revisás contra el original. No escribas componentes completos, salvo que yo escriba **MODO RESPUESTA**.
- No des por sabido el vocabulario: definí cada término nuevo la primera vez que aparece.
- Una tecnología nueva por vez.
- Si una librería o su sintaxis cambió de versión (Tailwind 3 → 4, React Router), avisame explícitamente antes de usarla.
- Si aparece una decisión de diseño o de producto, explicame las opciones y los criterios, pero no la tomes vos. Decido yo, o Abril si es sobre la novela, los textos o la estética.
- Los textos son de Abril: se copian tal cual, no se reescriben ni se "mejoran". Nunca usar la palabra "sorteo".

## Stack

- Vite + React, en JavaScript (sin TypeScript en este proyecto).
- React Router.
- Tailwind CSS **v4** con el plugin `@tailwindcss/vite`. Los tokens van en el CSS con `@theme`, no en `tailwind.config.js`.
  - Ojo: el original usa Tailwind 3.4 por CDN.
  - Las clases con valores arbitrarios (`bg-[#9C4A35]`, `tracking-[.2em]`) funcionan igual en las dos versiones.
- `lucide-react` para los íconos (el original usa Lucide).
- Deploy en Netlify.

## Fidelidad visual (no negociable)

Tiene que ser una réplica exacta del original, en desktop y en celular.

Colores como tokens de `@theme`:

| Token | Hex | Uso |
|---|---|---|
| papel | `#F4EBDC` | fondo |
| tinta | `#2B2420` | texto principal |
| bordo | `#9C4A35` | acento principal |
| tormenta | `#33424D` | en la paleta oficial; hoy el HTML no lo usa |
| lavanda | `#9483A6` | borde de "Nota de la autora" |
| gris-nota | `#6B625B` | textos chicos en cursiva (`rgb(107, 98, 91)` en el HTML) |
| noche | `#1A1F26` | fondo del modo lectura |

Fuentes:

- **Fraunces** para títulos (clase `display-font` del original): opsz 9..144, pesos 400 a 700.
- **DM Sans** para el cuerpo: pesos 400 a 700.

**Importante:** en el HTML casi todos los textos tienen un `style` inline (font-size, font-weight, color) que pisa las clases de Tailwind. Por ejemplo, las etiquetas tienen `text-xs` en la clase pero `font-size: 18px` en el style. Los valores que se ven en pantalla son los del `style`, así que la réplica se hace con esos, no con las clases.

Hay que conservar también todos los detalles del CSS del `<style>` del original:

- la textura `paper-grain`;
- las animaciones `reveal` y `pageIn`;
- el hover de `chapter-card` y el subrayado animado de `nav-link`;
- el modo lectura completo.

## Estructura

Es la misma del HTML: una sola página de scroll con secciones.

1. Header sticky, con menú mobile.
2. Hero (`#inicio`).
3. Índice de capítulos (`#capitulos`).
4. Sala de lectura (`#lector`).
5. Aviso de capítulo bloqueado (`#next-qr-notice`).
6. Sobre la novela (`#sobre`).
7. Carta a la autora (`#contacto`).
8. Footer.

Componentes sugeridos: `Header`, `Hero`, `ChapterIndex`, `Reader`, `NextQrNotice`, `About`, `ContactLetter`, `Footer`.

Los datos de los capítulos van en `src/data/chapters.js`. Los textos editables (como el aviso de capítulo bloqueado) van centralizados, para poder cambiarlos sin tocar los componentes.

## Capítulos: datos

- Solo el **capítulo 1** tiene texto real: es el panel `data-reader="1"` del HTML.
- Los paneles 2 a 6 son relleno inventado por la IA de Canva (hablan de "Tomás" y "Alma", que no son personajes de la novela). **No usarlos.**
- Los títulos se toman del índice (`#capitulos`) y quedan marcados como pendientes de confirmar con Abril.
- El texto de los capítulos 2 a 6 lleva un placeholder visible: `[Texto pendiente]`.
- Cada capítulo se guarda como `{ numero, slug, titulo, parrafos }`, con el texto como array de párrafos.

## Lógica de desbloqueo (el corazón del proyecto)

- Cada capítulo tiene su propia URL de entrada. Esa URL es la que va a codificar su QR.
- Si entrás por la URL del capítulo N, podés leer N y todos los anteriores (1 a N). Los posteriores quedan bloqueados.
  - Ejemplo: entrás por el QR 3 → leés el 3, el 2 y el 1, pero no el 4, el 5 ni el 6.
- Tocar un capítulo bloqueado, desde el índice o desde "Siguiente capítulo", lleva al aviso `#next-qr-notice`. El texto del aviso es el exacto del HTML.
- "Capítulo anterior" siempre funciona, hasta llegar al 1.
- En el original, esto es `Math.min(1, chapter)` con el número escrito a mano en cada una de las 6 copias del sitio. Acá ese número es un dato que sale de la ruta, y hay una sola app.
- Es un bloqueo de honor, no de seguridad: el texto de los capítulos viaja en el bundle de JS. Está aceptado.

**Decisiones que tenés que plantearme antes de implementar (no las resuelvas vos):**

1. Formato de las URLs: `/capitulo/3`, que cualquiera puede adivinar, o un slug no obvio por capítulo.
2. Qué muestra la ruta raíz `/` cuando alguien entra sin QR.
3. Si el progreso se recuerda entre visitas (por ejemplo con localStorage) o depende solo de la URL por la que se entró.

## Formulario "Carta a la autora"

- La interfaz tiene que ser idéntica al original.
- El original guarda los mensajes con `window.dataSdk`, que es de Canva y acá no existe. Por ahora el envío es simulado; el backend se decide al final.
- No se pide email ni ningún dato de contacto. Es una decisión de Abril.

## Métricas de visitas

Quiero saber cuántas personas entran al sitio y cuántas leen cada capítulo.

- **Condición:** el sitio promete "sin dejar ningún dato tuyo", así que nada de cookies ni de rastreo personal. Eso descarta Google Analytics.
- **Candidatos:** GoatCounter o Umami Cloud. La elección es mía.
- **Ojo con la SPA:** con React Router, cambiar de ruta no recarga la página, así que hay que registrar la visita a mano en cada cambio de ruta. Si no, solo se cuenta la primera entrada.
- **Para medir "leer":** registrar un evento cuando la persona llega al final del capítulo (IntersectionObserver sobre la nota de cierre).
- Mostrar o no un contador visible en la página lo decide Abril.

## Orden de trabajo

1. Setup: Vite, Tailwind v4 con los tokens, fuentes, lucide-react y la carpeta `referencia/`.
2. Maqueta estática, sección por sección, empezando por el Header. El menú mobile se maneja con `useState` en vez de `classList.toggle`. Después de cada sección, comparar con el original en desktop y en celular.
3. Datos de los capítulos y `Reader`, con el capítulo activo manejado por estado.
4. React Router y la lógica de desbloqueo.
5. Modo lectura.
6. Deploy en Netlify, con el archivo `public/_redirects` que contiene `/* /index.html 200`.
   - **Esto es crítico.** Sin ese archivo, entrar directo a una ruta (que es exactamente lo que hace un QR) da error 404.
7. Métricas.
8. Formulario real.
9. QR, al final de todo.
   - Una vez impresos, la URL del deploy **no puede cambiar nunca más**. Nada de renombrar el proyecto en Netlify.
