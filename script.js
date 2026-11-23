'use strict';

// Secciones del menú e íconos que las identifican.
const menu = [
  ['Inicio', '•'],
  ['Independencia', '•'],
  ['Historia', '•'],
  ['Causas', '•'],
  ['Desarrollo', '•'],
  ['Personajes', '•'],
  ['Juegos', '•'],
  ['Videos', '•']
];

// Temas y descripciones que aparecen como accesos rápidos y en la búsqueda.
const quickTopics = [
  ['Causas', '', '¿Por qué comenzó?'],
  ['Antecedentes', '', 'Las pistas del pasado'],
  ['Personajes', '', 'Quienes hicieron historia'],
  ['Hechos importantes', '', 'Momentos para recordar'],
  ['Desarrollo', '', 'El camino a la libertad'],
  ['Consecuencias', '', 'Lo que cambió']
];

// Textos que se muestran en Historia, Causas y Desarrollo; también se leen en voz alta.
const readingCopy = {
  Historia: `El 20 de julio de 1810 fue una fecha fundamental en la historia de Colombia, ya que marcó el inicio de un proceso político y social que condujo a la independencia del dominio español. Ese día era viernes de mercado y la Plaza Mayor de Santafé, actualmente Bogotá, estaba llena de comerciantes, campesinos y habitantes de diferentes sectores sociales.

Al mediodía, Luis de Rubio se acercó a la tienda del comerciante español José González Llorente para pedir prestado un florero que sería utilizado para decorar la mesa de Antonio Villavicencio, un criollo que llegaría a la ciudad. La solicitud se convirtió en un motivo de tensión entre los criollos y los españoles, aunque los detalles exactos de la discusión y la actitud de Llorente han sido objeto de diferentes interpretaciones históricas.

Francisco José de Caldas y Antonio Morales intervinieron en el conflicto, que fue aprovechado por algunos criollos para movilizar a la población contra las autoridades españolas. La discusión del florero se convirtió en el detonante de una protesta mucho más profunda, pues existía un descontento acumulado por la desigualdad política, las restricciones económicas y la falta de participación de los criollos en los cargos importantes del gobierno colonial.

La multitud comenzó a reunirse en la plaza y exigió la creación de una Junta de Gobierno. Ante la presión popular, se convocó un cabildo extraordinario y se redactó el Acta del 20 de Julio de 1810, mediante la cual se estableció una Junta Suprema en nombre del rey Fernando VII, quien se encontraba prisionero de Napoleón Bonaparte. Aunque inicialmente no se declaró una independencia absoluta de España, este acontecimiento permitió que los criollos comenzaran a ejercer el poder político de manera autónoma.`,
  Causas: `1. Exclusión de los criollos: Los criollos, descendientes de españoles nacidos en América, no podían acceder a los altos cargos políticos y administrativos, lo que generó un gran descontento.

2. Restricciones económicas: La Corona española imponía un monopolio comercial que impedía el libre desarrollo económico de las colonias.

3. Altos impuestos: Los habitantes de las colonias debían pagar numerosos impuestos a la Corona, lo que generaba malestar y resentimiento.

4. Influencia de la Ilustración: Las ideas de libertad, igualdad y soberanía popular, difundidas por la Ilustración, influyeron en los criollos y despertaron su deseo de independencia.

5. Revolución Francesa: El ejemplo de la Revolución Francesa y sus ideales de libertad, igualdad y fraternidad inspiraron a los independentistas colombianos.

6. Independencia de Estados Unidos: La independencia de las trece colonias británicas en América del Norte demostró que era posible alcanzar la independencia y construir una nación libre.

7. Invasión napoleónica a España: La invasión de España por Napoleón Bonaparte creó un vacío de poder y debilitó la autoridad de la Corona española sobre sus colonias.

8. Memorial de Agravios: Este documento, redactado por los criollos en 1809, expresaba sus quejas y demandas ante la Corona española, y sentó las bases para los movimientos independentistas.

9. El Grito de Independencia: El 20 de julio de 1810, el incidente del florero de Llorente en Bogotá desencadenó una revuelta popular y marcó el inicio de la lucha por la independencia de Colombia.

10. Liderazgo de Simón Bolívar: El liderazgo de Simón Bolívar fue fundamental para la independencia de Colombia y de otros países de América Latina.`,
  Desarrollo: `La Independencia de Colombia fue un proceso histórico que comenzó debido al descontento de los habitantes de la Nueva Granada por los altos impuestos, las desigualdades sociales y el dominio de España. Los criollos, aunque habían nacido en América, tenían menos oportunidades de ocupar cargos importantes que los españoles.

El 20 de julio de 1810 ocurrió el Grito de Independencia en Santa Fe, cuando un conflicto relacionado con el préstamo de un florero provocó una protesta popular. Como resultado, se formó una junta de gobierno que buscaba mayor autonomía frente a España. Sin embargo, los líderes independentistas tuvieron desacuerdos sobre cómo organizar el territorio, periodo conocido como la Patria Boba.

Entre 1815 y 1816, España intentó recuperar el control de sus colonias mediante una campaña militar dirigida por Pablo Morillo. Durante esta etapa, muchos líderes patriotas fueron perseguidos y ejecutados. A pesar de esto, los movimientos independentistas continuaron luchando por la libertad.

En 1819, Simón Bolívar organizó una campaña militar para liberar la Nueva Granada, con el apoyo de Francisco de Paula Santander y otros patriotas. Después de importantes enfrentamientos, el ejército libertador logró la victoria en la Batalla de Boyacá, el 7 de agosto de 1819, que fue decisiva para asegurar la independencia de la Nueva Granada.

Finalmente, el 17 de diciembre de 1819 se creó la República de Colombia, conocida como la Gran Colombia, que reunió varios territorios de Sudamérica. La independencia fue el resultado de años de lucha y sacrificio, y permitió avanzar hacia la construcción de un gobierno propio, aunque todavía quedaron muchos desafíos políticos y sociales por resolver.`
};

// Información que se usa para crear las tarjetas de personajes.
const characters = [
  ['Simón Bolívar', 'Fue el principal líder militar de la independencia y es conocido como El Libertador. Lideró la campaña que terminó con la victoria patriota en la Batalla de Boyacá.', 'https://images.openai.com/static-rsc-4/PNSeH_Ar9r1h2-bGnr6OYk3G0qdu-uPt5f-AK229mcZu_jTGTYkgl9jRqOnQYRSJXWYbJH7dCc_V8NE4E0i1E39hYh-KEVHY4FxVqo_0pxGW9O_PvcZTUB8diI6atwligDH4KrgRKBBywkXA7rpU2nFETCceVeRHdCmvkgiFGbxPnXT1GdQoZsl5haCgEqJB?purpose=fullsize'],
  ['Francisco de Paula Santander', 'Fue un militar y político que luchó por la independencia. Ayudó a organizar el nuevo gobierno y fue conocido como El Hombre de las Leyes.', 'https://images.openai.com/static-rsc-4/HacWa_WhpfJL5TrOuBsDZZ_A5U62kNSkY0QnbsNatHu6lq8ZEPx0isEvktv2kF-jwK6mNIYvJlTzYBTq2AZgadQz939ojZoxcsdQtnQy2hlg_cgUzi18HymgZ70uwNaDG9FrypVfv00ZSuhkTgoDRlF6bfgUYqjCseHZi_s0hwaJalaNv5esRqcq-YsvNjvF?purpose=fullsize'],
  ['Antonio Nariño', 'Fue un precursor de la independencia. Tradujo y difundió los Derechos del Hombre, promoviendo las ideas de libertad e igualdad.', 'https://images.openai.com/static-rsc-4/mI0h4haMRl-6wHXO41b0U4KsZHEo9PjYcSaVLszrJI593E0Og8HudRaHfa-nKcT2whUEf1ZOsYy3-Fo7kYqAWbB-TiYQBy08TgoCQs0wylAsPYKD9bhPyfhGhk6lumgoucdcaAH8fwTRkIwzy54KOIvC2FV94hygeCeGNJ407RaXLFxqou1gaeqyyK2dNX0L?purpose=fullsize'],
  ['Policarpa Salavarrieta', 'Conocida como La Pola, ayudó a los patriotas como espía. Fue capturada y fusilada en 1817, convirtiéndose en símbolo de valentía.', 'https://images.openai.com/static-rsc-4/J360THryPFPC24veeeAeTu-c3qGYEqbu6FsjHIqvW8NnTa7vOmUVWT753rfx_PSd3i7p0n-FqrjulSrzKxf1d8VSq5U5bjFb71XprVraxnCyI8kuAzNG3UcN7XnlxOUMv13XDlVKt-QlPJPsrMUS6u0-ahU_X-Sns-D1J7W8StM39gA4F4aHFiNag1x95Bo4?purpose=fullsize'],
  ['Camilo Torres Tenorio', 'Fue un importante líder político. Defendió los derechos de los criollos y apoyó el movimiento independentista.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDSjFboo0H5v7_NQEzJ1EW_wKMOBJszzraXcoNjn2Cg&s=10'],
  ['José Acevedo y Gómez', 'Fue un líder del 20 de julio de 1810. Su discurso motivó al pueblo de Bogotá a apoyar el movimiento de independencia.', 'https://diccionariodecolombia.expert/wp-content/uploads/2020/02/Acevedo-y-G%C3%B3mez-Jos%C3%A9.jpg']
];

