const militaryDetails = `
  <p class="class-tagline">"A disciplina salva vidas quando o mundo entra em colapso."</p>
  <p>O Militar representa soldados das forças armadas, policiais, agentes de segurança, guardas patrimoniais e qualquer pessoa que tenha recebido treinamento formal de combate antes do colapso.</p>
  <p>É a classe indicada para a linha de frente, para a proteção do grupo e para o uso eficiente de armas de fogo.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>24 + Constituição</span></div><div><strong>Por nível</strong><span>6 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Os PA substituem Pontos de Mana para esta classe. Eles representam foco, treinamento, resistência física e controle emocional sob pressão.</p>
`;

const survivorDetails = `
  <p class="class-tagline">"Você não vence porque é mais forte. Vence porque ainda está vivo."</p>
  <p>O Sobrevivente é o explorador que retorna carregando recursos. Seu maior talento não é lutar. É voltar vivo.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>16 + Constituição</span></div><div><strong>Por nível</strong><span>4 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam reflexos, concentração e improvisação: a capacidade de reagir ao perigo antes que ele o alcance.</p>
`;

const mechanicDetails = `
  <p class="class-tagline">"Se ainda funciona, eu consigo melhorar."</p>
  <p>O Mecânico representa engenheiros, mecânicos automotivos, eletricistas e técnicos de manutenção. Esta é a classe que transforma sucata em recursos úteis.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>18 + Constituição</span></div><div><strong>Por nível</strong><span>5 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam concentração, conhecimento técnico e improvisação sob pressão.</p>
`;

const trackerDetails = `
  <p class="class-tagline">"Toda pegada conta uma história."</p>
  <p>O Rastreador representa caçadores, guias de trilha, guardas florestais, exploradores e especialistas em reconhecimento.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>20 + Constituição</span></div><div><strong>Por nível</strong><span>5 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam percepção aguçada, experiência em campo e resistência mental.</p>
`;

const mercenaryDetails = `
  <p class="class-tagline">"Sem a disciplina militar, o Mercenário é pura agressão."</p>
  <p>O Mercenário representa ex-soldados particulares, seguranças privados, lutadores e caçadores de recompensas acostumados a resolver problemas pela força.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>26 + Constituição</span></div><div><strong>Por nível</strong><span>6 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam agressividade, resistência física e instinto de combate.</p>
`;

const leaderDetails = `
  <p class="class-tagline">"As pessoas não seguem quem grita mais alto."</p>
  <p>O Líder representa chefes de equipe, oficiais, professores, empresários e líderes comunitários.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>18 + Constituição</span></div><div><strong>Por nível</strong><span>5 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam presença de espírito, autoridade e capacidade de motivar pessoas.</p>
`;

const medicDetails = `
  <p class="class-tagline">"Nem toda batalha é vencida com balas."</p>
  <p>O Médico representa médicos, enfermeiros, socorristas e paramédicos. Seu conhecimento estabiliza ferimentos.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>16 + Constituição</span></div><div><strong>Por nível</strong><span>4 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam concentração, conhecimento técnico e a capacidade de agir sob pressão.</p>
`;

const influencerDetails = `
  <p class="class-tagline">"Palavras não matam zumbis."</p>
  <p>O Influenciador tem a comunicação como maior arma. Convencer alguém pode valer mais que vencer um combate.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>16 + Constituição</span></div><div><strong>Por nível</strong><span>4 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam presença de espírito, eloquência, criatividade e autocontrole.</p>
`;

