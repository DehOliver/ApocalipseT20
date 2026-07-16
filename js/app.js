const militaryDetails = `
  <p class="class-tagline">"A disciplina salva vidas quando o mundo entra em colapso."</p>
  <p>O Militar representa soldados das forças armadas, policiais, agentes de segurança, guardas patrimoniais e qualquer pessoa que tenha recebido treinamento formal de combate antes do colapso.</p>
  <p>É a classe indicada para a linha de frente, para a proteção do grupo e para o uso eficiente de armas de fogo.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Treinamento formal em combate</li>
    <li>Disciplina e resistência psicológica</li>
    <li>Expertise com armas de fogo</li>
    <li>Liderança em situações críticas</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>24 + Constituição</span></div>
    <div><strong>Por nível</strong><span>6 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Armas de Fogo, Guerra, Percepção</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Os PA substituem Pontos de Mana para esta classe. Eles representam foco, treinamento, resistência física e controle emocional sob pressão.</p>
  <p><strong>Regeneração:</strong> Recupera 2 PA por turno de descanso ou ao meditar sobre conquistas.</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Ordem Tática:</strong> Pode guiar aliados em combate, conferindo +1 em suas ações de defesa</li>
    <li><strong>Retaguarda Segura:</strong> Uma vez por cena, pode estabelecer uma posição defensiva que protege aliados próximos</li>
    <li><strong>Coragem Sob Fogo:</strong> Resiste a testes de medo quando em combate direto</li>
  </ul>
`;

const survivorDetails = `
  <p class="class-tagline">"Você não vence porque é mais forte. Vence porque ainda está vivo."</p>
  <p>O Sobrevivente é o explorador que retorna carregando recursos. Seu maior talento não é lutar. É voltar vivo.</p>
  <p>Estes são os buscadores, coletores e exploradores que conhecem cada rota de fuga, cada esconderijo seguro e cada atalho perigoso.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Exploração e reconhecimento</li>
    <li>Reflexos aguçados</li>
    <li>Improviso e adaptação</li>
    <li>Conhecimento de rotas de fuga</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>16 + Constituição</span></div>
    <div><strong>Por nível</strong><span>4 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Furtividade, Sobrevivência, Investigação</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam reflexos, concentração e improvisação: a capacidade de reagir ao perigo antes que ele o alcance.</p>
  <p><strong>Regeneração:</strong> Recupera 2 PA ao descobrir algo novo ou superar um obstáculo</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Rotas Seguras:</strong> Conhece sempre uma via de fuga em locais já explorados</li>
    <li><strong>Senso de Perigo:</strong> Percebe emboscadas e armadilhas antes de pisar nelas</li>
    <li><strong>Saque Rápido:</strong> Coleta recursos 50% mais rápido que outros</li>
  </ul>
`;

const mechanicDetails = `
  <p class="class-tagline">"Se ainda funciona, eu consigo melhorar."</p>
  <p>O Mecânico representa engenheiros, mecânicos automotivos, eletricistas e técnicos de manutenção. Esta é a classe que transforma sucata em recursos úteis.</p>
  <p>Quando todos os outros veem só lixo, o Mecânico vê possibilidades infinitas de melhoria e adaptação.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Expertise técnica</li>
    <li>Reparo e manutenção</li>
    <li>Criação de armadilhas e dispositivos</li>
    <li>Improviso criativo</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>18 + Constituição</span></div>
    <div><strong>Por nível</strong><span>5 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Artesanato, Mecânica, Elétrica</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam concentração, conhecimento técnico e improvisação sob pressão.</p>
  <p><strong>Regeneração:</strong> Recupera 3 PA ao reparar algo ou criar um dispositivo útil</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Análise de Estrutura:</strong> Identifica pontos fracos em construções e máquinas</li>
    <li><strong>Jury Rig:</strong> Pode criar dispositivos funcionais com sucata em 10 minutos</li>
    <li><strong>Sabotagem Inteligente:</strong> Sabe desativar sistemas sem destruí-los</li>
  </ul>
`;