// Fechas, acontecimientos e imágenes de la línea de tiempo.
const timeline = [
  ['1781', 'Revolución de los Comuneros', 'Fue una protesta contra los altos impuestos y los abusos de las autoridades españolas. Se convirtió en un antecedente importante de la independencia.', 'https://images.openai.com/static-rsc-4/O4E4xfXzJDpmqnDh-u8GtCYfl6gYNHfSmDcgCbM1dnfpQ2sX1DRSzpPSppvpqN2ybVGQm43RplkC1_DREF57ESDkQW6OEO32MDTbWRnKeGo-2vTMwqGobGYnVidNvp0QrskRYePUngfEkyLsyhzs5gpYVks_A1ZRjAMxFZbcbow?purpose=inline', 'Qué hizo Manuela Beltrán'],
  ['20 de julio de 1810', 'Grito de Independencia', 'En Santa Fe, un conflicto relacionado con el préstamo de un florero provocó una protesta popular y llevó a la creación de una junta de gobierno.', 'https://images.openai.com/static-rsc-4/1dcpcUI7sBj0ri4TraTusAEGOG3HoHql7j_qGP-8i3ksl1JtM-dDRD3XfD4AavdraoMI16xXQBwldhU6bK7ZbPg7QVYSvwoYpRwYIish4zuxpGYtMAxMRORqrBixj9A-Hn7o_-uHPlY9ggIl1dVkUULvJDQYV-ByZiYH63RXDWo?purpose=inline', '20 de julio - Independencia de Colombia'],
  ['1810-1816', 'La Patria Boba', 'Los patriotas tuvieron desacuerdos sobre cómo organizar el nuevo gobierno. Estas divisiones debilitaron la lucha contra España.', 'https://images.openai.com/static-rsc-4/c8GgWrQRcbqBNb-RexJHC7JWCW6MYtTQW2RtAnwA9AiN5s5AIWL0IFCjtdQ99s4tnP-veP8fn_bdSN_1JI3EfTxtqLHtW650RSrFznEHwHwh4EiaWiSuA0DQjF8_E3HYRq8WEmCMOQY8XMMNljGl8qVtjLLLNwEtWbnHD4Bqf-o?purpose=inline', 'Storyboard sobre historia'],
  ['1815-1816', 'Reconquista española', 'Las tropas españolas, dirigidas por Pablo Morillo, retomaron el control de gran parte del territorio y persiguieron a los líderes independentistas.', 'https://images.openai.com/static-rsc-4/-xwdEWhyUnsxMXyPsW-BLGbP8cRrwpvKAPfaC5M66LKZp_yUZ-gWjcAEAPSQHvUj1rbx6QGiR5Tycfwu6KsjIGjq95Pgbk0EwJOa3J9qUdcghNW9W22MGW5Rder-l9sdLRFrAmnwEb3P1vNuh844ZtENZtOUFoEhZYHXiW1Jl0g?purpose=inline', 'Historia de Bogotá'],
  ['25 de julio de 1819', 'Batalla del Pantano de Vargas', 'El ejército libertador obtuvo una victoria importante durante la campaña que buscaba liberar la Nueva Granada.', 'https://images.openai.com/static-rsc-4/q9FHFin_Xb6KYTFJn0sYxG8PdtRQsfod5D5M74Ul_FqoybOCRwLAHAIJhkEmOEhU32CPSpdUEYOkOSLBH323PmwmaNoGp8e4Iq2umo4kqVzu4uB1xN8Rspli8L7hQWbvgurd5cFeKfa_JqXPYjawggti4zXEiykkUuOezmkJ-mA?purpose=inline', 'Batalla del Pantano de Vargas'],
  ['7 de agosto de 1819', 'Batalla de Boyacá', 'El ejército liderado por Simón Bolívar derrotó a las tropas realistas. Esta victoria fue decisiva para lograr la independencia de la Nueva Granada.', 'https://images.openai.com/static-rsc-4/njHckURVZ_nzWFksx6rR4hO-lX9oFrimKLB16rJuItbr_LMal9wdZ2WPLTWO9900jQb2pLyQbBthmlJ4t1guBr3kFMmID31-XnntJRbsY1PK5NmxmjTUtc3rTjFvQwQp7Jvoiu9IIpDXBCT3aXO0pEhaRFzFFsJn4Ms2La4LzjE?purpose=inline', 'Batalla de Boyacá'],
  ['17 de diciembre de 1819', 'Creación de la Gran Colombia', 'Se aprobó la creación de la República de Colombia, conocida como la Gran Colombia, que reunió territorios de las actuales Colombia, Venezuela, Ecuador y Panamá.', 'https://images.openai.com/static-rsc-4/bCXWav_IIcl3czehDm31uT3T2FwMgH4Rpn3FHrchjdxrh8uH0qCnE_s4RLNSQosI3Mz1HWX1ZW_bbnBNQk639iKzLzSV4tOCEBYjgSDOHSr_KULU3p060II2FadcEiiIAkX792wpdKjwkrTEstl7ZyzGYKwLuclKNzrnoIY7Od0?purpose=inline', 'Congreso de Angostura'],
  ['1824', 'Consolidación de la independencia', 'La victoria patriota en la batalla de Ayacucho debilitó decisivamente el dominio español en Sudamérica y contribuyó al fin del poder colonial en la región.', 'https://images.openai.com/static-rsc-4/0W1VVVkGYdx5F_70jlBlpAmirzLne8HUTZZ2j6tMjdmRo_OlfGKuK5Hs1IPDY82dNagO2wcfJlFlF5jl2-jqxBKY158wbwToFdiAlPbgBHGAN_OEAv-UtoREDEk0hFzrzjIS0eqU1-_Zf1vadqZYhB2m_4YkejaoHyLGQTfhMIQ?purpose=inline', 'Batalla de Ayacucho']
];

// Fondo ambiental global: parallax ligero sin bloquear contenido ni eventos de navegación.
const globalAtmosphere = document.querySelector('.global-atmosphere');
if (globalAtmosphere) {
  let atmosphereFrame = null;
  window.addEventListener('pointermove', (event) => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (atmosphereFrame) cancelAnimationFrame(atmosphereFrame);
    atmosphereFrame = requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 16;
      globalAtmosphere.style.setProperty('--atmosphere-x', `${x}px`);
      globalAtmosphere.style.setProperty('--atmosphere-y', `${y}px`);
      globalAtmosphere.style.transform = `translate3d(${x * -.25}px, ${y * -.25}px, 0)`;
    });
  }, { passive: true });
}

// Conexiones con elementos del HTML y estado de la sección seleccionada.
const shell = document.querySelector('#app');
const pageContent = document.querySelector('#page-content');
const homeContent = pageContent.innerHTML;
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
const themeToggle = document.querySelector('#theme-toggle');
let activeSection = 'Inicio';

// Convierte cada tema en la sección que debe abrirse al seleccionarlo.
function topicSection(label) {
  if (menu.some(([name]) => name === label)) return label;
  return ['Antecedentes', 'Hechos importantes', 'Consecuencias'].includes(label)
    ? 'Independencia'
    : 'Historia';
}

// Prepara los nombres y descripciones que puede encontrar el buscador.
function searchableContent() {
  return [
    ...menu.map(([title]) => ({ title, description: `Explora la sección ${title}.`, section: title })),
    ...quickTopics.map(([title, , description]) => ({ title, description, section: topicSection(title) }))
  ];
}

// Filtra la búsqueda y dibuja los botones con los resultados.
function renderSearchResults() {
  const query = searchInput.value;
  searchResults.replaceChildren();
  if (!query.trim()) {
    searchResults.className = '';
    return;
  }

  const results = searchableContent()
    .filter(({ title, description }) => `${title} ${description}`.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 6);

  if (results.length === 0) {
    searchResults.className = 'search-results empty';
    searchResults.textContent = 'No encontramos ese tema todavía.';
    return;
  }

  searchResults.className = 'search-results';
  for (const result of results) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.section = result.section;
    button.dataset.searchResult = '';

    const title = document.createElement('strong');
    title.textContent = result.title;
    const description = document.createElement('small');
    description.textContent = result.description;
    button.append(title, description);
    searchResults.append(button);
  }
}

// Funciones que construyen el HTML de cada tipo de contenido.
function renderCharacters() {
  return `<section class="character-experience" aria-label="Galería interactiva de personajes">
    <div class="character-preview" aria-live="polite">
      <span class="character-preview-label">Personaje destacado</span>
      <strong class="character-preview-name">${characters[0][0]}</strong>
    </div>
    <div class="character-viewport">
      <div class="character-track">
        ${characters.map(([name, description, imageUrl], index) => `
          <button type="button" class="character-card" data-character-index="${index}" aria-label="Ampliar a ${name}">
            <span class="character-card-glow" aria-hidden="true"></span>
            <img src="${imageUrl}" alt="Retrato de ${name}" loading="lazy">
            <span class="character-card-name">${name}</span>
          </button>`).join('')}
      </div>
    </div>
    <div class="character-focus" aria-hidden="true">
      <button type="button" class="character-return" aria-label="Devolver para mirar otro personaje">
        <span aria-hidden="true">←</span> Devolver y mirar otro
      </button>
      <div class="character-focus-art"><img src="${characters[0][2]}" alt="${characters[0][0]}"></div>
      <article class="character-focus-copy">
        <span class="eyebrow blue">Personaje histórico</span>
        <h2></h2>
        <p></p>
        <button type="button" class="character-read-button">
          <span class="character-read-icon" aria-hidden="true">▶</span>
          <span class="character-read-text">Leer</span>
        </button>
      </article>
    </div>
  </section>`;
}

