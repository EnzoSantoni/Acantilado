# ACANTILADO — Resumen del proyecto (sitio, QR, flyer y difusión)

*Documento de traspaso. Reemplaza a versiones anteriores del resumen.*

---

## 1. Qué es el proyecto

Abril escribió **Acantilado**, una novela sobre el duelo, un faro y un misterio sobrenatural (~18.000 palabras). Está presentada al **Premio Estímulo a la Escritura** (también llamado "concurso PROA"), edición Argentina 2026; los resultados salen en noviembre.

Aparte de la novela, está montando un proyecto de distribución callejera: reparte la novela **capítulo a capítulo mediante códigos QR pegados por Buenos Aires**. Cada QR lleva a una copia distinta de una página web hecha en Canva, donde solo se puede leer el capítulo correspondiente a ese QR. Son **6 capítulos, 6 QR, 6 copias del sitio**.

**El eje de todo el proyecto es la confianza.** Escanear un QR pegado en un poste es un acto raro y sospechoso. Cada decisión de diseño, texto y difusión está orientada a contestar la pregunta "¿esto es real, hay una persona atrás?". Cualquier cosa que suene a campaña publicitaria juega en contra.

---

## 2. Identidad visual

Usar siempre estos códigos exactos:

| Uso | Hex | Nombre interno |
|---|---|---|
| Fondo | `#F4EBDC` | papel envejecido |
| Texto principal | `#2B2420` | tinta |
| Acento principal (títulos, etiquetas, botones) | `#9C4A35` | bordó del hogar |
| Acento secundario, uso mínimo (solo pie de página) | `#33424D` | gris tormenta |
| Acento especial, uso único (solo el borde del bloque "Carta a la Autora") | `#9483A6` | lavanda de Kaelin |

Tipografía de títulos: **Fraunces**.

---

## 3. El sitio web (my.canva.site, hecho con Canva)

### Páginas
Inicio, Capítulos (Índice de Lectura), Sobre la novela, Contacto, y 6 páginas de capítulo (copias de una plantilla madre).

### Portada
- Etiqueta: `NOVELA CONTEMPORÁNEA · LECTURA EN CURSO`
- Título: **Acantilado**
- Síntesis: *"Iris llega a un pueblo costero arrastrando una pérdida que no sabe nombrar. Algo en la costa empieza a encenderse cuando ella más lo necesita, y ya no sabe si el mundo le está hablando, o si es ella la que se está apagando."*
- Debajo, en cursiva chica: *"Es real: esto es una novela que reparto capítulo a capítulo por las calles de Buenos Aires mediante QR. Leela gratis, sin dejar ningún dato tuyo."*
- Botón "Leer el primer capítulo" + link "Ubicación de QR" (este lleva al mismo mensaje que "Siguiente Capítulo").

### Índice de Lectura
Tagline: *"Seis fragmentos para quedarse con Iris al borde del acantilado, reconocer el olor de lo que ya se fue y seguir una luz que no debería estar encendida."*

Capítulos confirmados:
1. El efecto del observador
2. El pasajero
3. Tal vez volvamos a vernos
4. El chirrido que huele a lavanda
5. *(sin confirmar)*
6. *(sin confirmar)*

### Lógica de bloqueo por copia
En cada una de las 6 copias, solo el capítulo de ESE QR es accesible, más los anteriores vía "Capítulo Anterior" (que siempre funciona). Todo lo demás — "Siguiente Capítulo" y las otras filas del Índice — lleva a este mensaje:

> *"El recorrido todavía se está armando. Cada capítulo tiene su propio QR, escondido en un punto distinto de la ciudad — vas a encontrar la pista del siguiente en el flyer que ya tenés en la mano :)"*

**Límite importante y ya conocido:** el bloqueo es de honor, no técnico. Cada página de capítulo conserva su propia URL pública, así que ocultarla del menú o desviar los links no impide que alguien la alcance escribiendo la dirección. Para un recorrido callejero está bien, pero no hay que asumir que es un candado real.

### Final de cada capítulo
Antes de los botones de navegación, teaser discreto (sin emojis, sin exclamaciones):

> *"Si completás este recorrido, hay algo más esperándote al final. Te lo cuento en la carta, más abajo."*