const trackerDetails = `
  <p class="class-tagline">"Toda pegada conta uma história."</p>
  <p>O Rastreador representa caçadores, guias de trilha, guardas florestais, exploradores e especialistas em reconhecimento.</p>
  <p>Seus olhos conseguem ler sinais que outros ignoram: trilhas antigas, marcas de garras, direção do vento, comportamento animal.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Rastreamento e reconhecimento</li>
    <li>Conhecimento de natureza</li>
    <li>Caça e captura</li>
    <li>Orientação</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>20 + Constituição</span></div>
    <div><strong>Por nível</strong><span>5 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Rastreamento, Natureza, Percepção</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam percepção aguçada, experiência em campo e resistência mental.</p>
  <p><strong>Regeneração:</strong> Recupera 2 PA ao rastrear com sucesso ou descobrir informações valiosas</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Lê os Sinais:</strong> Interpreta pegadas, marcas e comportamentos</li>
    <li><strong>Orientação Inata:</strong> Nunca se perde e sempre conhece a direção do caminho</li>
    <li><strong>Caçador Preparado:</strong> Recebe +3 em emboscadas planejadas</li>
  </ul>
`;

const mercenaryDetails = `
  <p class="class-tagline">"Sem a disciplina militar, o Mercenário é pura agressão."</p>
  <p>O Mercenário representa ex-soldados particulares, seguranças privados, lutadores e caçadores de recompensas acostumados a resolver problemas pela força.</p>
  <p>Eles são guerreiros profissionais que não têm lealdade à pátria, apenas ao resultado final.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Combate brutalmente eficiente</li>
    <li>Agressão controlada</li>
    <li>Resistência extrema</li>
    <li>Destemor em confrontos</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>26 + Constituição</span></div>
    <div><strong>Por nível</strong><span>6 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Combate Corpo a Corpo, Intimidação, Guerra</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam agressividade, resistência física e instinto de combate.</p>
  <p><strong>Regeneração:</strong> Recupera 3 PA a cada inimigo derrotado em combate</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Golpe Devastador:</strong> Uma vez por turno, multiplica dano por 1.5</li>
    <li><strong>Resistência de Ferro:</strong> Reduz dano recebido em 2 pontos</li>
    <li><strong>Execução:</strong> Pode finalizar inimigos incapacitados de forma rápida</li>
  </ul>
`;

const leaderDetails = `
  <p class="class-tagline">"As pessoas não seguem quem grita mais alto."</p>
  <p>O Líder representa chefes de equipe, oficiais, professores, empresários e líderes comunitários.</p>
  <p>Sua verdadeira arma é a inspiração: ela mantém grupos unidos quando tudo parece perdido e multiplica a força de todos ao redor.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Inspiração e motivação</li>
    <li>Liderança estratégica</li>
    <li>Negociação</li>
    <li>Autoridade natural</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>18 + Constituição</span></div>
    <div><strong>Por nível</strong><span>5 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Liderança, Persuasão, Conhecimento</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam presença de espírito, autoridade e capacidade de motivar pessoas.</p>
  <p><strong>Regeneração:</strong> Recupera 2 PA ao inspirar aliados ou resolver conflito sem violência</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Inspiração Tática:</strong> Todos os aliados ganham +2 em um teste ao ser motivado</li>
    <li><strong>Voz de Comando:</strong> Pode ordenar ações coordenadas de múltiplos aliados</li>
    <li><strong>Diplomacia Eficiente:</strong> Consegue negociar onde outros fracassariam</li>
  </ul>
`;

const medicDetails = `
  <p class="class-tagline">"Nem toda batalha é vencida com balas."</p>
  <p>O Médico representa médicos, enfermeiros, socorristas e paramédicos. Seu conhecimento estabiliza ferimentos.</p>
  <p>Em um mundo onde a infecção mata mais que as balas, o Médico é tão essencial quanto o melhor guerreiro.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Conhecimento médico avançado</li>
    <li>Manipulação de medicamentos</li>
    <li>Diagnóstico rápido</li>
    <li>Cirurgia de campo</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>16 + Constituição</span></div>
    <div><strong>Por nível</strong><span>4 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Medicina, Alquimia, Conhecimento</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam concentração, conhecimento técnico e a capacidade de agir sob pressão.</p>
  <p><strong>Regeneração:</strong> Recupera 2 PA ao curar ferimentos graves ou salvar vidas</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Cirurgia de Emergência:</strong> Pode salvar aliados à beira da morte</li>
    <li><strong>Antídoto Rápido:</strong> Resiste e neutraliza envenenamentos</li>
    <li><strong>Diagnóstico Preciso:</strong> Identifica doenças e infecções instantaneamente</li>
  </ul>
`;