const classCatalog = [
  ['Militar', 'militar', 'Treinado para agir sob pressão, o Militar mantém a disciplina quando o pânico toma conta.', militaryDetails],
  ['Sobrevivente', 'sobrevivente', 'O Sobrevivente sabe entrar onde ninguém olha e sair antes que alguém perceba.', survivorDetails],
  ['Mecânico', 'mecanico', 'Sem combustível, reparos e improvisos, qualquer abrigo vira uma prisão.', mechanicDetails],
  ['Rastreador', 'rastreador', 'O Rastreador lê rastros, reconhece perigos e encontra recursos onde outros veem apenas mata e silêncio.', trackerDetails],
  ['Mercenário', 'mercenario', 'O Mercenário resolve problemas pela força e mantém a pressão quando o combate fica brutal.', mercenaryDetails],
  ['Líder', 'lider', 'O Líder mantém o grupo unido, organizado e capaz de continuar quando tudo parece perdido.', leaderDetails],
  ['Médico', 'medico', 'O Médico estabiliza aliados, administra recursos escassos e enfrenta os riscos da infecção de perto.', medicDetails],
  ['Influenciador', 'influenciador', 'O Influenciador usa presença e comunicação para abrir portas, formar alianças e evitar conflitos fatais.', influencerDetails],
];

const groups = [
  ['🏠', 'Início', [['Visão geral', 'top']]],
  ['📖', 'Introdução', [['História', 'historia'], ['Como jogar', 'como-jogar']]],
  ['👤', 'Personagens', [['Classes', 'classes', 'personagens', classCatalog.map(([name, anchor]) => [name, anchor])], ['Origens', 'origens', 'personagens']]],
  ['🧟', 'Sobrevivência', [['Fome', 'fome', 'sobrevivencia'], ['Sede', 'sede', 'sobrevivencia'], ['Sono', 'sono', 'sobrevivencia']]],
  ['⚔', 'Combate', [['Armas corpo a corpo', 'armas-brancas', 'combate'], ['Armas de fogo', 'armas-fogo', 'combate'], ['Munição', 'municao', 'combate'], ['Barulho', 'barulho', 'combate']]],
  ['☣', 'Zumbis', [['Zumbi comum', 'zumbi-comum', 'zumbis'], ['Corredor', 'corredor', 'zumbis'], ['Gordo', 'gordo', 'zumbis'], ['Espreitador', 'espreitador', 'zumbis']]],
  ['🎒', 'Equipamentos', [['Mochilas', 'mochilas', 'equipamentos'], ['Ferramentas', 'ferramentas', 'equipamentos'], ['Medicina', 'medicina', 'equipamentos'], ['Comida', 'comida', 'equipamentos']]],
  ['🏗️', 'Bases', [['Construções', 'construcoes', 'bases'], ['Melhorias', 'melhorias', 'bases'], ['Defesas', 'defesas', 'bases'], ['Energia', 'energia', 'bases']]],
  ['🚗', 'Veículos', [['Carro', 'carro', 'veiculos'], ['Moto', 'moto', 'veiculos'], ['Caminhão', 'caminhao', 'veiculos'], ['Helicóptero', 'helicoptero', 'veiculos']]],
  ['🎲', 'Mestre', [['Eventos', 'eventos', 'mestre'], ['Saques', 'saques', 'mestre'], ['Tabelas', 'tabelas', 'mestre'], ['Missões', 'missoes', 'mestre'], ['NPCs', 'npcs', 'mestre']]],
];

const nav = document.querySelector('#navigation');
nav.innerHTML = groups.map(([icon, title, links], index) => `
  <details class="nav-group" ${index < 2 ? 'open' : ''}>
    <summary>${icon} ${title}</summary>
    ${links.map(([label, anchor, parent = '', children = []]) => {
      if (children.length > 0) {
        return `
          <a href="#${anchor}" class="nav-link">${label}</a>
          <div class="nav-children">
            ${children.map(([childLabel, childAnchor]) => `<a href="#${childAnchor}" class="nav-sub-link">${childLabel}</a>`).join('')}
          </div>
        `;
      }
      return `<a href="#${anchor}" class="nav-link">${label}</a>`;
    }).join('')}
  </details>
`).join('');