### Bloque "Carta a la Autora"
Formulario: Tu Nombre / Tu Mensaje / Comentario sobre el Capítulo / botón "Enviar Carta". **El campo de correo se eliminó a propósito: no se pide ningún dato de contacto.** Layout de dos columnas: texto a la izquierda (45-50% del ancho), formulario a la derecha con ancho protagónico. Borde del bloque en lavanda `#9483A6` (único uso de ese color en todo el sitio).

Texto completo (el corte `***` imita los cortes de escena de la novela; la parte del regalo va en cursiva):

> Hola! Sería un honor que compartieras una impresión, una pregunta o un fragmento de esta historia que haya quedado en tu corazón. Tu lectura también forma parte de este mundo.
>
> \*\*\*
>
> Si llegaste hasta acá, además, caminaste un pedacito de la ciudad detrás de esta historia. Eso, para mí, ya es un regalo que no sé cómo devolver del todo. *Contame que hiciste el recorrido completo: cuando Acantilado se publique, diez de las personas que llegaron hasta el final van a recibir un ejemplar firmado por mí, como agradecimiento por haber creído en esta locura conmigo.*
>
> Gracias por leer. Gracias por caminar. Gracias por creer en Acantilado :)

**Nunca usar la palabra "sorteo".** A Abril no le gusta cómo suena.

### Pie de página
`Acantilado / © 2026. Todos los derechos reservados.` + link a Instagram.
Pendiente: agregarle el ícono de Instagram al lado del texto, en color crema, sin el degradé de marca.
Se eliminaron los links de GOODREADS y ESCRIBIME (Goodreads no tiene sentido hasta que el libro esté publicado) y se decidió no reemplazarlos por nada.

### "Modo Faro"
El efecto de blur original se reemplazó por este concepto: el fondo alrededor se oscurece a azul-negro (~`#1A1F26`) y el bloque de lectura recibe un resplandor cálido en los bordes en tono crema (`#F4EBDC`), sin ningún blur. **Sin confirmar si quedó bien implementado.**

### Sonido ambiente por capítulo
Se descartó linkear una playlist de Spotify: un link que te saca de la página después de escanear un QR "raro" en la calle suma desconfianza. En su lugar, sonido ambiente libre de derechos (mar, viento, lluvia, fuego — Pixabay Audio o Freesound.org), con reproductor simple, sin logo de plataforma y sin nombre de canción visible.

---

## 4. Menú de navegación — RESUELTO CONCEPTUALMENTE, FALTA EJECUTAR

Hubo varios intentos fallidos de armar un menú propio con CSS y prompts a la IA de Canva, sobre todo por el responsive en celular. La solución es **usar el menú nativo de Canva**, que se adapta solo a mobile.

Hallazgos que cambian lo que se creía pendiente:

- **El menú no se arma, se genera solo.** Se construye automáticamente a partir de los títulos de las páginas, en el mismo orden del diseño. No hay que "agregar links": alcanza con renombrar las páginas.
- **Hay que ocultar los 6 capítulos.** Si no, el menú los lista a todos y cualquiera entra al Capítulo 06 sin haber caminado una cuadra: la lógica de bloqueo se cae sola. Canva tiene la opción **"Ocultar página"** para eso. *(Si esa opción no apareciera, la alternativa es publicar los capítulos como sitios aparte, pero es bastante más trabajo.)*
- **No se puede aplicarle la paleta.** El menú nativo tiene tipografía, colores y tamaño bloqueados en los valores por defecto. Este pendiente hay que descartarlo.

**Decisión abierta (es de Abril):** menú nativo (se adapta solo, cero mantenimiento, estética genérica que no es la del sitio) versus barra propia con Fraunces y el bordó (a tono, pero vuelve el problema responsive, y hay que destildar el nativo o el sitio publicado muestra dos menús). Recomendación dada: el nativo, por ser un sitio al que se llega desde un QR en la calle y con seis copias para mantener.

**Pasos si va por el nativo (todo antes de duplicar):**
1. Renombrar las páginas en el panel de páginas con el ícono de lápiz ("Editar título"): "Página 1" → Inicio, más Capítulos, Sobre la novela, Contacto. Títulos cortos.
2. Marcar "Ocultar página" en las 6 páginas de capítulo.
3. Borrar el menú de texto viejo que quedó duplicado del intento anterior.
4. Tildar "Incluir menú de navegación" en la vista previa de publicación y revisar **desde el celular**, no desde la compu.

---

## 5. Los códigos QR