const influencerDetails = `
  <p class="class-tagline">"Palavras não matam zumbis."</p>
  <p>O Influenciador tem a comunicação como maior arma. Convencer alguém pode valer mais que vencer um combate.</p>
  <p>Artistas, celebridades, políticos e comunicadores: aqueles cujas palavras moldam realidades e mexem com emoções.</p>
  <h5>Características Principais</h5>
  <ul>
    <li>Persuasão extrema</li>
    <li>Carisma natural</li>
    <li>Manipulação social</li>
    <li>Criatividade e improviso verbais</li>
  </ul>
  <div class="class-stats">
    <div><strong>Vida inicial</strong><span>16 + Constituição</span></div>
    <div><strong>Por nível</strong><span>4 + Constituição</span></div>
    <div><strong>Perícias de Classe</strong><span>Persuasão, Intuição, Performance</span></div>
  </div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Seus PA representam presença de espírito, eloquência, criatividade e autocontrole.</p>
  <p><strong>Regeneração:</strong> Recupera 2 PA ao convencer alguém ou evitar conflito via comunicação</p>
  <h5>Habilidades Especiais</h5>
  <ul>
    <li><strong>Discurso Inspirador:</strong> Pode motivar qualquer grupo para ação</li>
    <li><strong>Mentira Convincente:</strong> Passa em testes de enganação mesmo em situações improváveis</li>
    <li><strong>Manipulação Emocional:</strong> Compreende e explora motivações alheias</li>
  </ul>
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

// Origins catalog - TODAS AS 20 ORIGENS
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
  {
    icon: '🏭', name: 'Operário',
    quote: '"Trabalho duro sempre foi a solução."',
    desc: 'Você viveu de trabalho manual, construindo e conertando coisas. Seus músculos e conhecimento prático são suas maiores forças.',
    skills: ['Artesanato', 'Força'],
    power: { name: 'Mãos Firmes', desc: 'Consegue reparar qualquer coisa com materiais improvisados. +2 em testes de conserto.' },
    equip: ['Chave inglesa', 'Martelo', 'Alicate', 'Mochila pesada', 'Luvas de trabalho']
  },
  {
    icon: '🚜', name: 'Fazendeiro',
    quote: '"A terra me ensinou a paciência e quando reconhecer os sinais de mudança."',
    desc: 'Cresceu em contato direto com a natureza, entendendo ciclos, plantações e animais.',
    skills: ['Natureza', 'Sobrevivência'],
    power: { name: 'Conhecimento da Terra', desc: 'Sabe encontrar água e comida em qualquer ambiente natural. +3 em testes de foragir.' },
    equip: ['Enxada', 'Corda grossa', 'Lanterna óleo', 'Sementes', 'Mochila']
  },
  {
    icon: '🎓', name: 'Acadêmico',
    quote: '"Nem todo conhecimento salva vidas, mas alguns conhecimentos certamente o fazem."',
    desc: 'Estudou sistemas, história e ciência. Sua mente é sua ferramenta mais afiada.',
    skills: ['Conhecimento', 'Análise'],
    power: { name: 'Pesquisa Rápida', desc: 'Pode tentar lembrar ou deduzir informações sobre qualquer assunto uma vez por cena.' },
    equip: ['Livro de referência', 'Óculos extra', 'Caderno e caneta', 'Lanterna', 'Mochila']
  },
  {
    icon: '👮', name: 'Policial',
    quote: '"Lei e ordem ainda importam, mesmo que o mundo tenha acabado."',
    desc: 'Você cumpriu a lei antes. Agora você define o que é justo.',
    skills: ['Investigação', 'Liderança'],
    power: { name: 'Autoridade', desc: 'NPCs levarão suas ordens mais a sério. +2 em testes de persuasão com autoridades.' },
    equip: ['Distintivo', 'Algemas', 'Lanterna policial', 'Gás pimenta', 'Cassetete']
  },
  {
    icon: '🏥', name: 'Enfermeiro',
    quote: '"Curar é mais difícil que machucar, mas muito mais importante."',
    desc: 'Você passou seus dias cuidando de pessoas doentes. A pressão e o caos não são novidade.',
    skills: ['Medicina', 'Empatia'],
    power: { name: 'Cuidados de Emergência', desc: 'Pode estabilizar qualquer pessoa à beira da morte uma vez por dia.' },
    equip: ['Kit médico', 'Luvas estéreis', 'Mascara', 'Ataduras', 'Mochila médica']
  },
  {
    icon: '🍳', name: 'Chef',
    quote: '"Comida não é luxo. É sobrevivência com dignidade."',
    desc: 'Você sabe transformar qualquer ingrediente em algo comestível, seguro e até saboroso.',
    skills: ['Culinária', 'Química'],
    power: { name: 'Mestre Culinário', desc: 'Comida preparada por você é 30% mais nutritiva. Pode detectar veneno por gosto.' },
    equip: ['Faca de chef', 'Panela portátil', 'Temperos', 'Óleo de cozinha', 'Mochila reforçada']
  },
  {
    icon: '⚙️', name: 'Engenheiro',
    quote: '"Sistemas complexos são apenas puzzles esperando serem resolvidos."',
    desc: 'Você projetava, construía e otimizava máquinas. Seu conhecimento de engenharia é profundo.',
    skills: ['Engenharia', 'Mecânica'],
    power: { name: 'Design Avançado', desc: 'Pode criar armadilhas e dispositivos complexos em 1 hora. +2 em testes de sabotagem.' },
    equip: ['Ferramentas precisas', 'Projeto técnico', 'Fio elétrico', 'Lanterna LED', 'Mochila técnica']
  },
  {
    icon: '🎸', name: 'Artista',
    quote: '"A beleza e a criatividade nos definem como humanos. Não vou deixar o apocalipse tirar isso."',
    desc: 'Sua criatividade é sua força. Você vê possibilidades onde outros veem apenas ruína.',
    skills: ['Performance', 'Criatividade'],
    power: { name: 'Inspiração Criativa', desc: 'Uma vez por dia, pode inspirar um aliado a ganhar +3 em um teste importante.' },
    equip: ['Instrumento musical', 'Tintas/pincéis', 'Caderno sketchbook', 'Lanterna', 'Mochila']
  },
  {
    icon: '📡', name: 'Técnico em Comunicação',
    quote: '"Comunicação é o nervoso do mundo. Se eu posso consertar o nervoso, posso consertar tudo."',
    desc: 'Você entende rádios, comunicações e transmissões. Você pode se conectar quando outros estão isolados.',
    skills: ['Eletrônica', 'Comunicação'],
    power: { name: 'Conexões Ativas', desc: 'Pode ligar equipamentos de comunicação e estabelecer contato até 50km de distância.' },
    equip: ['Rádio portátil', 'Baterias extra', 'Antena dobrável', 'Fone de ouvido', 'Mochila eletrônica']
  },
  {
    icon: '🧵', name: 'Alfaiate',
    quote: '"Roupas e equipamento corretos podem significar a diferença entre viver e morrer."',
    desc: 'Você costura, repara e adapta roupas e equipamentos. Sabe fazer proteções e modificações úteis.',
    skills: ['Costura', 'Design'],
    power: { name: 'Equipamento Reforçado', desc: 'Pode criar roupas e bolsas mais resistentes. +1 em redução de dano por proteção.' },
    equip: ['Agulha e linha', 'Tesoura', 'Roupas extras', 'Arreios', 'Mochila reforçada']
  },
  {
    icon: '⚔️', name: 'Gladiador',
    quote: '"Toda minha vida foi luta. Zumbis não são diferentes de meus inimigos anteriores."',
    desc: 'Você foi um lutador profissional. Disciplina, técnica e experiência em combate corpo a corpo.',
    skills: ['Combate Corpo a Corpo', 'Resistência'],
    power: { name: 'Técnica Superior', desc: 'Em combate corpo a corpo, seu ataque causa +2 de dano e desconsidera 1 ponto de armadura do inimigo.' },
    equip: ['Luvas de combate', 'Bandagens', 'Escudo improvisado', 'Bastão reforçado', 'Mochila de combate']
  },
  {
    icon: '🔬', name: 'Cientista',
    quote: '"A ciência é o método. E método nunca falha, apenas revela novas verdades."',
    desc: 'Você entende o mundo através da lógica e do método científico. Pode analisar e deduzir coisas complexas.',
    skills: ['Ciência', 'Análise'],
    power: { name: 'Análise Profunda', desc: 'Pode entender a natureza de qualquer situação biológica ou química em 10 minutos.' },
    equip: ['Kit de análise', 'Microscópio portátil', 'Tubos de teste', 'Notas científicas', 'Mochila de laboratório']
  },
  {
    icon: '🗺️', name: 'Cartógrafo',
    quote: '"Mapas mentem, mas padrões não. Se você sabe ler o terreno, sempre sabe onde está."',
    desc: 'Você criava mapas e entendia geografia. Conhece terreno, rotas e padrões do mundo.',
    skills: ['Navegação', 'Natureza'],
    power: { name: 'Mapa Mental', desc: 'Nunca se perde. Pode traçar rotas ótimas por qualquer lugar. +2 em navegação.' },
    equip: ['Mapa regional', 'Bússola', 'Cordas de escalada', 'Lanterna', 'Mochila de exploração']
  },
  {
    icon: '💍', name: 'Joalheiro',
    quote: '"Mesmo no fim, o valor está nos detalhes pequenos e precisos."',
    desc: 'Você criava jóias com precisão extrema. Suas mãos finas conseguem trabalhos delicados impossíveis para outros.',
    skills: ['Artesanato Fino', 'Observação'],
    power: { name: 'Mãos Precisas', desc: 'Consegue desativar armadilhas e abrir fechaduras com mais facilidade. +3 em destreza fina.' },
    equip: ['Ferramentas de joalheiro', 'Fio fino', 'Lente de aumento', 'Pequeno tesouro', 'Mochila de precisão']
  },
  {
    icon: '🐴', name: 'Cavalariço',
    quote: '"Animais não mentem. Se você entender eles, eles não te abandonam."',
    desc: 'Você cuidava e entendia animais. Sua empatia com criaturas é profunda.',
    skills: ['Adestramento', 'Empatia'],
    power: { name: 'Amigo Animal', desc: 'Pode acalmar qualquer animal. Se um o acompanhar, ganha +2 em testes relacionados àquele animal.' },
    equip: ['Sela portátil', 'Comida de animal', 'Corda forte', 'Pentes', 'Mochila de amazém']
  },
  {
    icon: '🎭', name: 'Ator',
    quote: '"A vida é um palco. E eu sou muito bom em fingir."',
    desc: 'Você vivia de fingimentos e criação de personagens. Sabe mentir tão bem que até você acredita.',
    skills: ['Atuação', 'Enganação'],
    power: { name: 'Mestre da Ilusão', desc: 'Pode ganhar uma identidade alternativa completamente convincente. +3 em enganação.' },
    equip: ['Maquiagem', 'Roupas extras', 'Documentos falsos', 'Espelho pequeno', 'Mochila de disfarce']
  }
];

// Inject origins section
setTimeout(() => {
  const origensSection = document.getElementById('origens');
  if (origensSection) {
    origensSection.innerHTML = `
      <h3>O que você fazia antes do fim?</h3>
      <p>Sua origem define o que você sabia fazer antes do mundo acabar. Escolha a origem que mais representa seu personagem.</p>
      <p><strong>Total de Origens:</strong> 20 - Cada uma oferece habilidades, perícias e equipamentos únicos</p>
      
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