function setupCharacterExperience() {
  const experience = pageContent.querySelector('.character-experience');
  if (!experience) return;

  const viewport = experience.querySelector('.character-viewport');
  const track = experience.querySelector('.character-track');
  const cards = [...experience.querySelectorAll('.character-card')];
  const previewName = experience.querySelector('.character-preview-name');
  const focus = experience.querySelector('.character-focus');
  const focusImage = focus.querySelector('.character-focus-art img');
  const focusName = focus.querySelector('h2');
  const focusDescription = focus.querySelector('p');
  const readButton = focus.querySelector('.character-read-button');
  const readIcon = readButton.querySelector('.character-read-icon');
  const readText = readButton.querySelector('.character-read-text');
  const returnButton = experience.querySelector('.character-return');
  let activeCharacter = null;
  let trackFrame = null;

  const stopCharacterReading = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    readButton.classList.remove('is-speaking');
    readIcon.textContent = '▶';
    readText.textContent = 'Leer';
  };

  const closeFocus = () => {
    stopCharacterReading();
    experience.classList.remove('is-focusing');
    focus.setAttribute('aria-hidden', 'true');
    cards.forEach((card) => card.classList.remove('is-selected'));
    track.style.transform = 'translate3d(0, 0, 0)';
    activeCharacter = null;
  };

  const openFocus = (index) => {
    stopCharacterReading();
    const [name, description, imageUrl] = characters[index];
    activeCharacter = { name, description, imageUrl };
    cards.forEach((card) => card.classList.toggle('is-selected', card.dataset.characterIndex === String(index)));
    focusImage.src = imageUrl;
    focusImage.dataset.characterIndex = String(index);
    focusImage.alt = `Retrato ampliado de ${name}`;
    focusName.textContent = name;
    focusDescription.textContent = description;
    focus.setAttribute('aria-hidden', 'false');
    experience.classList.add('is-focusing');
    readButton.setAttribute('aria-label', `Leer la biografía de ${name}`);
  };

  const updateTrack = (clientX) => {
    if (trackFrame) cancelAnimationFrame(trackFrame);
    trackFrame = requestAnimationFrame(() => {
      const bounds = viewport.getBoundingClientRect();
      const ratio = bounds.width ? (clientX - bounds.left) / bounds.width : 0.5;
      const offset = Math.min(Math.max(ratio, 0), 1);
      const travel = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      track.style.transform = `translate3d(${-travel * offset}px, 0, 0)`;
    });
  };

  cards.forEach((card) => {
    card.addEventListener('pointerenter', () => {
      if (experience.classList.contains('is-focusing')) return;
      cards.forEach((item) => item.classList.remove('is-previewed'));
      card.classList.add('is-previewed');
      const index = Number(card.dataset.characterIndex);
      previewName.textContent = characters[index][0];
    });
    card.addEventListener('click', () => openFocus(Number(card.dataset.characterIndex)));
  });

  viewport.addEventListener('pointermove', (event) => {
    if (window.matchMedia('(pointer: fine)').matches) updateTrack(event.clientX);
  });
  viewport.addEventListener('pointerleave', () => {
    if (!experience.classList.contains('is-focusing')) {
      track.style.transform = 'translate3d(0, 0, 0)';
    }
  });

  returnButton.addEventListener('click', closeFocus);

  readButton.addEventListener('click', () => {
    if (!activeCharacter || !('speechSynthesis' in window)) return;
    const speech = window.speechSynthesis;

    if (speech.speaking && !speech.paused) {
      speech.pause();
      readButton.classList.remove('is-speaking');
      readIcon.textContent = '▶';
      readText.textContent = 'Reanudar';
      readButton.setAttribute('aria-label', `Reanudar lectura de ${activeCharacter.name}`);
      return;
    }

    if (speech.paused) {
      speech.resume();
      readButton.classList.add('is-speaking');
      readIcon.textContent = 'Ⅱ';
      readText.textContent = 'Pausar';
      readButton.setAttribute('aria-label', `Pausar lectura de ${activeCharacter.name}`);
      return;
    }

    speech.cancel();
    const voice = new SpeechSynthesisUtterance(`${activeCharacter.name}. ${activeCharacter.description}`);
    voice.lang = 'es-CO';
    voice.rate = 0.9;
    voice.onstart = () => {
      readButton.classList.add('is-speaking');
      readIcon.textContent = 'Ⅱ';
      readText.textContent = 'Pausar';
      readButton.setAttribute('aria-label', `Pausar lectura de ${activeCharacter.name}`);
    };
    const reset = () => {
      readButton.classList.remove('is-speaking');
      readIcon.textContent = '▶';
      readText.textContent = 'Leer';
      readButton.setAttribute('aria-label', `Leer la biografía de ${activeCharacter.name}`);
    };
    voice.onend = reset;
    voice.onerror = reset;
    speech.speak(voice);
  });

  cards[0].classList.add('is-previewed');
}

