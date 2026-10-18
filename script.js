'use strict';

const menu = [
  ['Inicio', '⌂'],
  ['Independencia', '✦'],
  ['Historia', '▤'],
  ['Causas', '◌'],
  ['Desarrollo', '➜'],
  ['Personajes', '♙'],
  ['Juegos', '✹'],
  ['Videos', '▶'],
  ['Recursos', '▣']
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
  Causas: 'Aquí puedes explicar las causas de la Independencia: las nuevas ideas, los cambios políticos y el deseo de participar en las decisiones del territorio.',
  Desarrollo: 'Aquí puedes narrar cómo avanzó el proceso: las primeras juntas, las campañas, los encuentros y las decisiones que llevaron a la libertad.'
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
  ['20 JUL', 'El grito de independencia', 'Una fecha que encendió el deseo de libertad.'],
  ['1819', 'Campaña Libertadora', 'El ejército recorrió los Andes con valentía.'],
  ['7 AGO', 'Batalla de Boyacá', 'La victoria abrió el camino a una nueva nación.']
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

function renderReadingSection(section) {
  const heading = section === 'Historia'
    ? 'Una historia para contar'
    : section === 'Causas'
      ? '¿Qué provocó el cambio?'
      : 'El camino hacia la libertad';

  return `<div class="reading-layout">
    <article class="reading-card">
      <span class="placeholder-tag">ZONA DE TEXTO EDITABLE</span>
      <h2>${heading}</h2>
      ${readingCopy[section].split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('')}
      ${section === 'Historia' ? '' : '<p class="editable-copy">Puedes reemplazar este párrafo con tu texto. Mantén las ideas cortas y agrega subtítulos para que sea fácil de leer.</p>'}
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
      : section === 'Juegos'
        ? renderGames()
        : renderResources(section);

  pageContent.innerHTML = `<section class="section-view">
    <div class="section-heading${isCharacters ? ' section-heading-banner' : ''}">
      ${isCharacters
        ? '<img src="https://i.ibb.co/7ds29fjL/personajes.png" alt="Banner de personajes">'
        : `<span class="eyebrow blue">Estás explorando</span><h1>${section}</h1><p>${section === 'Juegos' ? (window.location.protocol === 'file:' ? 'El navegador bloquea los juegos dentro de archivos locales. Usa “Jugar ahora” para abrir cada uno, o publica la página en una dirección web para jugarlos aquí mismo.' : 'Elige un juego para empezar. Si no carga dentro de la página, ábrelo directamente en Genially.') : 'Este espacio está listo para que agregues tu contenido, tus imágenes y tus actividades.'}</p>`}
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