- **Usar QR dinámico, no estático:** permite cambiar el destino sin reimprimir y da estadísticas privadas de escaneos. Editar la página nunca rompe el QR, porque el QR solo codifica la URL, no el contenido.
- Canva tiene dos herramientas distintas: la nativa (Elementos → "Código QR" → "Crear a partir de un patrón", que usa Bitly, **con límite gratis de 2 códigos por mes**; ahí dio el error "no pudimos generar tu código QR", probablemente por ese tope), y una app aparte ya instalada en la cuenta, **"Dynamic QR Codes" de Hovercode**, que tiene otro cupo. **Se eligió Hovercode** (ver abajo).
- El QR que aparece al tocar "Compartir" en el editor es otra cosa más simple: probablemente un QR directo sin seguimiento.
- Patrón visual recomendado: "Cuadrados redondeados" o "Bloques". Evitar corazones, estrellas y cruces, que restan confianza en la calle.

**RESUELTO — se usa Hovercode.** El generador nativo de Canva corre por Bitly, cuya cuenta gratis permite 2 códigos por mes: insuficiente para los 6. La app **"Dynamic QR Codes" de Hovercode**, ya instalada en la barra lateral de Canva, cobra lo mismo desde la app que desde hovercode.com y da estáticos ilimitados más **10 dinámicos gratis**. Los códigos no vencen ni por tiempo ni por cantidad de escaneos, y borrar uno libera lugar en el cupo. Los destinos se editan y las estadísticas se ven entrando a hovercode.com. La cuenta de Hovercode es independiente de la de Canva: hay que crearla, y conviene que sea con un mail al que Abril tenga acceso, porque ahí van a vivir los seis destinos. Usar el campo "Nombre" de cada código ("Acantilado Cap 1", etc.), o después son seis códigos indistinguibles.

**Plan de generación:** terminar la plantilla madre → duplicarla 6 veces → aplicar la lógica de bloqueo en cada copia → publicar cada copia por separado (cada una obtiene su URL) → generar un QR dinámico por URL.

---

## 6. El flyer físico

**Tamaño:** A4. Alguna copia en A3 para puntos de mucho tránsito, pero no más grande: pierde practicidad, sube el costo, y un póster gigante empieza a parecer campaña publicitaria real, lo cual va en contra de la autenticidad buscada. Imprimir **a dos tintas** en vez de full color, porque el diseño es plano (crema + bordó) y sin fotos.

### Estructura (de arriba hacia abajo)

1. **Epígrafe**, cita real de la novela:
   > *"Me detuve afirmando los pies al suelo. Un escalofrío helado recorrió mi cuerpo por la posibilidad de quedar atrapada en ese borde. Volví a cerrar los ojos pero la luz apareció otra vez. Sin sonido. Sin tormenta. Sin razón. No era posible que la luz viniese del faro."*
   
   Con **"Me desplomé."** destacado.
2. Ilustración plana de un faro con haz de luz, en bordó.
3. Título **ACANTILADO** en Fraunces.
4. **Frase de confianza:** *"Detrás de este QR no hay ninguna empresa. Hay una autora repartiendo su novela por la ciudad, gratis, capítulo a capítulo."*
   *(Reemplazó a "Es real. Es gratis. No dejás ningún dato tuyo.", rechazada por sonar a eslogan.)*
5. QR grande con margen limpio + "Escaneá para leer el Capítulo 1."
6. "Parte 1 de 6 · el resto está escondido por la ciudad."
7. Espacio en blanco: "Parte 2 en calle: ___", para completar a mano una vez definido el recorrido.
8. Franja inferior con "Acantilado / Parte 1".
9. Tiritas para arrancar abajo, cada una con mini-QR + texto vertical, separadas por líneas punteadas.

### Franja inferior — PENDIENTE

La franja original tenía forma de onda curva que parecía de panadería. Se probó reemplazarla por una silueta de montaña sacada de Elementos, pero **sigue sin convencer: parece colinas, no un acantilado.**

Cosas ya resueltas en el camino:
- **Cómo estirarla sin que crezca a lo alto:** arrastrar los tiradores del **medio de los lados**, no los de las esquinas (las esquinas mantienen la proporción). Para precisión: panel Posición/Tamaño, escribir ancho y alto a mano, con el **candado de proporciones abierto**.
- **La IA de Canva no sirve para esto.** Magic Media genera imágenes rasterizadas: no se pueden recolorear con la paleta (o sea, no se pueden pasar a `#9C4A35` con un clic) y vienen con fondo. Para impresión a dos tintas es un problema.
- **La ruta recomendada** es Elementos → pestaña **Gráficos** (vectores, recoloreables), buscando **en inglés** porque la biblioteca está indexada casi toda en inglés: `cliff silhouette`, `rocky cliff edge`, `canyon silhouette`, `broken rock edge`. Un acantilado es canto plano arriba y caída vertical, no una sucesión de picos.
- Recolorear a `#9C4A35`. El negro rompe la paleta y además le compite al QR, que es lo único que tiene que resaltar en esa mitad del flyer.