function renderIndependence() {
  const routeHeight = Math.max(timeline.length * 330, 2640);
  const routeAtmospheres = ['warm', 'warm', 'warm', 'savanna', 'cold', 'victory', 'victory', 'victory'];
  return `<div class="independence-timeline independence-route" data-route-atmosphere="warm" aria-label="Mapa de ruta de la Independencia de Colombia">
    <div class="route-atmosphere-particles" aria-hidden="true"></div>
    <nav class="route-progress-map" aria-label="Etapas del recorrido">
      ${timeline.map(([date, title], index) => `<button type="button" class="route-progress-map-point" data-route-index="${index}" aria-label="Ir a ${title}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${date}</strong></button>`).join('')}
    </nav>
    <svg class="independence-route-svg" viewBox="0 0 700 ${routeHeight}" preserveAspectRatio="none" aria-hidden="true">
      <path class="independence-route-base" d="M350 60 C170 180 530 260 350 390 C150 520 550 600 350 730 C170 850 530 930 350 1060 C160 1190 540 1270 350 ${routeHeight - 60}"></path>
      <path class="independence-route-progress" d="M350 60 C170 180 530 260 350 390 C150 520 550 600 350 730 C170 850 530 930 350 1060 C160 1190 540 1270 350 ${routeHeight - 60}"></path>
      <circle class="independence-route-guide" cx="350" cy="60" r="12"></circle>
    </svg>
    <ol class="timeline-events independence-route-events">
      ${timeline.map(([date, title, description, imageUrl, imageAlt], index) => `
        <li class="independence-event independence-route-stage" data-route-stage="${index}" data-route-atmosphere="${routeAtmospheres[index]}" style="--event-index:${index}; --stage-top:${index * 330 + 70}px">
          <span class="timeline-node" aria-hidden="true"></span>
          <article class="timeline-card timeline-card-button" data-route-open="${index}" role="button" tabindex="0" aria-label="Ampliar ${title}">
            <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
            <div class="independence-event-copy">
              <span class="eyebrow blue">${date}</span>
              <h2>${title}</h2>
              <p>${description}</p>
              <button type="button" class="timeline-read-button" data-timeline-read="${index}" aria-label="Leer ${title}">
                <span class="timeline-read-icon" aria-hidden="true">▶</span>
                <span class="timeline-read-text">Leer</span>
              </button>
            </div>
          </article>
        </li>`).join('')}
    </ol>
    <section class="independence-route-focus" aria-hidden="true">
      <button type="button" class="independence-route-return" aria-label="Volver y mirar otro"><span aria-hidden="true">←</span> Volver y mirar otro</button>
      <div class="independence-route-focus-art"><img src="${timeline[0][3]}" alt="${timeline[0][4]}"></div>
      <article class="independence-route-focus-copy">
        <span class="eyebrow blue"></span>
        <h2></h2>
        <p></p>
        <button type="button" class="timeline-read-button independence-route-read"><span class="timeline-read-icon" aria-hidden="true">▶</span><span class="timeline-read-text">Leer</span></button>
      </article>
    </section>
    <button type="button" class="timeline-auto-button" aria-label="Iniciar recorrido automático" aria-pressed="false">
      <span class="timeline-auto-icon" aria-hidden="true">▶</span>
      <span class="timeline-auto-text">Recorrido automático</span>
    </button>
  </div>`;
}

function setupIndependenceTimeline() {
  if (window.__independenceTimelineCleanup) window.__independenceTimelineCleanup();

  const timelineContainer = pageContent.querySelector('.independence-timeline');
  if (!timelineContainer) return;

  const events = [...timelineContainer.querySelectorAll('.independence-event')];
  const progress = timelineContainer.querySelector('.timeline-axis-progress, .independence-route-progress');
  const guide = timelineContainer.querySelector('.timeline-guide, .independence-route-guide');
  const axis = timelineContainer.querySelector('.timeline-axis, .independence-route-svg');
  const routeMap = timelineContainer.classList.contains('independence-route') ? timelineContainer : null;
  const routeProgressPoints = [...timelineContainer.querySelectorAll('.route-progress-map-point')];
  const autoButton = timelineContainer.querySelector('.timeline-auto-button');
  const autoText = timelineContainer.querySelector('.timeline-auto-text');
  const autoIcon = timelineContainer.querySelector('.timeline-auto-icon');
  let autoTimer = null;
  let autoIndex = 0;
  let scrollFrame = null;

  const updateTimeline = () => {
    scrollFrame = null;
    const axisBounds = axis?.getBoundingClientRect?.() || timelineContainer.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.58;
    const axisHeight = Math.max(axisBounds.height, 1);
    const progressValue = Math.min(Math.max((viewportAnchor - axisBounds.top) / axisHeight, 0), 1);

    if (progress.classList.contains('timeline-axis-progress')) {
      progress.style.height = `${progressValue * 100}%`;
      guide.style.top = `${progressValue * 100}%`;
    } else {
      const length = progress.getTotalLength?.() || 2200;
      progress.style.strokeDasharray = String(length);
      progress.style.strokeDashoffset = String(length * (1 - progressValue));
      const routeHeight = Number(axis.viewBox?.baseVal?.height || 2640);
      guide.setAttribute('cy', String(60 + progressValue * (routeHeight - 120)));
    }

    let closestIndex = 0;
    let closestDistance = Infinity;
    events.forEach((event, index) => {
      const node = event.querySelector('.timeline-node');
      const nodeBounds = node?.getBoundingClientRect() || event.getBoundingClientRect();
      const nodePosition = nodeBounds.top + nodeBounds.height / 2;
      const isActive = nodePosition <= viewportAnchor;
      event.classList.toggle('is-active', isActive);

      const distance = Math.abs(nodePosition - viewportAnchor);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (routeMap) {
      routeMap.dataset.routeAtmosphere = events[closestIndex]?.dataset.routeAtmosphere || 'warm';
      routeProgressPoints.forEach((point, index) => point.classList.toggle('is-current', index === closestIndex));
    }
  };

  const requestTimelineUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(updateTimeline);
  };

  const stopAutoTour = () => {
    window.clearInterval(autoTimer);
    autoTimer = null;
    autoButton.setAttribute('aria-pressed', 'false');
    autoButton.setAttribute('aria-label', 'Iniciar recorrido automático');
    autoText.textContent = 'Recorrido automático';
    autoIcon.textContent = '▶';
  };

  const startAutoTour = () => {
    autoIndex = Math.min(autoIndex, events.length - 1);
    const moveToNextEvent = () => {
      if (autoIndex >= events.length) {
        stopAutoTour();
        return;
      }
      events[autoIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
      autoIndex += 1;
    };

    moveToNextEvent();
    autoTimer = window.setInterval(moveToNextEvent, 2600);
    autoButton.setAttribute('aria-pressed', 'true');
    autoButton.setAttribute('aria-label', 'Pausar recorrido automático');
    autoText.textContent = 'Pausar recorrido';
    autoIcon.textContent = 'Ⅱ';
  };

  const routeFocus = timelineContainer.querySelector('.independence-route-focus');
  const routeFocusImage = routeFocus?.querySelector('.independence-route-focus-art img');
  const routeFocusDate = routeFocus?.querySelector('.eyebrow');
  const routeFocusTitle = routeFocus?.querySelector('h2');
  const routeFocusDescription = routeFocus?.querySelector('p');
  const routeFocusReturn = routeFocus?.querySelector('.independence-route-return');
  const routeFocusRead = routeFocus?.querySelector('.independence-route-read');
  let routeFocusedIndex = null;

  const closeRouteFocus = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    timelineContainer.classList.remove('is-focusing-route');
    routeFocus?.setAttribute('aria-hidden', 'true');
    routeFocusedIndex = null;
  };

  const openRouteFocus = (index) => {
    const [date, title, description, imageUrl, imageAlt] = timeline[index];
    routeFocusedIndex = index;
    routeFocusImage.src = imageUrl;
    routeFocusImage.alt = imageAlt;
    routeFocusDate.textContent = date;
    routeFocusTitle.textContent = title;
    routeFocusDescription.textContent = description;
    routeFocusRead.setAttribute('aria-label', `Leer ${title}`);
    routeFocus.setAttribute('aria-hidden', 'false');
    timelineContainer.classList.add('is-focusing-route');
  };

  timelineContainer.querySelectorAll('[data-route-open]').forEach((card) => {
    const open = (event) => {
      if (event?.target?.closest?.('.timeline-read-button')) return;
      openRouteFocus(Number(card.dataset.routeOpen));
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });

  routeFocusReturn?.addEventListener('click', closeRouteFocus);

  routeFocusRead?.addEventListener('click', () => {
    if (routeFocusedIndex === null || !('speechSynthesis' in window)) return;
    const speech = window.speechSynthesis;
    const [date, title, description] = timeline[routeFocusedIndex];
    const readText = routeFocusRead.querySelector('.timeline-read-text');
    const readIcon = routeFocusRead.querySelector('.timeline-read-icon');

    if (speech.speaking && !speech.paused) {
      speech.pause();
      readText.textContent = 'Reanudar';
      readIcon.textContent = '▶';
      return;
    }
    if (speech.paused) {
      speech.resume();
      readText.textContent = 'Pausar';
      readIcon.textContent = 'Ⅱ';
      return;
    }

    speech.cancel();
    const voice = new SpeechSynthesisUtterance(`${date}. ${title}. ${description}`);
    voice.lang = 'es-CO';
    voice.rate = 0.9;
    voice.onstart = () => { readText.textContent = 'Pausar'; readIcon.textContent = 'Ⅱ'; };
    const reset = () => { readText.textContent = 'Leer'; readIcon.textContent = '▶'; };
    voice.onend = reset;
    voice.onerror = reset;
    speech.speak(voice);
  });

  routeProgressPoints.forEach((point, index) => {
    point.addEventListener('click', () => {
      events[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  autoButton.addEventListener('click', () => {
    if (autoTimer) {
      stopAutoTour();
    } else {
      autoIndex = 0;
      startAutoTour();
    }
  });

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-active');
        });
      }, { rootMargin: '-10% 0px -15%' , threshold: 0.18 })
    : null;

  events.forEach((event) => observer?.observe(event));

  window.addEventListener('scroll', requestTimelineUpdate, { passive: true });
  document.addEventListener('scroll', requestTimelineUpdate, { passive: true, capture: true });
  window.addEventListener('resize', requestTimelineUpdate);
  window.addEventListener('pagehide', stopAutoTour, { once: true });

  function resetTimelineReadButtons(exceptButton) {
    timelineContainer.querySelectorAll('.timeline-read-button').forEach((button) => {
      if (button === exceptButton) return;
      button.classList.remove('is-speaking');
      button.setAttribute('aria-label', `Leer ${button.closest('.timeline-card').querySelector('h2').textContent}`);
      button.querySelector('.timeline-read-icon').textContent = '▶';
      button.querySelector('.timeline-read-text').textContent = 'Leer';
    });
  }

  timelineContainer.querySelectorAll('.timeline-read-button').forEach((button) => {
    button.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) return;

      const speech = window.speechSynthesis;
      const eventCard = button.closest('.independence-event');
      const eventTitle = eventCard.querySelector('h2').textContent;
      const eventDate = eventCard.querySelector('.eyebrow').textContent;
      const eventDescription = eventCard.querySelector('.independence-event-copy p').textContent;

      if (button.classList.contains('is-speaking') && speech.speaking) {
        if (speech.paused) {
          speech.resume();
          button.classList.add('is-speaking');
          button.setAttribute('aria-label', `Pausar lectura de ${eventTitle}`);
          button.querySelector('.timeline-read-icon').textContent = 'Ⅱ';
          button.querySelector('.timeline-read-text').textContent = 'Pausar';
        } else {
          speech.pause();
          button.setAttribute('aria-label', `Reanudar lectura de ${eventTitle}`);
          button.querySelector('.timeline-read-icon').textContent = '▶';
          button.querySelector('.timeline-read-text').textContent = 'Reanudar';
        }
        return;
      }

      speech.cancel();
      resetTimelineReadButtons(button);

      const voice = new SpeechSynthesisUtterance(`${eventDate}. ${eventTitle}. ${eventDescription}`);
      voice.lang = 'es-CO';
      voice.rate = 0.9;
      voice.onstart = () => {
        button.classList.add('is-speaking');
        button.setAttribute('aria-label', `Pausar lectura de ${eventTitle}`);
        button.querySelector('.timeline-read-icon').textContent = 'Ⅱ';
        button.querySelector('.timeline-read-text').textContent = 'Pausar';
      };
      voice.onend = () => {
        button.classList.remove('is-speaking');
        button.setAttribute('aria-label', `Leer ${eventTitle}`);
        button.querySelector('.timeline-read-icon').textContent = '▶';
        button.querySelector('.timeline-read-text').textContent = 'Leer';
      };
      voice.onerror = voice.onend;
      speech.speak(voice);
    });
  });

  window.__independenceTimelineCleanup = () => {
    observer?.disconnect();
    stopAutoTour();
    window.removeEventListener('scroll', requestTimelineUpdate);
    document.removeEventListener('scroll', requestTimelineUpdate, true);
    window.removeEventListener('resize', requestTimelineUpdate);
    window.removeEventListener('pagehide', stopAutoTour);
  };

  updateTimeline();
}

function renderReadingSection(section) {
  const heading = section === 'Historia'
    ? 'Una historia para contar'
    : section === 'Causas'
      ? '¿Qué provocó el cambio?'
      : 'Desarrollo de la Independencia de Colombia 🇨🇴';

  if (section === 'Historia') {
    return `<section class="history-experience" aria-label="Presentación animada de la historia">
      <div class="history-puppet-stage">
        <div class="history-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <button type="button" class="history-puppet history-puppet-zone" aria-label="Leer la escena actual">
          <span class="history-puppet-shadow" aria-hidden="true"></span>
          <img src="https://i.pinimg.com/originals/4a/b2/df/4ab2df4037221e9eacc2c3726195514d.png" alt="Simón Bolívar narrando la historia">
        </button>
        <span class="history-puppet-name">Simón Bolívar</span>
      </div>
      <article class="history-narration-card">
        <div class="history-scene-heading">
          <span class="history-scene-count">Escena 1 de 4</span>
          <h2 class="history-scene-title"></h2>
        </div>
        <div class="history-narrated-text" aria-live="polite"></div>
        <div class="history-facts" aria-label="Datos destacados">
          <span><strong>20 JUL</strong>1810</span>
          <span><strong>Florero</strong>de Llorente</span>
          <span><strong>Junta</strong>de gobierno</span>
        </div>
        <div class="history-controls">
          <button type="button" class="history-control history-prev" aria-label="Escena anterior"><span aria-hidden="true">←</span><span>Anterior</span></button>
          <button type="button" class="history-read" aria-label="Leer en voz alta"><span class="history-read-icon" aria-hidden="true">▶</span><span class="history-read-text">Leer en voz alta</span></button>
          <button type="button" class="history-control history-next" aria-label="Escena siguiente"><span>Siguiente</span><span aria-hidden="true">→</span></button>
        </div>
      </article>
    </section>`;
  }

  if (section === 'Desarrollo') {
    const phases = [
      ['Momento 01', '1810', 'Primeras juntas y autonomía', 'Después del 20 de julio, varias ciudades formaron juntas y comenzaron a tomar decisiones propias frente a la autoridad española.', 'https://i.ibb.co/JRY7qy5d/descarga-14.jpg', 'expectant'],
      ['Momento 02', '1810-1816', 'La Patria Boba', 'Las diferencias entre federalistas y centralistas debilitaron al nuevo gobierno y retrasaron la consolidación de la independencia.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbD_Zhg6oDkHLXrrl1QPeGdwMEffDjzbnQX_Y6U1RSA&s=10', 'tension'],
      ['Momento 03', '1815-1816', 'Reconquista española', 'Pablo Morillo recuperó gran parte del territorio y persiguió a líderes y instituciones patriotas, generando una etapa de crisis profunda.', 'https://i.ibb.co/RdnFvgP/La-Reconquista-Espa-ola-qu-fue-etapas-y-consecuencias-711-1492-Huellas-de-la-Historia.jpg', 'crisis'],
      ['Momento 04', '1819', 'Campaña Libertadora', 'Simón Bolívar organizó el avance desde los Llanos hacia los Andes para enfrentar al ejército realista y liberar Nueva Granada.', 'https://images.openai.com/static-rsc-4/njHckURVZ_nzWFksx6rR4hO-lX9oFrimKLB16rJuItbr_LMal9wdZ2WPLTWO9900jQb2pLyQbBthmlJ4t1guBr3kFMmID31-XnntJRbsY1PK5NmxmjTUtc3rTjFvQwQp7Jvoiu9IIpDXBCT3aXO0pEhaRFzFFsJn4Ms2La4LzjE?purpose=inline', 'advance'],
      ['Momento 05', '7 AGO 1819', 'Batalla de Boyacá', 'La victoria patriota abrió el camino hacia la consolidación de la Nueva Granada independiente y de la futura Gran Colombia.', 'https://i.ibb.co/nstpSpM3/BATALLA-DE-BOYAC-Luego-de-varios-a-os-de-luchas.jpg', 'triumph']
    ];

    return `<section class="development-experience" data-development-mood="expectant" aria-label="Momentos del desarrollo de la independencia">
      <div class="development-puppet-stage">
        <div class="development-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <button type="button" class="development-puppet" aria-label="Leer el momento actual">
          <span class="development-puppet-shadow" aria-hidden="true"></span>
          <img src="https://i.pinimg.com/originals/4a/b2/df/4ab2df4037221e9eacc2c3726195514d.png" alt="Muñeco presentando el desarrollo histórico">
        </button>
        <span class="development-puppet-name">Guía histórico</span>
      </div>
      <article class="development-scene">
        <div class="development-scene-heading"><span class="development-phase-label">Momento 01</span><strong class="development-year">1810</strong></div>
        <h2 class="development-title"></h2>
        <div class="development-image-wrap"><img class="development-image" src="" alt=""><span class="development-image-glow" aria-hidden="true"></span></div>
        <p class="development-description"></p>
        <div class="development-scene-controls">
          <button type="button" class="development-prev" aria-label="Momento anterior"><span aria-hidden="true">←</span> Anterior</button>
          <button type="button" class="development-read" aria-label="Leer este momento"><span class="development-read-icon" aria-hidden="true">▶</span><span class="development-read-text">Leer</span></button>
          <button type="button" class="development-next" aria-label="Siguiente momento">Siguiente <span aria-hidden="true">→</span></button>
        </div>
      </article>
      <nav class="development-timeline" aria-label="Momentos del desarrollo">
        ${phases.map(([phase, date, title], index) => `<button type="button" class="development-point${index === 0 ? ' is-active' : ''}" data-development-index="${index}" aria-label="Ir a ${title}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${date}</strong><small>${title}</small></button>`).join('')}
      </nav>
      <div class="development-navigation">
        <button type="button" class="development-prev" aria-label="Momento anterior"><span aria-hidden="true">←</span> Anterior</button>
        <span class="development-progress"><strong>1</strong> / ${phases.length}</span>
        <button type="button" class="development-next" aria-label="Siguiente momento">Siguiente <span aria-hidden="true">→</span></button>
      </div>
    </section>`;
  }

  if (section === 'Causas') {
    const causeCards = [
      ['Causa 01', 'Política', 'Exclusión de los criollos', 'Los criollos nacidos en América tenían menos acceso a los cargos políticos y administrativos que los españoles nacidos en la Península.', 'Descontento político'],
      ['Causa 02', 'Economía', 'Restricciones económicas', 'El monopolio comercial imponía controles estrictos al comercio de las colonias y limitaba su libre desarrollo económico.', 'Dependencia comercial'],
      ['Causa 03', 'Economía', 'Altos impuestos', 'Los habitantes debían pagar numerosos tributos mientras tenían poca participación en las decisiones públicas.', 'Malestar económico'],
      ['Causa 04', 'Ideas', 'Influencia de la Ilustración', 'Las ideas de libertad, igualdad y soberanía popular difundidas por la Ilustración transformaron la manera de pensar.', 'Cambio de pensamiento'],
      ['Causa 05', 'Ejemplos', 'Revoluciones independientes', 'Los procesos de Estados Unidos y Francia demostraron que era posible rechazar gobiernos absolutos y construir nuevas naciones.', 'Inspiración independentista'],
      ['Causa 06', 'Política', 'Crisis de la monarquía española', 'La invasión napoleónica creó un vacío de poder y permitió que las provincias buscaran formas locales de gobierno.', 'Autonomía territorial'],
      ['Causa 07', 'Social', 'Desigualdad social', 'Las diferencias económicas y sociales hicieron crecer la idea de que el territorio debía gobernarse para sus propios habitantes.', 'Unidad contra la desigualdad'],
      ['Causa 08', 'Histórico', 'Memorial de Agravios', 'Las quejas recogidas por líderes criollos expresaron demandas concretas ante la Corona y prepararon el movimiento independentista.', 'Organización del descontento'],
      ['Causa 09', 'Desencadenante', 'El Grito del 20 de julio', 'El incidente del florero de Llorente movilizó a la población y condujo a la formación de una junta de gobierno.', 'Inicio del proceso'],
      ['Causa 10', 'Liderazgo', 'Liderazgo independentista', 'La participación de líderes como Antonio Nariño y Simón Bolívar fortaleció la organización política y militar del movimiento.', 'Nuevas decisiones']
    ];

    return `<section class="causes-experience" aria-label="Presentación apilada de las causas">
      <div class="causes-puppet-stage">
        <div class="causes-aura" aria-hidden="true"><span></span><span></span><span></span></div>
        <button type="button" class="causes-puppet" aria-label="Presentar la causa activa">
          <span class="causes-puppet-shadow" aria-hidden="true"></span>
          <img src="https://i.pinimg.com/originals/4a/b2/df/4ab2df4037221e9eacc2c3726195514d.png" alt="Muñeco presentando las causas">
        </button>
        <span class="causes-puppet-name">Tu guía histórico</span>
      </div>
      <div class="causes-stack-area">
        <div class="causes-stack-count"><span>Causas de la Independencia</span><strong>1 / ${causeCards.length}</strong></div>
        <div class="causes-stack">
          ${causeCards.map(([number, type, title, description, effect], index) => `
            <article class="cause-stack-card${index === 0 ? ' is-active' : ''}" data-cause-index="${index}" aria-hidden="${index === 0 ? 'false' : 'true'}">
              <div class="cause-card-top"><span>${number}</span><strong>${type}</strong></div>
              <h2>${title}</h2>
              <p class="cause-card-description"></p>
              <div class="cause-effect"><span>Efecto</span><strong>${effect}</strong></div>
              <span class="cause-card-full-text" hidden>${description}</span>
            </article>`).join('')}
        </div>
        <div class="causes-controls">
          <button type="button" class="cause-control causes-prev" aria-label="Causa anterior"><span aria-hidden="true">←</span> Anterior</button>
          <button type="button" class="cause-read" aria-label="Leer causa activa"><span class="cause-read-icon" aria-hidden="true">▶</span><span class="cause-read-text">Leer causa</span></button>
          <button type="button" class="cause-control causes-next" aria-label="Causa siguiente">Siguiente <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </section>`;
  }

  return `<div class="reading-layout">
    <article class="reading-card">
      <h2>${section === 'Causas' ? '10 causas de la Independencia' : heading}</h2>
      ${readingCopy[section].split('\n\n').map((paragraph) => section === 'Causas'
        ? `<p class="cause-item">${paragraph.replace(/^(\d+\.\s[^:]+:)/, '<strong>$1</strong>')}</p>`
        : `<p>${paragraph}</p>`).join('')}
    </article>
    <div class="puppet-card">
      <span class="placeholder-tag">SIMÓN BOLÍVAR</span>
      <button type="button" class="puppet-zone" aria-label="Iniciar lectura">
        <img src="https://i.pinimg.com/originals/4a/b2/df/4ab2df4037221e9eacc2c3726195514d.png" alt="Personaje lector">
        <span class="puppet-label">Toca para escuchar</span>
      </button>
      <p>Toca para iniciar, pausar o reanudar la lectura.</p>
    </div>
  </div>`;
}

function renderGames() {
  const isLocalFile = window.location.protocol === 'file:';
  const games = [
    {
      title: 'Escape Room Museo',
      url: 'https://view.genially.com/6acd3a40e4e66313fec06b80'
    },
    {
      title: 'Dragón de la Mazmorra',
      url: 'https://view.genially.com/6aa02b3228cedeb7a91b66cb'
    },
    {
      title: 'La Mazmorra del Dragón',
      url: './juego_constitucion.html'
    }
  ];

  return `<div class="genially-games">${games.map((game, index) => `
    <section class="genially-game" aria-labelledby="genially-game-title-${index + 1}">
      <h2 id="genially-game-title-${index + 1}">${game.title}</h2>
      <div class="genially-game-viewport">
            <iframe
              class="genially-game-frame"
              src="${game.url}"
              title="${game.title} — juego interactivo de Genially"
              width="1200"
              height="675"
              allow="autoplay; clipboard-write"
              allowfullscreen
              scrolling="yes"
              loading="eager"></iframe>
      </div>
      <a class="genially-game-launch" href="${game.url}" target="_blank" rel="noopener noreferrer">
        ${game.url.startsWith('./')
          ? 'Abrir juego a pantalla completa ↗'
          : isLocalFile
            ? 'Jugar ahora en Genially ↗'
            : 'Abrir en Genially si no carga aquí ↗'}
      </a>
    </section>`).join('')}
  </div>`;
}

function renderResources(section) {
  if (section === 'Videos') {
    return `<div class="videos-list">
      <div class="video-card">
        <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/V-bp83U8odU" title="Video sobre la Independencia de Colombia" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div>
        <a class="video-launch" href="https://youtu.be/V-bp83U8odU?si=_zb4x6sXsW4fhtaO" target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a>
      </div>
      <div class="video-card">
        <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/JCwLiGYWgQI" title="Video sobre la Independencia de Colombia" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe></div>
        <a class="video-launch" href="https://youtu.be/JCwLiGYWgQI?si=qKFsVCpxWshdlbrz" target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a>
      </div>
    </div>`;
  }

  return `<div class="resource-grid">${['Espacio para tu imagen', 'Tu video o narración', 'Actividad para explorar'].map((item) => `
    <div class="resource-card"><span>✦</span><strong>${item}</strong><p>Agrega aquí el contenido de la sección ${section.toLowerCase()}.</p></div>`).join('')}
  </div>`;
}

// Reemplaza el contenido central por la sección elegida.
function renderSection(section) {
  if (section === 'Inicio') {
    pageContent.innerHTML = homeContent;
    pageContent.classList.add('home-page');
    return;
  }

  pageContent.classList.remove('home-page');
  const isCharacters = section === 'Personajes';
  const isGames = section === 'Juegos';
  const isHistory = section === 'Historia';
  const isCauses = section === 'Causas';
  const isIndependence = section === 'Independencia';
  const isDevelopment = section === 'Desarrollo';
  const isVideos = section === 'Videos';
  const isReading = ['Historia', 'Causas', 'Desarrollo'].includes(section);
  const contents = isReading
    ? renderReadingSection(section)
    : isCharacters
      ? renderCharacters()
      : section === 'Independencia'
        ? renderIndependence()
      : section === 'Juegos'
        ? renderGames()
        : renderResources(section);
  const sectionDescription = section === 'Causas'
    ? 'Conoce los factores políticos, económicos e ideológicos que impulsaron el proceso de independencia.'
    : section === 'Independencia'
      ? 'Recorre los acontecimientos que marcaron el camino hacia la independencia.'
      : section === 'Desarrollo'
        ? 'Sigue las etapas y los acontecimientos principales del proceso de independencia.'
        : 'Este espacio está listo para que agregues tu contenido, tus imágenes y tus actividades.';

  pageContent.innerHTML = `<section class="section-view">
    <div class="section-heading${isCharacters ? ' section-heading-banner' : ''}${isGames ? ' section-heading-games' : ''}">
      ${isCharacters
        ? '<img src="https://i.ibb.co/7ds29fjL/personajes.png" alt="Banner de personajes">'
        : isVideos
          ? '<img class="section-heading-banner-image" src="https://i.ibb.co/ppQ1Yf0/vudweoo.jpg" alt="Imagen de la sección Juegos">'
        : isGames
          ? '<img class="section-heading-banner-image" src="https://i.ibb.co/ks20CxNj/juegoos.jpg" alt="Banner de la sección Juegos">'
          
          

        : `${isHistory || isCauses || isIndependence || isDevelopment
          ? `<img class="section-heading-banner-image ${isIndependence ? 'section-header-independence' : isDevelopment ? 'section-header-development' : ''}" src="${isCauses
            ? 'https://i.ibb.co/WCrW1Qv/Whats-App-Image-2026-10-18-at-7-55-31-PM.jpg'
            : isIndependence
              ? 'https://i.ibb.co/gFLG5Rnk/Whats-App-Image-2026-11-22-at-8-18-57-PM.jpg'
              : isDevelopment
                ? 'https://i.ibb.co/fY07Z3v8/Whats-App-Image-2026-11-22-at-8-18-56-PM.jpg'
                : 'https://i.ibb.co/xtcDQk4n/Whats-App-Image-2026-10-18-at-7-55-32-PM.jpg'}" alt="Imagen de bienvenida para la sección ${section}">`
          : `<h1>${section}</h1><p>${sectionDescription}</p>`}`}
    </div>
    ${contents}
  </section>`;

  if (section === 'Independencia') setupIndependenceTimeline();
  if (section === 'Personajes') setupCharacterExperience();

  if (section === 'Historia') setupHistoryExperience();
  if (section === 'Causas') setupCausesExperience();
  if (section === 'Desarrollo') setupDevelopmentExperience();

  const puppet = pageContent.querySelector('.puppet-zone');
  if (puppet) {
    const image = puppet.querySelector('img');
    image.addEventListener('error', () => { image.style.display = 'none'; }, { once: true });
    puppet.addEventListener('click', readSectionAloud);
  }
}

