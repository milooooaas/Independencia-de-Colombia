'use strict';

const menu = [
  ['Inicio', '⌂'],
  ['Independencia', '✦'],
  ['Historia', '▤'],
  ['Causas', '◌'],
  ['Desarrollo', '➜'],
  ['Personajes', '♙'],
  ['Juegos', '✹'],
  ['Videos', '▶']
];

const quickTopics = [
  ['Causas', '◌', '¿Por qué comenzó?'],
  ['Antecedentes', '▤', 'Las pistas del pasado'],
  ['Personajes', '♙', 'Quienes hicieron historia'],
  ['Hechos importantes', '✦', 'Momentos para recordar'],
  ['Desarrollo', '➜', 'El camino a la libertad'],
  ['Consecuencias', '◎', 'Lo que cambió']
];

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

const characters = [
  ['Simón Bolívar', 'Fue el principal líder militar de la independencia y es conocido como El Libertador. Lideró la campaña que terminó con la victoria patriota en la Batalla de Boyacá.', 'https://images.openai.com/static-rsc-4/PNSeH_Ar9r1h2-bGnr6OYk3G0qdu-uPt5f-AK229mcZu_jTGTYkgl9jRqOnQYRSJXWYbJH7dCc_V8NE4E0i1E39hYh-KEVHY4FxVqo_0pxGW9O_PvcZTUB8diI6atwligDH4KrgRKBBywkXA7rpU2nFETCceVeRHdCmvkgiFGbxPnXT1GdQoZsl5haCgEqJB?purpose=fullsize'],
  ['Francisco de Paula Santander', 'Fue un militar y político que luchó por la independencia. Ayudó a organizar el nuevo gobierno y fue conocido como El Hombre de las Leyes.', 'https://images.openai.com/static-rsc-4/HacWa_WhpfJL5TrOuBsDZZ_A5U62kNSkY0QnbsNatHu6lq8ZEPx0isEvktv2kF-jwK6mNIYvJlTzYBTq2AZgadQz939ojZoxcsdQtnQy2hlg_cgUzi18HymgZ70uwNaDG9FrypVfv00ZSuhkTgoDRlF6bfgUYqjCseHZi_s0hwaJalaNv5esRqcq-YsvNjvF?purpose=fullsize'],
  ['Antonio Nariño', 'Fue un precursor de la independencia. Tradujo y difundió los Derechos del Hombre, promoviendo las ideas de libertad e igualdad.', 'https://images.openai.com/static-rsc-4/mI0h4haMRl-6wHXO41b0U4KsZHEo9PjYcSaVLszrJI593E0Og8HudRaHfa-nKcT2whUEf1ZOsYy3-Fo7kYqAWbB-TiYQBy08TgoCQs0wylAsPYKD9bhPyfhGhk6lumgoucdcaAH8fwTRkIwzy54KOIvC2FV94hygeCeGNJ407RaXLFxqou1gaeqyyK2dNX0L?purpose=fullsize'],
  ['Policarpa Salavarrieta', 'Conocida como La Pola, ayudó a los patriotas como espía. Fue capturada y fusilada en 1817, convirtiéndose en símbolo de valentía.', 'https://images.openai.com/static-rsc-4/J360THryPFPC24veeeAeTu-c3qGYEqbu6FsjHIqvW8NnTa7vOmUVWT753rfx_PSd3i7p0n-FqrjulSrzKxf1d8VSq5U5bjFb71XprVraxnCyI8kuAzNG3UcN7XnlxOUMv13XDlVKt-QlPJPsrMUS6u0-ahU_X-Sns-D1J7W8StM39gA4F4aHFiNag1x95Bo4?purpose=fullsize'],
  ['Camilo Torres Tenorio', 'Fue un importante líder político. Defendió los derechos de los criollos y apoyó el movimiento independentista.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDSjFboo0H5v7_NQEzJ1EW_wKMOBJszzraXcoNjn2Cg&s=10'],
  ['José Acevedo y Gómez', 'Fue un líder del 20 de julio de 1810. Su discurso motivó al pueblo de Bogotá a apoyar el movimiento de independencia.', 'https://diccionariodecolombia.expert/wp-content/uploads/2020/02/Acevedo-y-G%C3%B0mez-Jos%C3%A9.jpg']
];

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

const shell = document.querySelector('#app');
const pageContent = document.querySelector('#page-content');
const homeContent = pageContent.innerHTML;
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
const themeToggle = document.querySelector('#theme-toggle');
let activeSection = 'Inicio';

function topicSection(label) {
  if (menu.some(([name]) => name === label)) return label;
  return ['Antecedentes', 'Hechos importantes', 'Consecuencias'].includes(label)
    ? 'Independencia'
    : 'Historia';
}

function searchableContent() {
  return [
    ...menu.map(([title]) => ({ title, description: `Explora la sección ${title}.`, section: title })),
    ...quickTopics.map(([title, , description]) => ({ title, description, section: topicSection(title) }))
  ];
}

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

function renderCharacters() {
  return `<div class="characters-grid">${characters.map(([name, description, imageUrl]) => `
    <article class="character-card">
      <h2>${name}</h2>
      <div class="character-photo"><img src="${imageUrl}" alt="Retrato de ${name}"></div>
      <p>${description}</p>
    </article>`).join('')}
  </div>`;
}