### Tiritas para arrancar — PENDIENTE

**Problema detectado:** el texto vertical y el mini-QR se colocaron por separado, así que las líneas de corte no caen en el mismo lugar respecto de cada uno. Resultado: hay tiritas con el texto repetido y sin QR, que no cumplen su función.

**Cómo se arregla** (no hay prompt de IA que lo resuelva, es armado):
1. Borrar todo lo que hay en esa franja.
2. Armar **una** tirita: mini-QR + texto vertical + línea punteada pegada a su borde derecho.
3. Seleccionar los tres y agrupar (Ctrl+G). A partir de ahí es un solo objeto y no se pueden desfasar.
4. Duplicar el grupo, llevar el último al extremo derecho, seleccionar todos, y en Posición usar "espaciar uniformemente" en horizontal y después "Ordenar".

**Decisión tomada en el paso 2: bajar de 9 tiritas a 6.** En A4, 9 tiritas dan 2,3 cm cada una y el QR queda abajo de 2 cm con su margen. Las URLs de `.my.canva.site` son largas, o sea QR denso, y un QR denso y chico es justo el que el celular no engancha de noche, en la calle. Con 6 tiritas hay 3,5 cm y un QR cómodo.

**Antes de la tirada:** imprimir una hoja suelta, arrancar una tirita de verdad y escanearla con el celular.

---

## 7. Aspecto legal

Pegar carteles sin permiso en la vía pública de CABA es una falta (multa y posible decomiso, según el Boletín Oficial). Usar árboles como soporte es una infracción aparte.

**Recomendación:** pedir permiso a comercios (cafés, librerías, kioscos) para exhibir el flyer en su vidriera o local, en vez de pegarlo en la vía pública sin autorización. Además de evitar el problema, da vidriera y techo. Este argumento se refuerza con la decisión de Instagram (ver abajo): si los carteles van sin permiso, la cuenta personal queda siendo el cartel de "yo fui".

---

## 8. Instagram y difusión

### Contexto
Las redes personales tienen alcance chico (las siguen amigos y familia, no lectores). Aun así, el Instagram cumple una función que no es la de alcance: **es el último eslabón de la cadena de confianza.** Quien llega ahí no viene a descubrir el proyecto, ya lo descubrió y ya leyó un capítulo. Viene a verificar que hay una persona real atrás. Si encuentra un perfil vacío, la visita juega en contra.

### Decisión tomada: usar la cuenta personal de Abril, no crear una nueva
Una cuenta nueva con cuatro posteos parece exactamente lo que parece una estafa. Una cuenta con años encima, con amigos comentando cosas viejas sin relación con el proyecto, es imposible de falsificar. Esa historia acumulada es el activo más fuerte y no se compra. Y al ser la cuenta de la autora, coincide con lo que promete el flyer ("hay una autora repartiendo su novela"): no hay grieta entre lo que dice el cartel y lo que encuentra quien llega al final del recorrido.

### El posteo fijado
Instagram permite fijar hasta tres publicaciones arriba del perfil; lo fijado es lo que ve quien llega desde un QR. Tiene que tener:
- **La foto:** el flyer real, en la calle real, a la altura de los ojos, con la esquina reconocible. No un mockup limpio ni el diseño en PNG. La persona estuvo parada frente a uno hace diez minutos y el reconocimiento es lo que dispara la confianza. Que se vea un poco imperfecta ayuda.
- **La primera línea:** Instagram corta a los ~125 caracteres. Esa línea contesta "qué es esto", no saluda. Del orden de "Estoy repartiendo mi novela por Buenos Aires, un capítulo por vez, pegada en la calle".
- **El pedido:** no pedir seguidores. Esa persona no vino a seguir a nadie, vino a encontrar el capítulo siguiente. El motivo para seguir tiene que ser ese: "Acá voy avisando dónde aparece cada capítulo".
- **El gancho de los diez ejemplares**, mencionado desde ahí y no recién al final del recorrido, en el mismo registro bajo que tiene la carta.