// Actualiza el menú activo y lleva la vista hasta el contenido.
function selectSection(section) {
  if (!menu.some(([name]) => name === section)) return;
  shell.classList.toggle('game-mode', section === 'Juegos');
  if (activeSection !== section) {
    activeSection = section;
    renderSection(section);
  }

  for (const button of shell.querySelectorAll('.main-nav button')) {
    button.classList.toggle('active', button.dataset.section === section);
  }
  document.querySelector('#contenido').scrollIntoView({ block: 'start' });
}

// Usa la voz del navegador para iniciar, pausar o reanudar la lectura.
function setupHistoryExperience() {
  const experience = pageContent.querySelector('.history-experience');
  if (!experience) return;

  const scenes = readingCopy.Historia.split('\n\n').filter(Boolean);
  const sceneTitles = [
    'El florero de Llorente',
    'La protesta en Santafé',
    'La creación de la Junta',
    'El Acta del 20 de Julio'
  ];
  const puppetStage = experience.querySelector('.history-puppet-stage');
  const puppet = experience.querySelector('.history-puppet');
  const count = experience.querySelector('.history-scene-count');
  const title = experience.querySelector('.history-scene-title');
  const text = experience.querySelector('.history-narrated-text');
  const prev = experience.querySelector('.history-prev');
  const next = experience.querySelector('.history-next');
  const readButton = experience.querySelector('.history-read');
  const readIcon = experience.querySelector('.history-read-icon');
  const readText = experience.querySelector('.history-read-text');
  let sceneIndex = 0;

  const renderScene = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    experience.classList.remove('is-reading');
    puppet.classList.remove('is-speaking');
    readIcon.textContent = '▶';
    readText.textContent = 'Leer en voz alta';
    count.textContent = `Escena ${sceneIndex + 1} de ${scenes.length}`;
    title.textContent = sceneTitles[sceneIndex];

    const sceneText = scenes[sceneIndex];
    text.innerHTML = sceneText.split(/(\s+)/).map((part, index) => {
      if (/^\s+$/.test(part)) return part;
      const offset = sceneText.indexOf(part, index ? sceneText.indexOf(part) : 0);
      return `<span class="history-word" data-word-offset="${offset}">${part}</span>`;
    }).join('');

    text.classList.remove('is-reading');
    prev.disabled = sceneIndex === 0;
    next.disabled = sceneIndex === scenes.length - 1;
    experience.classList.remove('scene-enter-left', 'scene-enter-right');
    void experience.offsetWidth;
    experience.classList.add(sceneIndex % 2 ? 'scene-enter-right' : 'scene-enter-left');
  };

  prev.addEventListener('click', () => {
    if (sceneIndex > 0) {
      sceneIndex -= 1;
      renderScene();
    }
  });
  next.addEventListener('click', () => {
    if (sceneIndex < scenes.length - 1) {
      sceneIndex += 1;
      renderScene();
    }
  });

  puppetStage.addEventListener('pointermove', (event) => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const bounds = puppetStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    puppet.style.setProperty('--puppet-tilt-x', `${y * -8}deg`);
    puppet.style.setProperty('--puppet-tilt-y', `${x * 10}deg`);
  });
  puppetStage.addEventListener('pointerleave', () => {
    puppet.style.setProperty('--puppet-tilt-x', '0deg');
    puppet.style.setProperty('--puppet-tilt-y', '0deg');
  });

  readButton.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return;
    const speech = window.speechSynthesis;

    if (speech.speaking && !speech.paused) {
      speech.pause();
      readText.textContent = 'Reanudar';
      readIcon.textContent = '▶';
      return;
    }
    if (speech.paused) {
      speech.resume();
      readText.textContent = 'Pausar';
      readIcon.textContent = 'Ⅱ';
      return;
    }

    speech.cancel();
    const voice = new SpeechSynthesisUtterance(scenes[sceneIndex]);
    voice.lang = 'es-CO';
    voice.rate = 0.9;
    text.classList.add('is-reading');

    voice.onstart = () => {
      experience.classList.add('is-reading');
      puppet.classList.add('is-speaking');
      readText.textContent = 'Pausar';
      readIcon.textContent = 'Ⅱ';
    };
    voice.onboundary = (event) => {
      const words = [...text.querySelectorAll('.history-word')];
      words.forEach((word) => {
        const offset = Number(word.dataset.wordOffset);
        word.classList.toggle('is-read', offset <= event.charIndex);
        word.classList.toggle('is-current', offset <= event.charIndex && offset + word.textContent.length >= event.charIndex);
      });
    };
    const reset = () => {
      experience.classList.remove('is-reading');
      puppet.classList.remove('is-speaking');
      text.classList.remove('is-reading');
      text.querySelectorAll('.history-word').forEach((word) => word.classList.remove('is-read', 'is-current'));
      readText.textContent = 'Leer en voz alta';
      readIcon.textContent = '▶';
    };
    voice.onend = reset;
    voice.onerror = reset;
    speech.speak(voice);
  });

  puppet.addEventListener('click', () => readButton.click());
  renderScene();
}

