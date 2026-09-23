# Acantilado

Sitio de lectura para **Acantilado**, una novela que se reparte capítulo a capítulo mediante códigos QR pegados por Buenos Aires. Cada QR lleva a un capítulo distinto y desbloquea ese capítulo y todos los anteriores.

🔗 **Sitio en vivo:** https://acantilado.netlify.app

---

## De qué se trata

La autora reparte su novela por la ciudad: seis flyers, seis QR, seis capítulos. Quien escanea el QR del capítulo 3 puede leer el 3, el 2 y el 1, pero no los que vienen después: para eso tiene que encontrar los otros flyers.

El sitio original estaba hecho en Canva, con **seis copias** de la misma página y el número de capítulo escrito a mano en cada una. Este proyecto lo reescribe como **una sola aplicación de React**, donde el capítulo sale de la URL.

## Funcionalidades

- **Desbloqueo por URL.** Cada QR apunta a `/capitulo/:numero`. La ruta define hasta qué capítulo se puede leer.
- **Progreso acumulativo.** El avance se guarda en `localStorage` y se combina con la URL: quien llegó al capítulo 5 y vuelve a entrar por el QR 1 conserva sus cinco capítulos.
- **Lector con navegación propia**, índice de capítulos con estado bloqueado/desbloqueado y avisos contextuales según el punto del recorrido.
- **Modo lectura**: oscurece el entorno y angosta la caja de texto para leer con menos distracción.
- **Formato de texto propio**: los capítulos se guardan como texto plano con marcas (`*cursiva*`, `**negrita**`, `***` como separador) que se interpretan al renderizar, sin librerías externas.
- **Formulario de contacto sin backend**, con estados de envío y notificación por mail a la autora.
- **Métricas de visitas** por capítulo, para saber cuántas veces se escaneó cada QR.
- **Responsive** y con foco en accesibilidad: navegación por teclado, `aria-label`, `aria-pressed` y `aria-live`.

## Stack

| Tecnología | Uso |
|---|---|
| **React 19** | interfaz por componentes |
| **Vite 8** | entorno de desarrollo y build |
| **React Router 8** | rutas dinámicas y layout compartido |
| **Tailwind CSS 4** | estilos, con tokens propios en `@theme` y una variante personalizada |
| **Axios** | envío del formulario |
| **Lucide / Font Awesome** | iconografía |
| **SweetAlert2** | aviso de capítulo bloqueado |
| **Netlify** | hosting, formularios y despliegue continuo |
| **GoatCounter + Google Analytics** | métricas |

## Estructura

```
src/
├── layout/       MainLayout, Header, Footer
├── page/         NovelPage
├── components/   Hero, ChapterIndex, Reader, NextQrNotice, About, ContactLetter
├── data/         chapters.js, navLinks.js
├── utils/        progreso.js, validarCapitulo.js
└── index.css     tokens de Tailwind, animaciones y variante `lectura:`
```

## Decisiones técnicas

**Una ruta dinámica en lugar de seis páginas.** `/capitulo/:numero` sirve a los seis QR con un solo componente. Un cambio de diseño se hace una vez, no seis.

**Dos estados separados para el desbloqueo.** `unlockedUpTo` (permiso, derivado de la URL y del progreso guardado) y `currentChapter` (lo que se está leyendo, en estado local). Una sola función, `openChapter`, concentra la decisión y la usan el índice, el lector y el hero.

**Validación en la frontera.** Todo dato que entra desde afuera (parámetro de la URL o `localStorage`) pasa por `validarCapitulo`, que garantiza un número válido. Así, un valor manipulado a mano no rompe la aplicación ni queda guardado de forma permanente.

**Variante propia de Tailwind para el modo lectura.** En lugar de repetir condicionales en cada elemento, `@custom-variant lectura` permite escribir `lectura:bg-noche` y que el estado se maneje en un solo lugar.

**Formulario sin servidor propio.** Netlify Forms recibe los envíos; el formulario de React los manda con `axios` para no recargar la página, con honeypot antispam y estados de envío, error y éxito.

**Soporte de rutas en un hosting estático.** `public/_redirects` devuelve `index.html` con código 200 para cualquier ruta, de modo que entrar directo a `/capitulo/3` (que es exactamente lo que hace un QR) funcione.

## Correrlo en local

```bash
git clone https://github.com/EnzoSantoni/Acantilado.git
cd Acantilado
npm install
npm run dev
```

Requiere Node 22.22 o superior (lo pide React Router 8).

> El formulario y las métricas solo funcionan en el sitio publicado: dependen de servicios que no corren en local.

## Pendientes

- Eventos de lectura por capítulo con `IntersectionObserver`.
- Decisión final sobre qué muestra la ruta raíz.
- Generación de los QR definitivos.

## Créditos

- **Novela y textos:** Abril Novoa.
- **Desarrollo:** Enzo Santoni.
- **Fotografías:** Pexels.