**El caption lo escribe Abril, no Claude.** Todo el posicionamiento es "no hay ninguna empresa atrás", y un copy redondito y bien armado lo desarma en dos segundos: se nota. Claude puede darle criterios y mirárselo después, no escribírselo.

### Bio y foto de perfil
- **Bio:** 150 caracteres; la primera línea es la que aparece en los resultados de búsqueda. Tiene que contestar quién es y qué es esto, no ser una frase linda ni una cita de la novela.
- **Foto de perfil (abierta):** la actual son unas zapatillas negras sobre un camino de hojas otoñales. A favor de dejarla: el proyecto entero es caminar la ciudad y la carta del sitio agradece justamente eso. En contra: a ~40 px, que es como se ve en comentarios y búsquedas, se vuelve manchas y no dice "persona". **Criterio para decidir:** mirar la pantalla completa (foto + nombre + bio + posteo fijado). Si la bio y el fijado ya hacen la verificación, las zapatillas se quedan; si la bio va a ser corta y atmosférica, conviene una cara.

### Lo que arrastra la decisión
La cuenta tiene que ser **pública**, o quien escanea ve un candado y la cadena se corta en el último eslabón. Antes de abrirla:
- Archivar (no borrar) lo que no se quiera mostrar a desconocidos.
- Configuración → Etiquetas: pasar a aprobación manual.
- Revisar los filtros de solicitudes de mensajes y de palabras ocultas, porque van a entrar DMs de gente desconocida.

### Estrategia de difusión más amplia
- Anunciar los lanzamientos de capítulo como "búsqueda del tesoro", aunque el alcance sea chico: suma una segunda vía de gente que sale a buscarlo a propósito.
- Escalonar los 6 capítulos en el tiempo en vez de largarlos todos juntos.
- Adelantar el gancho de los 10 ejemplares desde el principio, no solo al final del recorrido.
- Sumar aliados chicos (comercios, cuentas de barrio) y documentar el detrás de escena.
- Recursos de comunidad lectora argentina: la cuenta **BookstagramAr** (hace repost si la etiquetás) y el hashtag **#igreadersarg** (usado por bookstagrammers argentinos para encontrarse).
- **Hashtag propio:** la palabra exacta no está confirmada (probablemente algo tipo #Acantilado), pero sí el tono: nunca como pedido publicitario ("¡usá este hashtag!"), sino mencionado como si ya fuera costumbre — por ejemplo *"Quienes la encuentran, a veces la nombran #Acantilado."* Va chico en el flyer (esquina, estilo colofón) y en el sitio cerca de la frase de confianza.

---

## 9. Orden de trabajo (camino crítico)

**Ahora, en la plantilla madre — todo esto antes de duplicar.** Cualquier arreglo posterior a la duplicación se hace seis veces.
- Menú de navegación (renombrar páginas, ocultar los 6 capítulos, borrar el menú viejo, probar en celular)
- Modo Faro (confirmar que quedó bien)
- Ícono de Instagram en el pie

**En paralelo, independiente del sitio:**
- La franja del flyer y las tiritas
- Probar el generador de QR de Hovercode (temprano, porque puede obligar a cambiar de plan)
- Bio y foto de perfil de Instagram

**Después, en este orden:**
1. Duplicar la plantilla 6 veces
2. Aplicar la lógica de bloqueo en cada copia
3. Publicar cada copia por separado (6 URLs)
4. Generar 6 QR dinámicos
5. Cerrar el flyer con el QR real, imprimir una prueba y escanearla
6. Definir el recorrido y conseguir los comercios
7. Pegar el primer flyer, fotografiarlo, subir el posteo y fijarlo **el mismo día**

---

## 10. Decisiones abiertas

- Menú nativo de Canva versus barra propia (es de Abril)
- Títulos de los capítulos 05 y 06
- Foto de perfil de Instagram: dejar las zapatillas o poner una cara
- Palabra exacta del hashtag propio

---

## 11. Criterios de tono (aplican a todo)

- Nada puede sonar a campaña publicitaria ni a eslogan. Ese es el criterio que ya hizo descartar textos.
- No usar la palabra "sorteo".
- Los teasers van sin emojis y sin exclamaciones.
- Los textos de Abril los escribe Abril. Claude aporta criterios, estructura y devolución, no el copy final.