function setupCausesExperience() {
  const experience = pageContent.querySelector('.causes-experience');
  if (!experience) return;

  const cards = [...experience.querySelectorAll('.cause-stack-card')];
  const prev = experience.querySelector('.causes-prev');
  const next = experience.querySelector('.causes-next');
  const readButton = experience.querySelector('.cause-read');
  const readIcon = experience.querySelector('.cause-read-icon');
  const readText = experience.querySelector('.cause-read-text');
  const count = experience.querySelector('.causes-stack-count strong');
  const puppetStage = experience.querySelector('.causes-puppet-stage');
  const puppet = experience.querySelector('.causes-puppet');
  let causeIndex = 0;

  const splitWords = (text) => text.split(/(\s+)/).map((part, index) => {
    if (/^\s+$/.test(part)) return part;
    const offset = text.indexOf(part, index ? text.indexOf(part) : 0);
    return `<span class="cause-word" data-word-offset="${offset}">${part}</span>`;
  }).join('');

  const renderCauseStack = (direction = 0) => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    experience.classList.remove('is-reading');
    puppet.classList.remove('is-speaking');
    readIcon.textContent = '▶';
    readText.textContent = 'Leer causa';

    cards.forEach((card, index) => {
      const offset = index - causeIndex;
      card.className = 'cause-stack-card';
      card.setAttribute('aria-hidden', 'true');

      if (offset === 0) {
        card.classList.add('is-active');
        card.setAttribute('aria-hidden', 'false');
        const description = card.querySelector('.cause-card-full-text').textContent;
        const descriptionNode = card.querySelector('.cause-card-description');
        descriptionNode.innerHTML = splitWords(description);
        if (direction > 0) card.classList.add('enters-from-right');
        if (direction < 0) card.classList.add('enters-from-left');
      } else if (offset > 0 && offset < 4) {
        card.classList.add('is-behind');
        card.style.setProperty('--stack-offset', String(offset));
      } else if (offset < 0) {
        card.classList.add('is-passed');
      }
    });

    count.textContent = `${causeIndex + 1} / ${cards.length}`;
    prev.disabled = causeIndex === 0;
    next.disabled = causeIndex === cards.length - 1;
    puppet.classList.remove('cause-impulse-left', 'cause-impulse-right');
    void experience.offsetWidth;
    puppet.classList.add(direction > 0 ? 'cause-impulse-right' : direction < 0 ? 'cause-impulse-left' : '');
  };

  prev.addEventListener('click', () => {
    if (causeIndex > 0) {
      causeIndex -= 1;
      renderCauseStack(-1);
    }
  });

  next.addEventListener('click', () => {
    if (causeIndex < cards.length - 1) {
      causeIndex += 1;
      renderCauseStack(1);
    }
  });

  puppetStage.addEventListener('pointermove', (event) => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const bounds = puppetStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    puppet.style.setProperty('--cause-tilt-x', `${y * -8}deg`);
    puppet.style.setProperty('--cause-tilt-y', `${x * 10}deg`);
  });
  puppetStage.addEventListener('pointerleave', () => {
    puppet.style.setProperty('--cause-tilt-x', '0deg');
    puppet.style.setProperty('--cause-tilt-y', '0deg');
  });

  readButton.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return;
    const speech = window.speechSynthesis;

    if (speech.speaking && !speech.paused) {
      speech.pause();
      readText.textContent = 'Reanudar';
      readIcon.textContent = '▶';
      return;
    }
    if (speech.paused) {
      speech.resume();
      readText.textContent = 'Pausar';
      readIcon.textContent = 'Ⅱ';
      return;
    }

    const activeCard = cards[causeIndex];
    const title = activeCard.querySelector('h2').textContent;
    const description = activeCard.querySelector('.cause-card-full-text').textContent;
    const words = [...activeCard.querySelectorAll('.cause-word')];

    speech.cancel();
    const voice = new SpeechSynthesisUtterance(`${title}. ${description}`);
    voice.lang = 'es-CO';
    voice.rate = 0.9;

    voice.onstart = () => {
      experience.classList.add('is-reading');
      puppet.classList.add('is-speaking');
      readText.textContent = 'Pausar';
      readIcon.textContent = 'Ⅱ';
    };
    voice.onboundary = (event) => {
      words.forEach((word) => {
        const offset = Number(word.dataset.wordOffset);
        word.classList.toggle('is-read', offset <= event.charIndex);
        word.classList.toggle('is-current', offset <= event.charIndex && offset + word.textContent.length >= event.charIndex);
      });
    };
    const reset = () => {
      experience.classList.remove('is-reading');
      puppet.classList.remove('is-speaking');
      words.forEach((word) => word.classList.remove('is-read', 'is-current'));
      readText.textContent = 'Leer causa';
      readIcon.textContent = '▶';
    };
    voice.onend = reset;
    voice.onerror = reset;
    speech.speak(voice);
  });

  puppet.addEventListener('click', () => readButton.click());
  renderCauseStack();
}