function renderIndependence() {
  return `<div class="independence-timeline">${timeline.map(([date, title, description, imageUrl, imageAlt]) => `
    <article class="independence-event">
      <img src="${imageUrl}" alt="${imageAlt}" loading="lazy">
      <div class="independence-event-copy">
        <span class="eyebrow blue">${date}</span>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    </article>`).join('')}
  </div>`;
}

function renderReadingSection(section) {
  const heading = section === 'Historia'
    ? 'Una historia para contar'
    : section === 'Causas'
      ? '¿Qué provocó el cambio?'
      : 'Desarrollo de la Independencia de Colombia 🇨🇴';

  return `<div class="reading-layout">
    <article class="reading-card">
      ${['Causas', 'Desarrollo'].includes(section) ? '' : '<span class="placeholder-tag">ZONA DE TEXTO EDITABLE</span>'}
      <h2>${section === 'Causas' ? '10 causas de la Independencia' : heading}</h2>
      ${readingCopy[section].split('\n\n').map((paragraph) => section === 'Causas'
        ? `<p class="cause-item">${paragraph.replace(/^(\d+\.\s[^:]+:)/, '<strong>$1</strong>')}</p>`
        : `<p>${paragraph}</p>`).join('')}
    </article>
    <div class="puppet-card">
      <span class="placeholder-tag">SIMÓN BOLÍVAR</span>
      <button type="button" class="puppet-zone" aria-label="Toca el personaje para escuchar la lectura">
        <img src="https://i.pinimg.com/originals/4a/b2/df/4ab2df4037221e9eacc2c3726195514d.png" alt="Personaje lector">
        <span class="puppet-label">Toca para escuchar</span>
      </button>
      <p>Al tocar a Simón Bolívar, leerá esta sección en voz alta.</p>
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
    }
  ];

  return `<div class="genially-games">${games.map((game, index) => `
    <section class="genially-game" aria-labelledby="genially-game-title-${index + 1}">
      <h2 id="genially-game-title-${index + 1}">${game.title}</h2>
      ${isLocalFile
        ? '<p class="genially-local-notice">El navegador no permite mostrar este juego incrustado al abrir el archivo local. Ábrelo con el botón para jugar.</p>'
        : `<div class="genially-game-viewport">
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
          </div>`}
      <a class="genially-game-launch" href="${game.url}" target="_blank" rel="noopener noreferrer">
        ${isLocalFile ? 'Jugar ahora en Genially ↗' : 'Abrir en Genially si no carga aquí ↗'}
      </a>
    </section>`).join('')}
  </div>`;
}

function renderResources(section) {
  return `<div class="resource-grid">${['Espacio para tu imagen', 'Tu video o narración', 'Actividad para explorar'].map((item) => `
    <div class="resource-card"><span>✦</span><strong>${item}</strong><p>Agrega aquí el contenido de la sección ${section.toLowerCase()}.</p></div>`).join('')}
  </div>`;
}

function renderSection(section) {
  if (section === 'Inicio') {
    pageContent.innerHTML = homeContent;
    return;
  }

  const isCharacters = section === 'Personajes';
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

  pageContent.innerHTML = `<section class="section-view">
    <div class="section-heading${isCharacters ? ' section-heading-banner' : ''}">
      ${isCharacters
        ? '<img src="https://i.ibb.co/7ds29fjL/personajes.png" alt="Banner de personajes">'
        : `<span class="eyebrow blue">Estás explorando</span><h1>${section}</h1><p>${section === 'Juegos'
          ? (window.location.protocol === 'file:' ? 'El navegador bloquea los juegos dentro de archivos locales. Usa “Jugar ahora” para abrir cada uno, o publica la página en una dirección web para jugarlos aquí mismo.' : 'Elige un juego para empezar. Si no carga dentro de la página, ábrelo directamente en Genially.')
          : section === 'Causas' ? 'Conoce los factores políticos, económicos e ideológicos que impulsaron el proceso de independencia.'
            : section === 'Independencia' ? 'Recorre los acontecimientos que marcaron el camino hacia la independencia.'
              : section === 'Desarrollo' ? 'Sigue las etapas y los acontecimientos principales del proceso de independencia.'
            : 'Este espacio está listo para que agregues tu contenido, tus imágenes y tus actividades.'}</p>`}
    </div>
    ${contents}
  </section>`;

  const puppet = pageContent.querySelector('.puppet-zone');
  if (puppet) {
    const image = puppet.querySelector('img');
    image.addEventListener('error', () => { image.style.display = 'none'; }, { once: true });
    puppet.addEventListener('click', readSectionAloud);
  }
}

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

function readSectionAloud(event) {
  if (!('speechSynthesis' in window)) return;

  const puppet = event.currentTarget;
  const label = puppet.querySelector('.puppet-label');
  window.speechSynthesis.cancel();
  const voice = new SpeechSynthesisUtterance(readingCopy[activeSection]);
  voice.lang = 'es-CO';
  voice.rate = 0.9;
  voice.onstart = () => {
    puppet.classList.add('is-speaking');
    label.textContent = '¡Estoy leyendo!';
  };
  voice.onend = () => {
    puppet.classList.remove('is-speaking');
    label.textContent = 'Toca para escuchar';
  };
  window.speechSynthesis.speak(voice);
}

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

searchInput.addEventListener('input', renderSearchResults);
themeToggle.addEventListener('click', () => {
  const darkMode = shell.classList.toggle('dark-mode');
  themeToggle.setAttribute('aria-label', darkMode ? 'Activar modo claro' : 'Activar modo oscuro');
});