const classMenuLink = nav.querySelector('a[href="#classes"]');
const archetypeNavLinks = [...nav.querySelectorAll('.nav-sub-link')];
if (classMenuLink && archetypeNavLinks.length) {
  const toggle = document.createElement('button');
  toggle.className = 'nav-archetype-toggle';
  toggle.type = 'button';
  classMenuLink.insertAdjacentElement('afterend', toggle);
  const setArchetypeNavVisibility = collapsed => {
    archetypeNavLinks.forEach(link => { link.hidden = collapsed; });
    toggle.textContent = collapsed ? '▸ Mostrar arquétipos' : '⌄ Ocultar arquétipos';
    toggle.setAttribute('aria-expanded', String(!collapsed));
    localStorage.setItem('t20-nav-archetypes', collapsed ? 'collapsed' : 'expanded');
  };
  setArchetypeNavVisibility(localStorage.getItem('t20-nav-archetypes') === 'collapsed');
  toggle.addEventListener('click', () => setArchetypeNavVisibility(!archetypeNavLinks[0].hidden));
}

groups.flatMap(([, , links]) => links).forEach(([title, anchor, parent]) => {
  if (!parent || document.getElementById(anchor)) return;
  const target = document.getElementById(parent);
  if (!target) return;
  const article = document.createElement('article');
  article.id = anchor;
  article.className = 'subsection';
  article.innerHTML = `<h3>${title}</h3><p>Esta seção será preenchida em breve com conteúdo detalhado.</p>`;
  target.append(article);
});

const classesSection = document.getElementById('classes');
if (classesSection) {
  const catalog = document.createElement('div');
  catalog.className = 'class-catalog';
  catalog.innerHTML = `
    <div class="catalog-heading">
      <div>
        <p class="eyebrow">ARQUÉTIPOS DISPONÍVEIS</p>
        <p>Uma classe representa as experiências que ajudaram seu sobrevivente a chegar até aqui.</p>
      </div>
      <button id="catalogToggle" aria-expanded="true">Ocultar arquétipos</button>
    </div>
    <div id="classCards" class="class-cards">
      ${classCatalog.map(([name, anchor, shortDesc]) => `
        <article class="class-card" id="${anchor}">
          <h3>${name}</h3>
          <p>${shortDesc}</p>
        </article>
      `).join('')}
    </div>
  `;
  classesSection.append(catalog);

  const catalogToggle = document.querySelector('#catalogToggle');
  const classCards = document.querySelector('#classCards');
  const setCatalogVisibility = collapsed => {
    classCards.hidden = collapsed;
    catalogToggle.setAttribute('aria-expanded', String(!collapsed));
    catalogToggle.textContent = collapsed ? 'Mostrar arquétipos' : 'Ocultar arquétipos';
    localStorage.setItem('t20-class-catalog', collapsed ? 'collapsed' : 'expanded');
  };
  setCatalogVisibility(localStorage.getItem('t20-class-catalog') === 'collapsed');
  catalogToggle.addEventListener('click', () => setCatalogVisibility(!classCards.hidden));
  nav.addEventListener('click', event => {
    const anchor = event.target.closest('a')?.getAttribute('href');
    if (anchor && classCards.hidden && classCards.querySelector(anchor)) setCatalogVisibility(false);
  });
}

const body = document.body;
const themeButton = document.querySelector('#themeButton');
const savedTheme = localStorage.getItem('t20-theme');
if (savedTheme === 'dark') body.classList.add('dark');
themeButton.addEventListener('click', () => { 
  body.classList.toggle('dark'); 
  localStorage.setItem('t20-theme', body.classList.contains('dark') ? 'dark' : 'light'); 
});

const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('#menuButton');
const setDesktopSidebar = collapsed => {
  body.classList.toggle('sidebar-collapsed', collapsed);
  menuButton.setAttribute('aria-expanded', String(!collapsed));
  menuButton.setAttribute('aria-label', collapsed ? 'Mostrar navegação' : 'Recolher navegação');
  localStorage.setItem('t20-sidebar', collapsed ? 'collapsed' : 'expanded');
};
if (localStorage.getItem('t20-sidebar') === 'collapsed' && window.innerWidth > 850) setDesktopSidebar(true);
menuButton.addEventListener('click', () => {
  if (window.innerWidth <= 850) {
    const open = sidebar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    return;
  }
  setDesktopSidebar(!body.classList.contains('sidebar-collapsed'));
});
nav.addEventListener('click', event => { 
  if (event.target.matches('a') && window.innerWidth <= 850) sidebar.classList.remove('open'); 
});