function setupDevelopmentExperience() {
  const experience = pageContent.querySelector('.development-experience');
  if (!experience) return;

  const moments = [
    ['Momento 01', '1810', 'Primeras juntas y autonomía', 'Después del 20 de julio, varias ciudades formaron juntas y comenzaron a ejercer decisiones propias frente a la autoridad española.', 'https://i.ibb.co/JRY7qy5d/descarga-14.jpg', 'expectant'],
    ['Momento 02', '1810-1816', 'La Patria Boba', 'Las diferencias entre federalistas y centralistas debilitaron al nuevo gobierno y retrasaron la consolidación de la independencia.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbD_Zhg6oDkHLXrrl1QPeGdwMEffDjzbnQX_Y6U1RSA&s=10', 'tension'],
    ['Momento 03', '1815-1816', 'Reconquista española', 'Pablo Morillo recuperó gran parte del territorio y persiguió a líderes e instituciones patriotas, generando una etapa de crisis profunda.', 'https://i.ibb.co/RdnFvgP/La-Reconquista-Espa-ola-qu-fue-etapas-y-consecuencias-711-1492-Huellas-de-la-Historia.jpg', 'crisis'],
    ['Momento 04', '1819', 'Campaña Libertadora', 'Simón Bolívar organizó el avance desde los Llanos hacia los Andes para enfrentar al ejército realista y liberar Nueva Granada.', 'https://images.openai.com/static-rsc-4/njHckURVZ_nzWFksx6rR4hO-lX9oFrimKLB16rJuItbr_LMal9wdZ2WPLTWO9900jQb2pLyQbBthmlJ4t1guBr3kFMmID31-XnntJRbsY1PK5NmxmjTUtc3rTjFvQwQp7Jvoiu9IIpDXBCT3aXO0pEhaRFzFFsJn4Ms2La4LzjE?purpose=inline', 'advance'],
    ['Momento 05', '7 AGO 1819', 'Batalla de Boyacá', 'La victoria patriota abrió el camino hacia la consolidación de la Nueva Granada independiente y de la futura Gran Colombia.', 'https://i.ibb.co/nstpSpM3/BATALLA-DE-BOYAC-Luego-de-varios-a-os-de-luchas.jpg', 'triumph']
  ];

  const puppetStage = experience.querySelector('.development-puppet-stage');
  const puppet = experience.querySelector('.development-puppet');
  const phaseLabel = experience.querySelector('.development-phase-label');
  const year = experience.querySelector('.development-year');
  const title = experience.querySelector('.development-title');
  const image = experience.querySelector('.development-image');
  const description = experience.querySelector('.development-description');
  const readButton = experience.querySelector('.development-read');
  const readIcon = experience.querySelector('.development-read-icon');
  const readText = experience.querySelector('.development-read-text');
  const prev = experience.querySelector('.development-prev');
  const next = experience.querySelector('.development-next');
  const progress = experience.querySelector('.development-progress strong');
  const points = [...experience.querySelectorAll('.development-point')];
  let momentIndex = 0;

  const resetReading = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    experience.classList.remove('is-reading');
    puppet.classList.remove('is-speaking');
    readIcon.textContent = '▶';
    readText.textContent = 'Leer';
  };

  const renderMoment = (direction = 0) => {
    resetReading();
    const [phase, date, momentTitle, momentDescription, imageUrl, mood] = moments[momentIndex];

    experience.dataset.developmentMood = mood;
    phaseLabel.textContent = phase;
    year.textContent = date;
    title.textContent = momentTitle;
    image.src = imageUrl;
    image.alt = momentTitle;
    description.innerHTML = momentDescription.split(/(\s+)/).map((part, index) => {
      if (/^\s+$/.test(part)) return part;
      const offset = momentDescription.indexOf(part, index ? momentDescription.indexOf(part) : 0);
      return `<span class="development-word" data-word-offset="${offset}">${part}</span>`;
    }).join('');

    points.forEach((point, index) => {
      point.classList.toggle('is-active', index === momentIndex);
      point.setAttribute('aria-current', index === momentIndex ? 'step' : 'false');
    });

    progress.textContent = String(momentIndex + 1);
    prev.disabled = momentIndex === 0;
    next.disabled = momentIndex === moments.length - 1;

    experience.classList.remove('moment-enter-left', 'moment-enter-right');
    void experience.offsetWidth;
    experience.classList.add(direction > 0 ? 'moment-enter-right' : direction < 0 ? 'moment-enter-left' : '');

    const puppetMotion = {
      expectant: 'translateY(-4px) rotateZ(-1deg)',
      tension: 'translateY(14px) rotateZ(3deg)',
      crisis: 'translateY(26px) rotateZ(-4deg)',
      advance: 'translateY(-18px) rotateZ(2deg)',
      triumph: 'translateY(-36px) rotateZ(-2deg) scale(1.04)'
    };
    puppet.style.setProperty('--development-puppet-motion', puppetMotion[mood]);
  };

  points.forEach((point, index) => point.addEventListener('click', () => {
    const direction = index > momentIndex ? 1 : index < momentIndex ? -1 : 0;
    momentIndex = index;
    renderMoment(direction);
  }));

  prev.addEventListener('click', () => {
    if (momentIndex > 0) {
      momentIndex -= 1;
      renderMoment(-1);
    }
  });
  next.addEventListener('click', () => {
    if (momentIndex < moments.length - 1) {
      momentIndex += 1;
      renderMoment(1);
    }
  });

  puppetStage.addEventListener('pointermove', (event) => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const bounds = puppetStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    puppet.style.setProperty('--development-tilt-x', `${y * -8}deg`);
    puppet.style.setProperty('--development-tilt-y', `${x * 10}deg`);
  });
  puppetStage.addEventListener('pointerleave', () => {
    puppet.style.setProperty('--development-tilt-x', '0deg');
    puppet.style.setProperty('--development-tilt-y', '0deg');
  });

  readButton.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) return;
    const speech = window.speechSynthesis;

    if (speech.speaking && !speech.paused) {
      speech.pause();
      readText.textContent = 'Reanudar';
      readIcon.textContent = '▶';
      return;
    }
    if (speech.paused) {
      speech.resume();
      readText.textContent = 'Pausar';
      readIcon.textContent = 'Ⅱ';
      return;
    }

    const [, date, momentTitle, momentDescription] = moments[momentIndex];
    const words = [...description.querySelectorAll('.development-word')];
    speech.cancel();
    const voice = new SpeechSynthesisUtterance(`${date}. ${momentTitle}. ${momentDescription}`);
    voice.lang = 'es-CO';
    voice.rate = 0.9;

    voice.onstart = () => {
      experience.classList.add('is-reading');
      puppet.classList.add('is-speaking');
      readText.textContent = 'Pausar';
      readIcon.textContent = 'Ⅱ';
    };
    voice.onboundary = (event) => {
      words.forEach((word) => {
        const offset = Number(word.dataset.wordOffset);
        word.classList.toggle('is-read', offset <= event.charIndex);
        word.classList.toggle('is-current', offset <= event.charIndex && offset + word.textContent.length >= event.charIndex);
      });
    };
    const reset = () => {
      experience.classList.remove('is-reading');
      puppet.classList.remove('is-speaking');
      words.forEach((word) => word.classList.remove('is-read', 'is-current'));
      readText.textContent = 'Leer';
      readIcon.textContent = '▶';
    };
    voice.onend = reset;
    voice.onerror = reset;
    speech.speak(voice);
  });

  puppet.addEventListener('click', () => readButton.click());
  renderMoment();
}

