const groups = [
  ['🏠', 'Início', [['Visão geral', 'top']]],
  ['📖', 'Introdução', [['História', 'introducao'], ['Como jogar', 'introducao'], ['Diferenças do T20', 'introducao']]],
  ['👤', 'Personagens', [['Classes', 'personagens'], ['Origens', 'personagens'], ['Atributos', 'personagens'], ['Perícias', 'personagens'], ['Vantagens', 'personagens']]],
  ['🧟', 'Sobrevivência', [['Fome', 'sobrevivencia'], ['Sede', 'sobrevivencia'], ['Sono', 'sobrevivencia'], ['Infecção', 'sobrevivencia'], ['Moral', 'sobrevivencia'], ['Tensão', 'sobrevivencia']]],
  ['⚔', 'Combate', [['Armas corpo a corpo', 'combate'], ['Armas de fogo', 'combate'], ['Munição', 'combate'], ['Barulho', 'combate'], ['Mira', 'combate'], ['Cobertura', 'combate']]],
  ['☣', 'Zumbis', [['Zumbi comum', 'zumbis'], ['Corredor', 'zumbis'], ['Mutantes', 'zumbis'], ['Chefes', 'zumbis']]],
  ['🎒', 'Equipamentos', [['Mochilas', 'equipamentos'], ['Ferramentas', 'equipamentos'], ['Medicina', 'equipamentos'], ['Comida', 'equipamentos'], ['Água', 'equipamentos'], ['Combustível', 'equipamentos']]],
  ['🏠', 'Bases', [['Construções', 'bases'], ['Melhorias', 'bases'], ['Defesas', 'bases'], ['Energia', 'bases'], ['Oficina', 'bases']]],
  ['🚗', 'Veículos', [['Carro', 'veiculos'], ['Moto', 'veiculos'], ['Caminhão', 'veiculos'], ['Helicóptero', 'veiculos']]],
  ['🎲', 'Mestre', [['Eventos', 'mestre'], ['Saques', 'mestre'], ['Tabelas', 'mestre'], ['Missões', 'mestre'], ['NPCs', 'mestre']]],
];
const nav = document.querySelector('#navigation');
nav.innerHTML = groups.map(([icon, title, links], index) => `<details class="nav-group" ${index < 2 ? 'open' : ''}><summary>${icon} ${title}</summary>${links.map(([label, target]) => `<a href="#${target}">${label}</a>`).join('')}</details>`).join('');

const body = document.body;
const themeButton = document.querySelector('#themeButton');
const savedTheme = localStorage.getItem('t20-theme');
if (savedTheme === 'dark') body.classList.add('dark');
themeButton.addEventListener('click', () => { body.classList.toggle('dark'); localStorage.setItem('t20-theme', body.classList.contains('dark') ? 'dark' : 'light'); });

const sidebar = document.querySelector('.sidebar');
const menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', () => { const open = sidebar.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); });
nav.addEventListener('click', event => { if (event.target.matches('a')) sidebar.classList.remove('open'); });

const search = document.querySelector('#searchInput');
const results = document.querySelector('#searchResults');
const pages = [...document.querySelectorAll('[data-page]')];
search.addEventListener('input', () => { const query = search.value.trim().toLocaleLowerCase('pt-BR'); if (!query) return results.classList.remove('visible'); const matches = pages.filter(page => page.textContent.toLocaleLowerCase('pt-BR').includes(query)).slice(0, 6); results.innerHTML = matches.length ? matches.map(page => `<a href="#${page.id || 'top'}"><strong>${page.dataset.page}</strong><br><small>${page.textContent.trim().replace(/\s+/g, ' ').slice(0, 80)}…</small></a>`).join('') : '<a>Nenhuma regra encontrada.</a>'; results.classList.add('visible'); });
results.addEventListener('click', () => { results.classList.remove('visible'); search.value = ''; });