const search = document.querySelector('#searchInput');
const results = document.querySelector('#searchResults');
const pages = [...document.querySelectorAll('[data-page]')];
search.addEventListener('input', () => { 
  const query = search.value.trim().toLowerCase(); 
  if (!query) return results.classList.remove('visible'); 
  const matches = pages.filter(page => page.textContent.toLowerCase().includes(query));
  results.innerHTML = matches.map(m => `<a href="#${m.id}">${m.getAttribute('data-page')}</a>`).join('');
  results.classList.toggle('visible', matches.length > 0);
});
results.addEventListener('click', () => { 
  results.classList.remove('visible'); 
  search.value = ''; 
});

// Origins catalog
const originDetails = [
  {
    icon: '🏠', name: 'Civil Comum',
    quote: '"Você era apenas mais uma pessoa tentando viver sua vida quando tudo acabou."',
    desc: 'Você não possuía treinamento especializado, mas aprendeu a sobreviver enfrentando desafios como qualquer outra pessoa.',
    skills: ['Vontade', 'Intuição'],
    power: { name: 'Adaptável', desc: 'Uma vez por cena, pode repetir um teste de perícia que tenha falhado.' },
    equip: ['Mochila', 'Lanterna', 'Cantil', 'Canivete', 'Cobertor']
  },
  {
    icon: '🎖️', name: 'Veterano',
    quote: '"Você já conhecia a violência muito antes do fim do mundo."',
    desc: 'Experiências anteriores em conflitos o prepararam para manter a calma sob pressão.',
    skills: ['Pontaria', 'Guerra'],
    power: { name: 'Sangue Frio', desc: 'Recebe +2 em testes contra medo, pânico e intimidação.' },
    equip: ['Faca de combate', 'Colete leve', 'Lanterna tática', 'Binóculo', 'Kit de limpeza de armas']
  },
  {
    icon: '🔥', name: 'Sobrevivente Nato',
    quote: '"Você aprendeu cedo que ninguém sobreviveria por você."',
    desc: 'Você desenvolveu instintos apurados para enfrentar situações extremas.',
    skills: ['Sobrevivência', 'Percepção'],
    power: { name: 'Instinto de Sobrevivência', desc: 'Recebe +2 em testes para evitar emboscadas, armadilhas e perigos naturais.' },
    equip: ['Cantil', 'Faca', 'Mochila', 'Corda', 'Isqueiro']
  },
  {
    icon: '🎒', name: 'Saqueador',
    quote: '"Os recursos estão escondidos. Você sabe onde procurar."',
    desc: 'Você desenvolveu técnicas para entrar, vasculhar e sair de locais perigosos rapidamente.',
    skills: ['Investigação', 'Furtividade'],
    power: { name: 'Olhos Afiados', desc: 'Recebe +2 em testes para encontrar suprimentos durante saques.' },
    equip: ['Pé de cabra', 'Mochila', 'Lanterna', 'Canivete', 'Luvas']
  },
];

// Inject origins section
setTimeout(() => {
  const origensSection = document.getElementById('origens');
  if (origensSection) {
    origensSection.innerHTML = `
      <h3>O que você fazia antes do fim?</h3>
      <p>Sua origem define o que você sabia fazer antes do mundo acabar.</p>
      
      <div class="origins-grid">
        ${originDetails.map(orig => `
          <article class="origin-card">
            <header class="origin-header">
              <span class="origin-icon">${orig.icon}</span>
              <h4>${orig.name}</h4>
            </header>
            <p class="origin-quote"><em>${orig.quote}</em></p>
            <p class="origin-desc">${orig.desc}</p>
            
            <div class="origin-stats">
              <div class="stat-block">
                <strong>Perícias Adicionais</strong>
                <span>${orig.skills.join(' e ')}</span>
              </div>
              <div class="stat-block">
                <strong>Poder: ${orig.power.name}</strong>
                <span>${orig.power.desc}</span>
              </div>
              <div class="stat-block equip-block">
                <strong>Equipamento Inicial (Escolha dois)</strong>
                <ul>
                  ${orig.equip.map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  }
}, 100);