function readSectionAloud(event) {
  if (!('speechSynthesis' in window)) return;

  const speech = window.speechSynthesis;
  const puppet = event.currentTarget;
  const label = puppet.querySelector('.puppet-label');
  if (speech.paused) {
    speech.resume();
    puppet.classList.add('is-speaking');
    label.textContent = '¡Estoy leyendo!';
    puppet.setAttribute('aria-label', 'Pausar lectura');
    return;
  }

  if (speech.speaking) {
    speech.pause();
    puppet.classList.remove('is-speaking');
    label.textContent = 'Lectura en pausa';
    puppet.setAttribute('aria-label', 'Reanudar lectura');
    return;
  }

  speech.cancel();
  const voice = new SpeechSynthesisUtterance(readingCopy[activeSection]);
  voice.lang = 'es-CO';
  voice.rate = 0.9;
  voice.onstart = () => {
    puppet.classList.add('is-speaking');
    label.textContent = '¡Estoy leyendo!';
    puppet.setAttribute('aria-label', 'Pausar lectura');
  };
  const resetPuppet = () => {
    puppet.classList.remove('is-speaking');
    label.textContent = 'Toca para escuchar';
    puppet.setAttribute('aria-label', 'Iniciar lectura');
  };
  voice.onend = resetPuppet;
  voice.onerror = resetPuppet;
  speech.speak(voice);
}

// Gestiona los clics de navegación desde un solo evento del contenedor principal.
shell.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const sectionButton = target.closest('[data-section]');
  if (!sectionButton || !shell.contains(sectionButton)) return;

  if (sectionButton.hasAttribute('data-search-result')) {
    searchInput.value = '';
    renderSearchResults();
  }
  selectSection(sectionButton.dataset.section);
});

// Conecta los cambios del buscador y el botón de tema claro/oscuro.
searchInput.addEventListener('input', renderSearchResults);
themeToggle.addEventListener('click', () => {
  const darkMode = shell.classList.toggle('dark-mode');
  themeToggle.setAttribute('aria-label', darkMode ? 'Activar modo claro' : 'Activar modo oscuro');
});

// La animación CSS marca los seis segundos; al terminar empieza el fade de dos segundos.
const loadingScreen = document.querySelector('#loading-screen');
const loadingProgress = document.querySelector('#loading-progress');
const loadingProgressTrack = loadingProgress?.parentElement;

if (loadingScreen && loadingProgress && loadingProgressTrack) {
  let progressStartedAt;

  const updateAccessibleProgress = (timestamp) => {
    if (progressStartedAt === undefined) progressStartedAt = timestamp;
    const progress = Math.min((timestamp - progressStartedAt) / 4000, 1);
    loadingProgressTrack.setAttribute('aria-valuenow', String(Math.floor(progress * 100)));
    if (progress < 1) requestAnimationFrame(updateAccessibleProgress);
  };

  loadingScreen.addEventListener('transitionend', (event) => {
    if (event.target === loadingScreen && event.propertyName === 'opacity') {
      loadingScreen.hidden = true;
    }
  });

  loadingProgress.addEventListener('animationend', (event) => {
    if (event.animationName !== 'loading-bar-fill') return;
    loadingProgressTrack.setAttribute('aria-valuenow', '100');
    loadingScreen.classList.add('is-fading');
    shell.removeAttribute('inert');
    shell.setAttribute('aria-busy', 'false');
  }, { once: true });

  requestAnimationFrame(() => {
    loadingScreen.classList.add('is-running');
    requestAnimationFrame(updateAccessibleProgress);
  });
}
