// ==========================================
// DADOS DAS CLASSES
// ==========================================
const militaryDetails = `
  <p class="class-tagline">“A disciplina salva vidas quando o mundo entra em colapso.”</p>
  <p>O Militar representa soldados das forças armadas, policiais, agentes de segurança, guardas patrimoniais e qualquer pessoa que tenha recebido treinamento formal de combate antes do colapso. Enquanto outros lutam por instinto, ele luta por procedimento: usa coberturas, economiza munição, coordena aliados e conserva a calma diante de uma horda.</p>
  <p>É a classe indicada para a linha de frente, para a proteção do grupo e para o uso eficiente de armas de fogo.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>24 + Constituição</span></div><div><strong>Por nível</strong><span>6 + Constituição</span></div><div><strong>PA inicial</strong><span>3 + Sabedoria</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5>
  <p>Os PA substituem Pontos de Mana para esta classe. Eles representam foco, treinamento, resistência física e controle emocional sob pressão.</p>
  <h5>Papel no grupo</h5>
  <p>O Militar controla o campo de batalha, protege aliados e elimina ameaças antes que elas se aproximem. É particularmente eficiente contra grupos numerosos de inimigos.</p>
  <h5>Proficiências</h5>
  <p>Você é proficiente com todas as armas corpo a corpo, armas improvisadas e armas de fogo, além de escudos balísticos, coletes balísticos e equipamentos táticos.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p>Escolha <b>Força</b>, para espingardas, escudos, combate corpo a corpo e arrombamentos; ou <b>Destreza</b>, para pistolas, rifles, precisão e cobertura.</p></div><div><strong>Atributo secundário</strong><p><b>Constituição.</b> Afeta sua Vida, resistência, corridas e testes contra infecção.</p></div></div>
  <h5>Perícias</h5>
  <p>Você recebe treinamento em <b>Pontaria, Luta, Percepção, Atletismo</b> e <b>Intimidação</b>. Escolha mais duas perícias.</p>
  <h5>Habilidades de classe</h5>
  <dl class="ability-list">
    <div><dt>Treinamento Militar</dt><dd>Você recebe +2 em Iniciativa e +2 em testes de Percepção realizados durante combates.</dd></div>
    <div><dt>Cobertura Tática</dt><dd>Enquanto estiver atrás de cobertura, recebe +2 em Defesa. Ao gastar 1 PA, esse bônus se torna +4 até o início do seu próximo turno.</dd></div>
    <div><dt>Troca Rápida</dt><dd>Trocar entre duas armas passa a ser uma ação livre. Por exemplo, você pode trocar uma pistola por uma espingarda sem gastar uma ação.</dd></div>
    <div><dt>Rajada Controlada</dt><dd><b>Pré-requisito:</b> arma automática. Ao realizar uma rajada, você pode gastar 1 PA para receber +2 no ataque e consumir uma munição a menos. Uma rajada de cinco disparos, por exemplo, passa a consumir quatro.</dd></div>
    <div><dt>Fogo de Supressão</dt><dd>Gaste 2 PA e escolha uma área de 3 m. Até o início do seu próximo turno, qualquer criatura que entrar nela deve fazer um teste de Reflexos contra CD 10 + metade do seu nível + Destreza. Em caso de falha, sofre 1d8 de dano e fica <b>Amedrontada</b>.</dd></div>
    <div><dt>Sangue Frio</dt><dd>Você recebe +5 em testes contra Medo, Intimidação e Pânico.</dd></div>
    <div><dt>Mira Treinada</dt><dd>Gaste 1 PA para receber +2 no próximo ataque. Se permanecer parado até realizá-lo, o bônus aumenta para +4.</dd></div>
    <div><dt>Avanço Tático</dt><dd>Ao derrubar um inimigo, você pode se mover 3 m sem provocar ataques.</dd></div>
    <div><dt>Líder de Esquadrão</dt><dd>Em um nível definido pelo mestre, você pode gastar 2 PA para coordenar aliados em alcance curto. Até o início do seu próximo turno, eles recebem +2 em testes de ataque, Percepção e testes para resistir ao medo. Esse efeito não se acumula com outro uso desta habilidade.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5>
  <dl class="ability-list">
    <div><dt>Atirador de Elite</dt><dd><b>Pré-requisito:</b> Destreza 3. Ao atacar à distância um alvo que ainda não agiu na rodada, recebe +2 no ataque.</dd></div>
    <div><dt>Escudo Humano</dt><dd><b>Pré-requisito:</b> Força 3. Quando um aliado adjacente sofrer um ataque, você pode usar sua reação para fazer com que o ataque seja contra você.</dd></div>
    <div><dt>Veterano</dt><dd>Uma vez por combate, você pode repetir um teste de ataque.</dd></div>
    <div><dt>Tiro Preciso</dt><dd>Você recebe +1 na margem de ameaça com armas de fogo.</dd></div>
    <div><dt>Combate Urbano</dt><dd>Enquanto estiver dentro de construções, corredores ou escadas, recebe +2 em Defesa.</dd></div>
    <div><dt>Resistência Física</dt><dd>Você recebe +3 em testes contra Exaustão, Fome, Sede e Sono.</dd></div>
    <div><dt>Munição Econômica</dt><dd>Sempre que obtiver um 20 natural em um ataque com arma de fogo, recupere 1 ponto de munição do carregador; isso representa um disparo perfeitamente controlado.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5>
  <div class="choice-grid"><div><strong>Kit Militar</strong><p>Pistola, 3 carregadores, faca militar, colete balístico, rádio e mochila.</p></div><div><strong>Kit Policial</strong><p>Revólver, 2 carregadores ou cartucheiras (conforme a arma), cassetete, algemas, colete e lanterna.</p></div></div>
  <h5>Evolução</h5>
  <ul class="progression"><li><b>Níveis 1–5:</b> domina armas e cobertura.</li><li><b>Níveis 6–10:</b> controla áreas, protege aliados e melhora o uso de munição.</li><li><b>Níveis 11–15:</b> torna-se especialista em hordas e coordenação de equipe.</li><li><b>Níveis 16–20:</b> lidera esquadrões, mantém a calma sob pressão extrema e transforma disciplina em uma grande vantagem do grupo.</li></ul>`;

const survivorDetails = `
  <p class="class-tagline">“Você não vence porque é mais forte. Vence porque ainda está vivo.”</p>
  <p>Enquanto a maioria procura um abrigo seguro, o Sobrevivente entra em prédios abandonados, atravessa ruas infestadas e retorna carregando os recursos que mantêm o grupo vivo. Ele representa exploradores urbanos, invasores, entregadores, escaladores, caçadores de suprimentos, moradores de rua e qualquer pessoa que aprendeu a improvisar para continuar respirando.</p>
  <p>Seu maior talento não é lutar. É voltar vivo.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>16 + Constituição</span></div><div><strong>Por nível</strong><span>4 + Constituição</span></div><div><strong>PA inicial</strong><span>4 + Sabedoria</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5><p>Seus PA representam reflexos, concentração e improvisação: a capacidade de reagir ao perigo antes que ele o alcance.</p>
  <h5>Papel no grupo</h5><p>O Sobrevivente explora áreas perigosas, recupera recursos, evita confrontos desnecessários, abre caminhos, detecta ameaças e encontra rotas alternativas. É a classe com maior mobilidade do jogo.</p>
  <h5>Proficiências</h5><p>Você é proficiente com facas, facões, bastões, pistolas, ferramentas simples e armas improvisadas. Não possui treinamento com armas pesadas.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Destreza.</b> Afeta ataques leves à distância, esquiva, Furtividade, Reflexos e escalada.</p></div><div><strong>Atributo secundário</strong><p><b>Sabedoria.</b> Afeta Percepção, Sobrevivência, Investigação, detecção de armadilhas e busca por recursos.</p></div></div>
  <h5>Perícias</h5><p>Você recebe treinamento em <b>Furtividade, Crime (Arrombamento), Investigação, Reflexos</b> e <b>Sobrevivência</b>. Escolha mais duas perícias.</p>
  <h5>Habilidades de classe</h5>
  <dl class="ability-list">
    <div><dt>Instinto de Sobrevivência</dt><dd>Você recebe +2 em testes de Iniciativa e Reflexos, além de +2 em testes para evitar armadilhas e emboscadas.</dd></div>
    <div><dt>Explorador Urbano</dt><dd>Ao explorar construções, ruas ou esgotos, você ignora terreno difícil causado por entulho, recebe +2 em Atletismo para escalar ou saltar obstáculos e atravessa janelas ou passagens estreitas sem penalidade.</dd></div>
    <div><dt>Furtividade Natural</dt><dd>Sempre que terminar seu movimento atrás de cobertura ou em pouca iluminação, você pode gastar 1 PA para fazer um teste de Furtividade como ação livre.</dd></div>
    <div><dt>Arrombador</dt><dd>Você recebe +5 em testes para abrir portas, cadeados e cofres. Ferramentas improvisadas reduzem a penalidade em testes de Crime. Em um 20 natural, o arrombamento é silencioso.</dd></div>
    <div><dt>Ataque Oportunista</dt><dd>Quando atacar um alvo que ainda não agiu na rodada, esteja desprevenido, distraído ou flanqueado, você causa +1d6 de dano. Esse dano aumenta conforme a progressão de Ataque Furtivo do Ladino em T20.</dd></div>
    <div><dt>Saqueador</dt><dd>Ao realizar uma ação de saque, faça um teste de Investigação com +5. Se obtiver sucesso por 10 ou mais, encontra um recurso adicional definido pelo mestre, como munição, medicamentos, comida ou ferramentas.</dd></div>
    <div><dt>Movimento Silencioso</dt><dd>Enquanto estiver caminhando, e não correndo, você não gera Pontos de Barulho pelo deslocamento. Aliados em alcance curto recebem +2 em Furtividade se seguirem suas instruções.</dd></div>
    <div><dt>Olhos Abertos</dt><dd>Você recebe +5 em Percepção para detectar armadilhas, emboscadas e portas secretas. Não pode ser Surpreendido por uma criatura que tenha falhado em um teste oposto de Furtividade contra sua Percepção.</dd></div>
    <div><dt>Escapista</dt><dd>Quando estiver agarrado, cercado ou preso, você pode gastar 1 PA para fazer imediatamente um novo teste para escapar com +5.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5>
  <dl class="ability-list">
    <div><dt>Mochila Organizada</dt><dd>Sua capacidade de carga aumenta em 25%. Além disso, retirar um item da mochila passa a ser uma ação livre uma vez por rodada.</dd></div>
    <div><dt>Coletor</dt><dd>Ao encontrar suprimentos, role duas vezes na tabela de saque e escolha o melhor resultado.</dd></div>
    <div><dt>Corredor</dt><dd>Sua velocidade aumenta em 3 m. Você pode correr por uma rodada adicional antes de fazer testes contra fadiga.</dd></div>
    <div><dt>Fantasma</dt><dd><b>Pré-requisito:</b> Destreza 3. Enquanto permanecer imóvel atrás de cobertura ou em sombras, recebe +5 em Furtividade.</dd></div>
    <div><dt>Improvisador</dt><dd>Uma vez por cena, você pode transformar um objeto comum — como cano, cadeira, barra de ferro ou extintor — em arma improvisada sem sofrer penalidades até o fim da cena.</dd></div>
    <div><dt>Sentido Aguçado</dt><dd>Você recebe +2 em Percepção e Investigação, inclusive para encontrar passagens escondidas e esconderijos de recursos.</dd></div>
    <div><dt>Última Chance</dt><dd>Uma vez por combate, quando um ataque o reduziria a 0 PV, você pode gastar 2 PA para permanecer com 1 PV. Só pode usar esta habilidade novamente após um descanso completo.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5>
  <div class="choice-grid"><div><strong>Kit Urbano</strong><p>Faca, pistola, 2 carregadores, mochila média, lanterna, kit de arrombamento e corda de 15 m.</p></div><div><strong>Kit Explorador</strong><p>Facão, pé de cabra, mochila grande, binóculo, cantil e corda de 20 m.</p></div></div>
  <h5>Evolução</h5>
  <ul class="progression"><li><b>Níveis 1–5:</b> foco em furtividade, mobilidade e exploração.</li><li><b>Níveis 6–10:</b> especializa-se em saques, infiltração e ataques oportunistas.</li><li><b>Níveis 11–15:</b> torna-se difícil de emboscar e domina ambientes urbanos.</li><li><b>Níveis 16–20:</b> atravessa áreas extremamente perigosas, encontra recursos onde ninguém mais conseguiria e escapa de situações aparentemente sem saída.</li></ul>`;

const mechanicDetails = `
  <p class="class-tagline">“Se ainda funciona, eu consigo melhorar.”</p>
  <p>O Mecânico representa engenheiros, mecânicos automotivos, eletricistas, técnicos de manutenção, soldadores, marceneiros e qualquer pessoa que dominava ferramentas antes do colapso. Quando uma arma emperra, um gerador para ou um veículo precisa cruzar estradas destruídas, é ele quem faz a diferença.</p>
  <p>Esta é a classe que transforma sucata em recursos úteis.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>18 + Constituição</span></div><div><strong>Por nível</strong><span>5 + Constituição</span></div><div><strong>PA inicial</strong><span>5 + Inteligência</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5><p>Seus PA representam concentração, conhecimento técnico e improvisação sob pressão.</p>
  <h5>Papel no grupo</h5><p>O Mecânico faz manutenção de armas, fabrica munição, ergue barricadas, melhora a base, repara veículos, cria armadilhas e recupera equipamentos danificados.</p>
  <h5>Proficiências</h5><p>Você é proficiente com ferramentas de construção, eletrônica e mecânica automotiva, armas improvisadas, pistolas, revólveres, facas e martelos. Não possui treinamento com armas militares pesadas.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Inteligência.</b> Afeta construção, reparos, fabricação, armadilhas e melhorias.</p></div><div><strong>Atributo secundário</strong><p><b>Destreza.</b> Afeta trabalhos delicados, soldagem, eletrônica, arrombamento técnico e pilotagem.</p></div></div>
  <h5>Perícias</h5><p>Você recebe treinamento em <b>Ofício, Tecnologia, Investigação</b> e <b>Pilotagem</b>. Escolha mais duas perícias.</p>
  <h5>Habilidades de classe</h5>
  <dl class="ability-list">
    <div><dt>Improvisador Nato</dt><dd>Ao fabricar um item usando sucata, você recebe +2 no teste de Ofício. Se obtiver sucesso por 10 ou mais, consome 25% menos materiais, arredondando para cima.</dd></div>
    <div><dt>Reparo de Campo</dt><dd>Durante um descanso curto, gaste 1 PA e faça um teste de Ofício contra CD definida pelo mestre. Em caso de sucesso, restaura a condição normal de um equipamento, como arma emperrada, rádio, lanterna, gerador portátil, ferramenta ou motor simples.</dd></div>
    <div><dt>Armeiro</dt><dd>Ao limpar ou reparar uma arma, escolha: ela recebe +1 nas jogadas de ataque ou reduz em 1 sua chance de emperramento, se essa regra estiver em uso. O benefício dura até o próximo descanso longo. Armas que você mantém não sofrem penalidade por desgaste enquanto estiverem em boas condições.</dd></div>
    <div><dt>Fabricante de Munição</dt><dd>Durante um descanso, faça um teste de Ofício (Armeiro) contra a CD do tipo de munição. Em caso de sucesso, produza munição conforme a tabela de fabricação. Uma margem alta aumenta a quantidade produzida ou reduz componentes, a critério do mestre.</dd></div>
    <div><dt>Barricada Improvisada</dt><dd>Com 10 minutos e materiais adequados, faça um teste de Ofício para construir uma barricada. Um sucesso cria cobertura leve; sucesso por 5 ou mais cria cobertura pesada. Seus Pontos de Estrutura dependem dos materiais, conforme o mestre.</dd></div>
    <div><dt>Engenheiro de Armadilhas</dt><dd>Você pode construir armadilhas sonoras, de espinhos, fios de tropeço, incendiárias e elétricas (se houver energia). Faça um teste de Ofício; a CD para detectar ou evitar a armadilha é baseada no resultado obtido.</dd></div>
    <div><dt>Eletricista</dt><dd>Você recebe +5 em testes relacionados a geradores, painéis, portas automáticas, sistemas de energia e cercas elétricas.</dd></div>
    <div><dt>Oficina Portátil</dt><dd>Uma vez por cena, você pode gastar 1 PA para ignorar penalidades por falta de bancada ou oficina adequada em um teste de Ofício.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5>
  <dl class="ability-list">
    <div><dt>Mecânica Avançada</dt><dd><b>Pré-requisito:</b> Inteligência 3. Sempre que reparar um veículo, ele recupera 50% mais Durabilidade.</dd></div>
    <div><dt>Ajuste Fino</dt><dd>Após 30 minutos trabalhando em uma arma, escolha um benefício até o próximo descanso longo: +1 no ataque, +1 no dano ou redução no tempo de recarga, quando aplicável. Uma arma só pode ter um ajuste por vez.</dd></div>
    <div><dt>Veículo Reforçado</dt><dd>Ao melhorar um veículo, escolha +10% de Durabilidade, capacidade de carga ou autonomia de combustível, ou +2 em Defesa contra colisões. Melhorias diferentes podem se acumular, respeitando o limite do mestre.</dd></div>
    <div><dt>Reciclagem</dt><dd>Ao desmontar um equipamento, você recupera 50% dos materiais usados em sua construção original, arredondando para baixo.</dd></div>
    <div><dt>Construção Rápida</dt><dd>Você reduz pela metade o tempo para construir barricadas, reparar estruturas, instalar armadilhas e montar oficinas temporárias.</dd></div>
    <div><dt>Mestre da Gambiarra</dt><dd>Uma vez por cena, faça um objeto quebrado funcionar por até 10 minutos — como rádio danificado, lanterna sem interruptor, gerador instável ou motor avariado. Ao fim do tempo, ele volta ao estado anterior.</dd></div>
    <div><dt>Oficina Móvel</dt><dd>Próximo a um veículo equipado como oficina, seus testes de Ofício recebem +2. Aliados treinados em Ofício também recebem esse bônus.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5>
  <div class="choice-grid"><div><strong>Kit Oficina</strong><p>Caixa de ferramentas, martelo, chave inglesa, alicate, fita isolante, mochila média, pistola e 2 carregadores.</p></div><div><strong>Kit Eletricista</strong><p>Multímetro, kit de eletrônica, ferro de solda portátil, lanterna, bateria reserva, mochila pequena, revólver e 24 munições.</p></div></div>
  <h5>Evolução</h5>
  <ul class="progression"><li><b>Níveis 1–5:</b> domina reparos simples e manutenção de equipamentos.</li><li><b>Níveis 6–10:</b> fabrica munição, constrói barricadas e instala armadilhas complexas.</li><li><b>Níveis 11–15:</b> torna-se referência em melhorias para armas, veículos e infraestrutura da base.</li><li><b>Níveis 16–20:</b> mantém comunidades inteiras funcionando, coordenando oficinas, sistemas elétricos e grandes projetos de construção.</li></ul>`;

const trackerDetails = `
  <p class="class-tagline">“Toda pegada conta uma história. O segredo é saber interpretá-la antes que seja tarde.”</p>
  <p>O Rastreador representa caçadores, guias de trilha, guardas florestais, exploradores, biólogos de campo, escoteiros e especialistas em reconhecimento. Em um mundo devastado, ele encontra água, comida, rotas seguras e abrigo; onde outros veem árvores e ruínas, ele encontra pegadas, sangue seco, fumaça distante e sinais de uma horda.</p>
  <p>Ele raramente lidera um ataque, mas frequentemente impede que o grupo caminhe direto para um desastre.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>20 + Constituição</span></div><div><strong>Por nível</strong><span>5 + Constituição</span></div><div><strong>PA inicial</strong><span>4 + Sabedoria</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5><p>Seus PA representam percepção aguçada, experiência em campo e resistência mental.</p>
  <h5>Papel no grupo</h5><p>O Rastreador guia expedições, encontra recursos naturais e sobreviventes, identifica hordas e armadilhas, escolhe caminhos seguros e avisa o grupo antes do combate. É a classe que reduz os riscos da exploração.</p>
  <h5>Proficiências</h5><p>Você é proficiente com arcos e bestas, caso existam no cenário, rifles de caça, espingardas, facões, machados, facas e lanças improvisadas. Também domina equipamentos de navegação e sobrevivência.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Sabedoria.</b> Afeta Sobrevivência, Percepção, rastreamento, orientação, busca por recursos e identificação de perigos.</p></div><div><strong>Atributo secundário</strong><p><b>Destreza.</b> Afeta Furtividade, Atletismo, Reflexos, escalada e armas de precisão.</p></div></div>
  <h5>Perícias</h5><p>Você recebe treinamento em <b>Sobrevivência, Percepção, Atletismo</b> e <b>Furtividade</b>. Escolha mais duas perícias.</p>
  <h5>Habilidades de classe</h5>
  <dl class="ability-list">
    <div><dt>Leitor de Rastros</dt><dd>Você recebe +5 em Sobrevivência para rastrear criaturas. Identifica quantos indivíduos passaram, a direção seguida e há quanto tempo. Em uma margem ampla, o mestre também pode revelar feridos, veículos ou carga pesada.</dd></div>
    <div><dt>Olhos do Horizonte</dt><dd>Você recebe +2 em Percepção e +2 em Iniciativa durante expedições. Além disso, não sofre penalidade por estar de vigia durante a noite.</dd></div>
    <div><dt>Guia de Expedição</dt><dd>Enquanto liderar a movimentação, os aliados recebem +2 em Sobrevivência para navegação e para evitar se perder. O mestre pode reduzir o tempo necessário para encontrar locais seguros.</dd></div>
    <div><dt>Caçador de Recursos</dt><dd>Ao procurar água, comida, lenha ou plantas medicinais, você recebe +5 em Sobrevivência. Em uma margem ampla, encontra o suficiente para alimentar ou abastecer uma pessoa adicional.</dd></div>
    <div><dt>Sentidos Aguçados</dt><dd>Você recebe +5 para detectar armadilhas, passagens escondidas e emboscadas. Se for surpreendido, pode gastar 1 PA para fazer imediatamente um novo teste de Percepção.</dd></div>
    <div><dt>Farejador de Hordas</dt><dd>Antes de entrar em uma nova área, gaste 1 PA e faça um teste de Sobrevivência. O mestre informa uma pista sobre o perigo predominante, como zumbis recentes, quantidade aproximada, sobreviventes, animais ou confronto recente.</dd></div>
    <div><dt>Passo Silencioso</dt><dd>Enquanto liderar uma exploração, aliados em alcance curto recebem +2 em Furtividade e o deslocamento do grupo gera metade dos Pontos de Barulho normais.</dd></div>
    <div><dt>Caçador Paciente</dt><dd>Ao usar arma de precisão ou realizar um ataque preparado contra um alvo que ainda não percebeu sua presença, você recebe +2 no ataque. Se acertar, causa +1d6 de dano; esse bônus aumenta conforme os níveis da classe.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5>
  <dl class="ability-list">
    <div><dt>Navegador</dt><dd>Você nunca se perde em ambientes naturais, recebe +5 em testes de navegação e ignora penalidades por clima desfavorável ao se orientar.</dd></div>
    <div><dt>Instinto Selvagem</dt><dd>Uma vez por cena, gaste 1 PA para repetir um teste de Percepção, Sobrevivência ou Atletismo. Você deve usar o novo resultado.</dd></div>
    <div><dt>Caçador Noturno</dt><dd>Em pouca iluminação, você recebe +2 em Percepção e Furtividade.</dd></div>
    <div><dt>Mestre da Caça</dt><dd>Sempre que derrotar um animal ou encontrar uma fonte de alimento, você obtém recursos para alimentar uma pessoa adicional, desde que tenha tempo para coleta e preparo.</dd></div>
    <div><dt>Armadilheiro</dt><dd>Você pode construir armadilhas de laço, fossos rasos, alarmes improvisados e armadilhas de contenção. A CD para detectá-las ou escapar delas é baseada no resultado do seu teste de Sobrevivência.</dd></div>
    <div><dt>Vigor do Explorador</dt><dd>Você recebe +3 em testes contra fadiga, frio, calor e exposição prolongada.</dd></div>
    <div><dt>Reconhecimento Avançado</dt><dd>Antes de iniciar uma exploração, gaste 2 PA. O mestre deve fornecer uma informação útil sobre a área, como rota de acesso, pontos de observação, fontes de água, riscos naturais ou vestígios humanos.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5>
  <div class="choice-grid"><div><strong>Kit do Explorador</strong><p>Facão, rifle de caça, 20 munições, binóculo, mochila grande, corda de 20 m, cantil e kit de sobrevivência.</p></div><div><strong>Kit do Guarda Florestal</strong><p>Espingarda, 16 cartuchos, machado de mão, bússola, mapa, mochila média e kit de primeiros socorros.</p></div></div>
  <h5>Evolução</h5>
  <ul class="progression"><li><b>Níveis 1–5:</b> rastreia, encontra recursos e orienta o grupo.</li><li><b>Níveis 6–10:</b> evita perigos, detecta armadilhas e conduz expedições seguras.</li><li><b>Níveis 11–15:</b> domina grandes áreas e identifica ameaças antes de qualquer confronto.</li><li><b>Níveis 16–20:</b> guia communities por territórios hostis, prevê hordas e encontra recursos onde ninguém mais conseguiria.</li></ul>`;

const mercenaryDetails = `
  <p class="class-tagline">“No fim do mundo, ninguém pergunta quem você era. Só importa se consegue manter os outros vivos — ou eliminar quem ameaça o grupo.”</p>
  <p>O Mercenário representa ex-soldados particulares, seguranças privados, membros de facções, lutadores e caçadores de recompensas acostumados a resolver problemas pela força. Sem a disciplina do Militar ou a precisão do Rastreador, seu estilo é direto, brutal e eficiente.</p><p>Quando uma horda precisa ser contida ou um mutante precisa cair, o Mercenário entra em ação.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>26 + Constituição</span></div><div><strong>Por nível</strong><span>6 + Constituição</span></div><div><strong>PA inicial</strong><span>3 + Constituição</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5><p>Seus PA representam agressividade, resistência física e instinto de combate.</p>
  <h5>Papel no grupo</h5><p>O Mercenário elimina ameaças prioritárias, protege corredores de fuga, abre caminho em hordas, sustenta confrontos longos e intimida inimigos humanos. É a classe com maior potencial de dano contínuo.</p>
  <h5>Proficiências</h5><p>Você é proficiente com todas as armas corpo a corpo e improvisadas, pistolas, revólveres, espingardas, rifles, armas automáticas, escudos improvisados e colete balístico.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Força.</b> Afeta ataques corpo a corpo, empurrões, agarrões, portas e armas pesadas.</p></div><div><strong>Atributo secundário</strong><p><b>Constituição.</b> Afeta PV, resistência, exaustão, infecção e confrontos prolongados.</p></div></div>
  <h5>Perícias</h5><p>Você recebe treinamento em <b>Luta, Pontaria, Intimidação</b> e <b>Atletismo</b>. Escolha mais duas perícias.</p>
  <h5>Habilidades de classe</h5><dl class="ability-list">
    <div><dt>Brutalidade</dt><dd>Sempre que acertar um ataque corpo a corpo, causa +2 de dano. O bônus aumenta para +4 no 10º nível e +6 no 18º nível.</dd></div>
    <div><dt>Pressão Constante</dt><dd>Enquanto estiver adjacente a um inimigo, recebe +2 nas jogadas de ataque contra ele.</dd></div>
    <div><dt>Lutador de Rua</dt><dd>Em corredores, becos, construções ou escadas, você recebe +2 em Defesa e +2 em testes para empurrar ou derrubar inimigos.</dd></div>
    <div><dt>Intimidação Violenta</dt><dd>Gaste 1 PA e faça um teste de Intimidação. Inimigos humanos em alcance curto fazem um teste de Vontade; em falha, ficam <b>Abalados</b> até o início do seu próximo turno. Criaturas inteligentes impressionáveis podem recuar, a critério do mestre.</dd></div>
    <div><dt>Sangue Quente</dt><dd>Sempre que sofrer dano, recebe +1 em ataques contra quem o atingiu até o fim de seu próximo turno. O bônus não se acumula consigo mesmo.</dd></div>
    <div><dt>Combate Desesperado</dt><dd>Com metade ou menos dos PV, você recebe +2 no dano e +2 em testes de resistência contra medo.</dd></div>
    <div><dt>Predador Urbano</dt><dd>Uma vez por rodada, você pode usar paredes, veículos, móveis ou grades para obter cobertura parcial sem reduzir seu deslocamento.</dd></div>
    <div><dt>Rompedor</dt><dd>Ao destruir um obstáculo, como porta, janela ou barricada frágil, você recebe uma ação de movimento adicional naquela rodada.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5><dl class="ability-list">
    <div><dt>Executor</dt><dd>Uma vez por turno, ao derrotar um inimigo, você pode se mover 3 m sem provocar ataques de oportunidade.</dd></div>
    <div><dt>Instinto Assassino</dt><dd>Ao atacar um alvo que ainda não agiu na rodada, recebe +2 no ataque.</dd></div>
    <div><dt>Inquebrável</dt><dd>Você recebe +5 em testes contra medo, intimidação, dor e tortura.</dd></div>
    <div><dt>Último Homem de Pé</dt><dd>Uma vez por descanso longo, quando seria reduzido a 0 PV, gaste 2 PA para permanecer com 1 PV. Até o fim de seu próximo turno, recebe +2 em ataques e dano.</dd></div>
    <div><dt>Combate Cercado</dt><dd>Enquanto estiver adjacente a dois ou mais inimigos, recebe +2 em Defesa e dano. No 12º nível, esses bônus aumentam para +3.</dd></div>
    <div><dt>Especialista em Armas Improvisadas</dt><dd>Você recebe +2 em ataques com armas improvisadas, que causam um passo de dano acima do normal; por exemplo, 1d6 se torna 1d8.</dd></div>
    <div><dt>Adrenalina de Combate</dt><dd>Ao derrotar um inimigo, você pode recuperar 1 PA. Só pode ativar esta habilidade uma vez por rodada.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5><div class="choice-grid"><div><strong>Kit Mercenário</strong><p>Rifle, 30 munições, faca de combate, colete balístico, mochila média e kit de limpeza de armas.</p></div><div><strong>Kit Lutador</strong><p>Machado, pistola, 24 munições, pé de cabra, colete leve e mochila pequena.</p></div></div>
  <h5>Evolução</h5><ul class="progression"><li><b>Níveis 1–5:</b> domina combate corpo a corpo e ofensivas rápidas.</li><li><b>Níveis 6–10:</b> torna-se perigoso em ambientes urbanos e contra múltiplos inimigos.</li><li><b>Níveis 11–15:</b> controla o ritmo dos confrontos e mantém pressão após cada eliminação.</li><li><b>Níveis 16–20:</b> enfrenta grupos numerosos ou mutantes poderosos e continua avançando mesmo gravemente ferido.</li></ul>`;

const leaderDetails = `
  <p class="class-tagline">“As pessoas não seguem quem grita mais alto. Seguem quem mantém a esperança quando tudo parece perdido.”</p>
  <p>O Líder representa chefes de equipe, oficiais, professores, empresários, líderes comunitários, religiosos e coordenadores de resgate: pessoas acostumadas a tomar decisões difíceis e inspirar confiança. Quando faltam recursos ou a esperança desaparece, ele organiza prioridades e mantém o grupo unido.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>18 + Constituição</span></div><div><strong>Por nível</strong><span>5 + Constituição</span></div><div><strong>PA inicial</strong><span>5 + Carisma</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5><p>Seus PA representam presença de espírito, autoridade e capacidade de motivar pessoas.</p>
  <h5>Papel no grupo</h5><p>O Líder coordena combates e expedições, melhora a eficiência dos aliados, mantém a Moral, resolve conflitos, negocia com comunidades e administra sobreviventes e bases. É a principal classe de suporte estratégico.</p>
  <h5>Proficiências</h5><p>Você é proficiente com pistolas, revólveres, facas, bastões, armas improvisadas e colete leve. Seu foco não são armas pesadas, mas coordenar quem as utiliza.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Carisma.</b> Afeta Diplomacia, liderança, Moral, Intimidação, negociação e recrutamento.</p></div><div><strong>Atributo secundário</strong><p><b>Sabedoria.</b> Afeta Intuição, decisões, estratégia, percepção social e organização de expedições.</p></div></div>
  <h5>Perícias</h5><p>Você recebe treinamento em <b>Diplomacia, Intuição, Intimidação</b> e <b>Guerra</b>. Escolha mais duas perícias.</p>
  <h5>Habilidades de classe</h5><dl class="ability-list">
    <div><dt>Presença Inspiradora</dt><dd>Aliados em alcance curto recebem +1 em testes de Vontade e contra medo e pânico. O bônus aumenta para +2 no 10º nível e +3 no 18º nível.</dd></div>
    <div><dt>Ordem Tática</dt><dd>Gaste 1 PA para dar uma ordem a um aliado em alcance médio que possa ouvi-lo. Até o início de seu próximo turno, ele recebe +2 em ataques, Defesa, perícias ou testes de resistência. Um personagem só pode receber uma Ordem Tática por rodada.</dd></div>
    <div><dt>Moral Inabalável</dt><dd>Uma vez por cena, gaste 2 PA para remover <b>Abalado</b> ou <b>Amedrontado</b> de aliados em alcance curto. Se <b>Apavorado</b> existir na campanha, reduza-o para Amedrontado.</dd></div>
    <div><dt>Coordenador</dt><dd>Quando dois ou mais aliados atacam o mesmo alvo, você pode gastar 1 PA. Eles recebem +1 no ataque contra esse alvo até o fim da rodada.</dd></div>
    <div><dt>Planejamento de Expedição</dt><dd>Antes de viajar ou explorar, invista 10 minutos e faça um teste de Guerra ou Intuição. Em sucesso, escolha: +2 em Sobrevivência para navegação, +2 em Percepção para perigos, menor consumo de suprimentos ou menor chance de encontros aleatórios, a critério do mestre.</dd></div>
    <div><dt>Administrador da Base</dt><dd>Ao passar um descanso longo em uma base organizada por você, escolha um benefício até o próximo descanso: recuperação adicional de PV ou PA, menos tempo para fabricar ou reparar, ou maior produção de recursos da comunidade.</dd></div>
    <div><dt>Negociador Experiente</dt><dd>Você recebe +5 em Diplomacia para negociar recursos, alianças e acordos, além de +2 em Intuição para perceber mentiras em negociações.</dd></div>
    <div><dt>Comando em Crise</dt><dd>Quando um aliado em alcance curto falhar em um teste de resistência, você pode gastar 2 PA como reação para que ele repita o teste. Uma vez por rodada.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5><dl class="ability-list">
    <div><dt>Voz de Comando</dt><dd>Uma vez por rodada, ao usar Ordem Tática, escolha dois aliados em vez de um.</dd></div>
    <div><dt>Recrutador</dt><dd>Você recebe +5 em Diplomacia para convencer um NPC a integrar a comunidade; o tempo para conquistar a confiança de sobreviventes é reduzido, conforme o mestre.</dd></div>
    <div><dt>Estratégia de Combate</dt><dd>No início de um combate, escolha um aliado. Até o fim da cena, ele recebe +2 em Iniciativa e Percepção.</dd></div>
    <div><dt>Última Esperança</dt><dd>Uma vez por descanso longo, quando um aliado seria reduzido a 0 PV, gaste 2 PA para que ele permaneça com 1 PV.</dd></div>
    <div><dt>Rede de Contatos</dt><dd>Você recebe +2 em testes sociais para obter informações, favores ou localizar recursos em assentamentos. O mestre pode fornecer informações adicionais onde houver sobreviventes organizados.</dd></div>
    <div><dt>Liderança Compartilhada</dt><dd>Enquanto estiver consciente, aliados em alcance curto recebem +1 em todas as perícias nas quais são treinados.</dd></div>
    <div><dt>Planejamento Estratégico</dt><dd>Após um descanso longo, escolha uma estratégia para o dia: <b>Ofensiva</b> (+1 em ataques), <b>Defensiva</b> (+1 Defesa), <b>Exploração</b> (+2 em Sobrevivência e Percepção) ou <b>Produção</b> (+2 em Ofício). Ela só muda após novo descanso longo.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5><div class="choice-grid"><div><strong>Kit Coordenador</strong><p>Pistola, 24 munições, rádio comunicador, binóculo, mapa, mochila média e kit de primeiros socorros.</p></div><div><strong>Kit Comunitário</strong><p>Revólver, 18 munições, apito, caderno de anotações, lanterna, mochila pequena e kit de ferramentas leves.</p></div></div>
  <h5>Evolução</h5><ul class="progression"><li><b>Níveis 1–5:</b> inspira aliados e coordena pequenas equipes.</li><li><b>Níveis 6–10:</b> organiza expedições, fortalece a Moral e melhora o desempenho do grupo.</li><li><b>Níveis 11–15:</b> muda o rumo de combates e negociações.</li><li><b>Níveis 16–20:</b> lidera communities inteiras e transforma sobreviventes em uma força organizada.</li></ul>`;

const medicDetails = `
  <p class="class-tagline">“Nem toda batalha é vencida com balas. Algumas são vencidas por quem consegue manter um coração batendo por mais alguns minutos.”</p>
  <p>O Médico representa médicos, enfermeiros, socorristas, paramédicos, veterinários, farmacêuticos e estudantes da saúde. Ele não possui poderes sobrenaturais: seu conhecimento estabiliza feridos, trata doenças, retarda infecções e mantém o grupo vivo em condições precárias.</p><p>Enquanto outras classes vencem combates, o Médico impede que o grupo morra depois deles.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>16 + Constituição</span></div><div><strong>Por nível</strong><span>4 + Constituição</span></div><div><strong>PA inicial</strong><span>5 + Inteligência</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5><p>Seus PA representam concentração, conhecimento técnico e a capacidade de agir sob pressão.</p>
  <h5>Papel no grupo</h5><p>O Médico cura ferimentos, estabiliza aliados, trata doenças, retarda a infecção, administra medicamentos, produz itens médicos e ensina primeiros socorros. É a principal classe de suporte da campanha.</p>
  <h5>Proficiências</h5><p>Você é proficiente com pistolas, revólveres, facas, bisturis, instrumentos cortantes e bastões leves. Não possui treinamento com armas militares pesadas.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Inteligência.</b> Afeta Medicina, medicamentos, diagnósticos, cirurgias, tratamentos e kits médicos.</p></div><div><strong>Atributo secundário</strong><p><b>Sabedoria.</b> Afeta diagnóstico rápido, percepção clínica, sintomas e resistência mental.</p></div></div>
  <h5>Perícias</h5><p>Você recebe treinamento em <b>Medicina, Investigação, Ciências</b> e <b>Sobrevivência</b>. Escolha mais duas perícias.</p>
  <div class="callout warning"><strong>Recurso de classe: suprimentos médicos</strong><p>Suas habilidades exigem recursos físicos como bandagens, gaze, analgésicos, antissépticos, antibióticos e kits médicos. Sem eles, você ainda presta primeiros socorros básicos, mas suas opções ficam limitadas.</p></div>
  <h5>Habilidades de classe</h5><dl class="ability-list">
    <div><dt>Primeiros Socorros</dt><dd>Gaste 1 PA e 1 Bandagem para tratar um aliado adjacente. Faça Medicina contra CD 10 + metade do nível do alvo, ou uma CD fixa do mestre. Em sucesso, ele recupera 1d8 + Inteligência + metade do seu nível em PV. Não use novamente no mesmo alvo até que ele sofra dano ou faça descanso curto.</dd></div>
    <div><dt>Kit Médico</dt><dd>Com um Kit Médico completo, gaste 2 PA e faça Medicina. Em sucesso, o alvo recupera 2d8 + Inteligência + seu nível em PV e remove Sangramento, dor intensa ou Atordoamento leve, se aplicável. Consome uma carga do kit.</dd></div>
    <div><dt>Estimulantes</dt><dd>Consuma 1 Estimulante e gaste 1 PA para conceder a um aliado +2 em ataques, Atletismo e resistência contra Exaustão até o fim da cena. Depois, ele fica Fatigado até concluir descanso curto.</dd></div>
    <div><dt>Antibióticos</dt><dd>Gaste 2 PA, consuma uma dose e faça Medicina. Em sucesso, interrompe o avanço da Infecção por 24 horas e concede +2 ao próximo teste de Constituição contra ela. Não remove a Infecção por si só.</dd></div>
    <div><dt>Tratamento Médico</dt><dd>Durante descanso longo, trate um paciente com Medicina. Em sucesso, remove Doença, Envenenamento comum, Febre ou Infecção leve, a critério do mestre. Fraturas, amputações e infecções avançadas exigem tratamento prolongado.</dd></div>
    <div><dt>Equipamentos de Proteção</dt><dd>Gaste 1 PA e equipamentos adequados, como máscara, luvas ou avental, para dar a um aliado +2 contra doenças e infecção até o fim da cena e reduzir o risco de contaminação por contato.</dd></div>
    <div><dt>Estabilização de Emergência</dt><dd>Quando um aliado for reduzido a 0 PV, use sua reação, gaste 1 PA e uma Bandagem, então faça Medicina. Em sucesso, ele fica Estabilizado e não realiza testes de morte enquanto estiver inconsciente.</dd></div>
    <div><dt>Diagnóstico Preciso</dt><dd>Você recebe +5 em Medicina e +2 em Investigação ao analisar corpos, ferimentos e causas de morte. Identifica sintomas e estima o tempo desde infecção, morte ou exposição nociva.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5><dl class="ability-list">
    <div><dt>Cirurgião</dt><dd>Durante descanso longo, faça uma cirurgia com Medicina. Em sucesso, o paciente recupera o dobro dos PV normais do descanso e pode tratar ferimentos graves, conforme o mestre.</dd></div>
    <div><dt>Farmacêutico</dt><dd>Com Ciências ou Medicina, produza analgésicos, antibióticos, antissépticos, soro fisiológico e estimulantes. A quantidade depende dos recursos e do resultado.</dd></div>
    <div><dt>Hospital de Campanha</dt><dd>Com 30 minutos, lonas, macas e equipamentos, monte um posto de atendimento. Aliados que descansam nele recebem recuperação adicional de PV e +2 contra doenças e infecção até o próximo descanso longo.</dd></div>
    <div><dt>Mãos Firmes</dt><dd>Você recebe +2 em Medicina e não sofre penalidades por procedimentos sob pressão ou em combate.</dd></div>
    <div><dt>Especialista em Trauma</dt><dd>Ao usar Primeiros Socorros, Kit Médico ou Cirurgia, recupere +1d6 PV adicionais.</dd></div>
    <div><dt>Pesquisa Clínica</dt><dd>Após uma hora examinando doença, mutação ou infecção nova, recebe +2 em testes futuros ligados a ela; o mestre pode revelar sintomas, transmissão ou tratamento.</dd></div>
    <div><dt>Treinamento em Primeiros Socorros</dt><dd>Durante descanso curto, escolha um aliado. Até o próximo descanso longo, ele recebe +2 em Medicina para estabilizar inconscientes.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5><div class="choice-grid"><div><strong>Kit Paramédico</strong><p>Pistola, 24 munições, kit médico, 5 bandagens, 3 analgésicos, antisséptico e mochila médica.</p></div><div><strong>Kit Hospitalar</strong><p>Revólver, 18 munições, bolsa cirúrgica, estetoscópio, 8 bandagens, 2 antibióticos, luvas descartáveis e mochila média.</p></div></div>
  <h5>Evolução</h5><ul class="progression"><li><b>Níveis 1–5:</b> domina primeiros socorros e estabilização.</li><li><b>Níveis 6–10:</b> fabrica medicamentos, trata infecções e monta postos improvisados.</li><li><b>Níveis 11–15:</b> realiza cirurgias de campanha e reduz o impacto de doenças.</li><li><b>Níveis 16–20:</b> torna-se referência para uma comunidade, treinando sobreviventes e administrando hospitais improvisados.</li></ul>`;

const influencerDetails = `
  <p class="class-tagline">“Palavras não matam zumbis. Mas podem impedir uma guerra entre sobreviventes.”</p>
  <p>O Influenciador tem a comunicação como maior arma. Em um mundo onde munição é escassa e cada aliado conta, convencer alguém pode valer mais que vencer um combate. Ele enxerga oportunidades para formar alianças, resolver conflitos e manter a esperança.</p>
  <div class="class-stats"><div><strong>Vida inicial</strong><span>16 + Constituição</span></div><div><strong>Por nível</strong><span>4 + Constituição</span></div><div><strong>PA inicial</strong><span>5 + Carisma</span></div></div>
  <h5>Pontos de Adrenalina (PA)</h5><p>Seus PA representam presença de espírito, eloquência, criatividade e autocontrole.</p>
  <h5>Papel no grupo</h5><p>O Influenciador negocia recursos, convence NPCs, recruta sobreviventes, resolve conflitos, melhora a Moral, obtém informações e incentiva aliados. É a classe social mais poderosa do sistema.</p>
  <h5>Proficiências</h5><p>Você é proficiente com pistolas, revólveres, facas, bastões e armas improvisadas leves. Seu treinamento prioriza autoproteção, não combate direto.</p>
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Carisma.</b> Afeta Diplomacia, Enganação, Intimidação, Atuação, recrutamento, Moral e inspiração.</p></div><div><strong>Atributo secundário</strong><p><b>Inteligência.</b> Afeta leitura de pessoas, estratégia social, communities e negociações.</p></div></div>
  <h5>Perícias</h5><p>Você recebe treinamento em <b>Diplomacia, Enganação, Intuição</b> e <b>Atuação</b>. Escolha mais duas perícias.</p>
  <h5>Habilidades de classe</h5><dl class="ability-list">
    <div><dt>Discurso Motivador</dt><dd>Gaste 1 PA para inspirar um aliado em alcance curto. Escolha +2 em ataques, resistência, uma perícia ou Defesa até o início de seu próximo turno. O bônus dura uma rodada e um personagem só pode receber um Discurso por rodada.</dd></div>
    <div><dt>Leitura Corporal</dt><dd>Você recebe +5 em Intuição. Após conversar com um NPC por um minuto, faça um teste; em sucesso, o mestre responde uma pergunta simples sobre a intenção ou estado emocional dele.</dd></div>
    <div><dt>Negociador Nato</dt><dd>Você recebe +5 em Diplomacia para negociar comida, armas, abrigo ou acordos. Uma margem ampla pode melhorar as condições oferecidas.</dd></div>
    <div><dt>Voz Calmante</dt><dd>Gaste 2 PA para remover Abalado ou Amedrontado de um aliado em alcance curto, ou permitir que ele repita um teste contra Pânico.</dd></div>
    <div><dt>Rede de Contatos</dt><dd>Ao chegar a uma comunidade organizada, faça Diplomacia. Em sucesso, o mestre apresenta ao menos um NPC disposto a conversar ou ajudar, ainda que tenha interesses próprios.</dd></div>
    <div><dt>Recrutador</dt><dd>Você recebe +5 em Diplomacia para convencer NPCs a integrar a comunidade ou colaborar em uma missão. O mestre pode exigir tempo, recursos ou provas de confiança.</dd></div>
    <div><dt>Observador Social</dt><dd>Você recebe +2 em Investigação para pistas relacionadas a pessoas e +2 em Percepção para comportamentos suspeitos durante conversas.</dd></div>
    <div><dt>Apoio Moral</dt><dd>No início de cada combate, escolha um aliado; ele recebe +2 em Iniciativa.</dd></div>
  </dl>
  <h5>Poderes exclusivos</h5><dl class="ability-list">
    <div><dt>Porta-Voz</dt><dd>Uma vez por cena, gaste 2 PA. Aliados em alcance curto recebem +1 em ataques, resistência e perícias até o fim de seu próximo turno; no 10º nível, o bônus aumenta para +2.</dd></div>
    <div><dt>Mediador</dt><dd>Quando dois NPCs estiverem em conflito, recebe +5 em Diplomacia para reduzir tensões. Um sucesso expressivo pode evitar o confronto.</dd></div>
    <div><dt>Psicologia Improvisada</dt><dd>Após conversar alguns minutos com um aliado, gaste 1 PA para conceder +2 contra medo e pânico até o próximo descanso curto.</dd></div>
    <div><dt>Convincente</dt><dd>Uma vez por cena, repita um teste de Diplomacia, Enganação ou Atuação. Você deve usar o novo resultado.</dd></div>
    <div><dt>Língua Afiada</dt><dd>Contra inimigo humano que possa ouvi-lo, gaste 1 PA e faça Diplomacia ou Enganação contra Vontade. Em sucesso, escolha: –2 em ataques, –2 em resistência ou Abalado até o início de seu próximo turno. Não afeta zumbis.</dd></div>
    <div><dt>Comunicador</dt><dd>Ao liderar uma missão, aliados recebem +2 em Guerra, Sobrevivência ou Investigação relacionados ao objetivo.</dd></div>
    <div><dt>Símbolo de Esperança</dt><dd>Enquanto estiver consciente, aliados em alcance curto recebem +1 em Vontade e contra Moral baixa, medo e desespero. No 15º nível, o bônus aumenta para +2.</dd></div>
  </dl>
  <h5>Equipamento inicial</h5><div class="choice-grid"><div><strong>Kit Jornalista</strong><p>Pistola, 24 munições, gravador, câmera, rádio portátil, bloco de anotações e mochila média.</p></div><div><strong>Kit Representante</strong><p>Revólver, 18 munições, binóculo, rádio comunicador, documentos, mapas, papel, canetas e mochila pequena.</p></div></div>
  <h5>Evolução</h5><ul class="progression"><li><b>Níveis 1–5:</b> domina conversas, negociações e apoio moral imediato.</li><li><b>Níveis 6–10:</b> influencia grupos e fortalece companheiros.</li><li><b>Níveis 11–15:</b> evita conflitos armados e reúne sobreviventes em torno de um objetivo.</li><li><b>Níveis 16–20:</b> torna-se símbolo de esperança, impedindo guerras e mantendo comunidades unidas.</li></ul>`;

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
  ['👤', 'Personagens', [['Classes', 'classes', 'personagens', classCatalog.map(([name, anchor]) => [name, anchor])], ['Origens', 'origens', 'personagens'], ['Atributos', 'atributos', 'personagens'], ['Perícias', 'pericias', 'personagens'], ['Talentos', 'talentos', 'personagens']]],
  ['🧟', 'Sobrevivência', [['Fome', 'fome', 'sobrevivencia'], ['Sede', 'sede', 'sobrevivencia'], ['Sono', 'sono', 'sobrevivencia'], ['Infecção', 'infeccao', 'sobrevivencia'], ['Moral', 'moral', 'sobrevivencia'], ['Tensão', 'tensao', 'sobrevivencia']]],
  ['⚔', 'Combate', [['Armas corpo a corpo', 'armas-brancas', 'combate'], ['Armas de fogo', 'armas-fogo', 'combate'], ['Munição', 'municao', 'combate'], ['Barulho', 'barulho', 'combate'], ['Mira', 'mira', 'combate'], ['Cobertura', 'cobertura', 'combate']]],
  ['☣', 'Zumbis', [['Zumbi comum', 'zumbi-comum', 'zumbis'], ['Corredor', 'corredor', 'zumbis'], ['Gordo', 'gordo', 'zumbis'], ['Espreitador', 'espreitador', 'zumbis'], ['Mutantes', 'mutantes', 'zumbis'], ['Chefes', 'chefes', 'zumbis']]],
  ['🎒', 'Equipamentos', [['Mochilas', 'mochilas', 'equipamentos'], ['Ferramentas', 'ferramentas', 'equipamentos'], ['Medicina', 'medicina', 'equipamentos'], ['Comida', 'comida', 'equipamentos'], ['Água', 'agua', 'equipamentos'], ['Combustível', 'combustivel', 'equipamentos']]],
  ['🏠', 'Bases', [['Construções', 'construcoes', 'bases'], ['Melhorias', 'melhorias', 'bases'], ['Defesas', 'defesas', 'bases'], ['Energia', 'energia', 'bases'], ['Oficina', 'oficina', 'bases']]],
  ['🚗', 'Veículos', [['Carro', 'carro', 'veiculos'], ['Moto', 'moto', 'veiculos'], ['Caminhão', 'caminhao', 'veiculos'], ['Helicóptero', 'helicoptero', 'veiculos']]],
  ['🎲', 'Mestre', [['Eventos', 'eventos', 'mestre'], ['Saques', 'saques', 'mestre'], ['Tabelas', 'tabelas', 'mestre'], ['Missões', 'missoes', 'mestre'], ['NPCs', 'npcs', 'mestre']]],
];

const nav = document.querySelector('#navigation');
nav.innerHTML = groups.map(([icon, title, links], index) => `<details class="nav-group" ${index < 2 ? 'open' : ''}><summary>${icon} ${title}</summary>${links.map(([label, anchor, , children = []]) => `<a href="#${anchor}">${label}</a>${children.map(([childLabel, childAnchor]) => `<a class="nav-sub-link" href="#${childAnchor}">${childLabel}</a>`).join('')}`).join('')}</details>`).join('');

const classMenuLink = nav.querySelector('a[href="#classes"]');
const archetypeNavLinks = [...nav.querySelectorAll('.nav-sub-link')];
if (classMenuLink && archetypeNavLinks.length) {
  const toggle = document.createElement('button');
  toggle.className = 'nav-archetype-toggle';
  toggle.type = 'button';
  classMenuLink.insertAdjacentElement('afterend', toggle);
  const setArchetypeNavVisibility = collapsed => {
    archetypeNavLinks.forEach(link => { link.hidden = collapsed; });
    toggle.textContent = collapsed ? '▸ Mostrar classes' : '⌄ Ocultar classes';
    toggle.setAttribute('aria-expanded', String(!collapsed));
    localStorage.setItem('t20-nav-classes', collapsed ? 'collapsed' : 'expanded');
  };
  setArchetypeNavVisibility(localStorage.getItem('t20-nav-classes') === 'collapsed');
  toggle.addEventListener('click', () => setArchetypeNavVisibility(!archetypeNavLinks[0].hidden));
}

// Cada item de navegação tem uma âncora própria. Estes blocos são marcadores de conteúdo
// até que as regras definitivas de cada tópico sejam escritas.
groups.flatMap(([, , links]) => links).forEach(([title, anchor, parent]) => {
  if (!parent || document.getElementById(anchor)) return;
  const target = document.getElementById(parent);
  if (!target) return;
  const article = document.createElement('article');
  article.id = anchor;
  article.className = 'subsection';
  article.innerHTML = `<h3>${title}</h3><p>Esta seção reunirá as regras, exemplos e orientações sobre <strong>${title.toLocaleLowerCase('pt-BR')}</strong>. O conteúdo detalhado será incluído nas próximas etapas do livro.</p>`;
  target.append(article);
});

// ==========================================
// SEÇÃO DE CLASSES
// ==========================================
const classesSection = document.getElementById('classes');
if (classesSection) {
  const catalog = document.createElement('div');
  catalog.className = 'class-catalog';
  catalog.innerHTML = `<div class="catalog-heading"><div><p class="eyebrow">CLASSES DISPONÍVEIS</p><p>Uma classe representa as experiências que ajudaram seu sobrevivente a chegar até aqui. Escolha aquela que melhor descreve como ele contribui para o grupo.</p></div><button class="catalog-toggle" id="catalogToggle" type="button" aria-expanded="true">Ocultar classes</button></div><div id="classCards">${classCatalog.map(([name, anchor, description, details]) => `<article id="${anchor}" class="class-card ${details ? 'class-card--expanded' : ''}"><h4>${name}</h4>${details || `<p>${description}</p>`}</article>`).join('')}</div>`;
  classesSection.append(catalog);

  const catalogToggle = document.querySelector('#catalogToggle');
  const classCards = document.querySelector('#classCards');
  
  const setCatalogVisibility = collapsed => {
    classCards.style.display = collapsed ? 'none' : '';
    catalogToggle.setAttribute('aria-expanded', String(!collapsed));
    catalogToggle.textContent = collapsed ? 'Mostrar classes' : 'Ocultar classes';
    localStorage.setItem('t20-class-catalog', collapsed ? 'collapsed' : 'expanded');

    // Also sync the sidebar (nav) state so hiding the catalog hides sidebar class links
    const navArchetypeLinks = nav.querySelectorAll('.nav-sub-link');
    if (navArchetypeLinks.length) navArchetypeLinks.forEach(link => { link.hidden = collapsed; });
    const navArchetypeToggle = nav.querySelector('.nav-archetype-toggle');
    if (navArchetypeToggle) {
      navArchetypeToggle.textContent = collapsed ? '▸ Mostrar classes' : '⌄ Ocultar classes';
      navArchetypeToggle.setAttribute('aria-expanded', String(!collapsed));
      localStorage.setItem('t20-nav-classes', collapsed ? 'collapsed' : 'expanded');
    }
  };
  
  setCatalogVisibility(localStorage.getItem('t20-class-catalog') === 'collapsed');
  catalogToggle.addEventListener('click', () => setCatalogVisibility(classCards.style.display !== 'none'));

  // When the sidebar toggle is clicked, also toggle the main catalog to keep both in sync
  const navArchetypeToggleButton = nav.querySelector('.nav-archetype-toggle');
  if (navArchetypeToggleButton) {
    navArchetypeToggleButton.addEventListener('click', () => {
      // Allow the nav handler to run first; then read the resulting hidden state
      setTimeout(() => {
        const collapsed = nav.querySelectorAll('.nav-sub-link')[0]?.hidden === true;
        if (typeof collapsed === 'boolean') setCatalogVisibility(collapsed);
      }, 0);
    });
  }
  
  nav.addEventListener('click', event => {
    const anchor = event.target.closest('a')?.getAttribute('href');
    if (anchor && classCards.style.display === 'none' && classCards.querySelector(anchor)) setCatalogVisibility(false);
  });
}

// Eventos e UI Geral
const body = document.body;
const themeButton = document.querySelector('#themeButton');
const savedTheme = localStorage.getItem('t20-theme');
if (savedTheme === 'dark') body.classList.add('dark');
themeButton.addEventListener('click', () => { body.classList.toggle('dark'); localStorage.setItem('t20-theme', body.classList.contains('dark') ? 'dark' : 'light'); });

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
nav.addEventListener('click', event => { if (event.target.matches('a') && window.innerWidth <= 850) sidebar.classList.remove('open'); });

const search = document.querySelector('#searchInput');
const results = document.querySelector('#searchResults');
const pages = [...document.querySelectorAll('[data-page]')];
search.addEventListener('input', () => { const query = search.value.trim().toLocaleLowerCase('pt-BR'); if (!query) return results.classList.remove('visible'); const matches = pages.filter(page => page.textContent.toLocaleLowerCase('pt-BR').includes(query)).slice(0, 6); results.innerHTML = matches.length ? matches.map(page => `<a href="#${page.id || 'top'}"><strong>${page.dataset.page}</strong><br><small>${page.textContent.trim().replace(/\s+/g, ' ').slice(0, 80)}…</small></a>`).join('') : '<a>Nenhuma regra encontrada.</a>'; results.classList.add('visible'); });
results.addEventListener('click', () => { results.classList.remove('visible'); search.value = ''; });

// ==========================================
// CATÁLOGO DE ORIGENS
// ==========================================
const originsCatalog = [
  { icon: '🏠', name: 'Civil Comum', quote: 'Você era apenas mais uma pessoa tentando viver sua vida quando tudo acabou.', desc: 'Você não possuía treinamento especializado, mas aprendeu a sobreviver enfrentando desafios como qualquer outra pessoa.', skills: 'Vontade, Intuição', powerName: 'Adaptável', powerDesc: 'Uma vez por cena, pode repetir um teste de perícia que tenha falhado. Deve aceitar o novo resultado.', items: 'Mochila, Lanterna, Cantil, Canivete, Cobertor' },
  { icon: '🎖', name: 'Veterano', quote: 'Você já conhecia a violência muito antes do fim do mundo.', desc: 'Experiências anteriores em conflitos o prepararam para manter a calma sob pressão.', skills: 'Pontaria, Guerra', powerName: 'Sangue Frio', powerDesc: 'Recebe +2 em testes contra medo, pânico e intimidação.', items: 'Faca de combate, Colete leve, Lanterna tática, Binóculo, Kit de limpeza de armas' },
  { icon: '🔥', name: 'Sobrevivente Nato', quote: 'Você aprendeu cedo que ninguém sobreviveria por você.', desc: 'Você desenvolveu instintos apurados para enfrentar situações extremas.', skills: 'Sobrevivência, Percepção', powerName: 'Instinto de Sobrevivência', powerDesc: 'Recebe +2 em testes para evitar emboscadas, armadilhas e perigos naturais.', items: 'Cantil, Faca, Mochila, Corda, Isqueiro' },
  { icon: '🎒', name: 'Saqueador', quote: 'Os recursos estão escondidos. Você sabe onde procurar.', desc: 'Você desenvolveu técnicas para entrar, vasculhar e sair de locais perigosos rapidamente.', skills: 'Investigação, Furtividade', powerName: 'Olhos Afiados', powerDesc: 'Recebe +2 em testes para encontrar suprimentos durante saques.', items: 'Pé de cabra, Mochila, Lanterna, Canivete, Luvas' },
  { icon: '🗺', name: 'Explorador', quote: 'Cada rua pode esconder uma ameaça... ou uma oportunidade.', desc: 'Você está acostumado a descobrir caminhos, mapear áreas e reconhecer terrenos.', skills: 'Sobrevivência, Atletismo', powerName: 'Reconhecimento', powerDesc: 'Recebe +2 em testes para navegar e evitar se perder.', items: 'Bússola, Binóculo, Corda, Mapa, Cantil' },
  { icon: '🏕', name: 'Campista', quote: 'Você se sente mais confortável dormindo sob as estrelas do que entre quatro paredes.', desc: 'Anos de acampamentos ensinaram como viver com poucos recursos.', skills: 'Sobrevivência, Ofício', powerName: 'Vida ao Ar Livre', powerDesc: 'Recebe +2 em testes para montar acampamentos e reduzir os efeitos do clima.', items: 'Barraca, Saco de dormir, Cantil, Isqueiro, Machado' },
  { icon: '🚗', name: 'Estradeiro', quote: 'Nenhuma estrada é longa demais quando você sabe para onde está indo.', desc: 'Você passou boa parte da vida viajando.', skills: 'Pilotagem, Sobrevivência', powerName: 'Direção Econômica', powerDesc: 'Veículos conduzidos por você consomem menos combustível em viagens longas.', items: 'Rádio, Mapa rodoviário, Caixa de ferramentas, Lanterna, Mochila' },
  { icon: '🔧', name: 'Faz-Tudo', quote: 'Sempre existe uma maneira de fazer funcionar.', desc: 'Você aprendeu um pouco de tudo.', skills: 'Ofício, Tecnologia', powerName: 'Improvisador', powerDesc: 'Recebe +2 para fabricar ou reparar objetos improvisados.', items: 'Caixa de ferramentas, Alicate, Fita isolante, Martelo, Chave inglesa' },
  { icon: '🩹', name: 'Cuidador', quote: 'Nem sempre é preciso ser médico para salvar uma vida.', desc: 'Você sempre cuidou das pessoas ao seu redor.', skills: 'Medicina, Intuição', powerName: 'Primeiros Socorros', powerDesc: 'Recebe +2 em testes de Medicina para estabilizar aliados.', items: 'Bandagens, Kit de primeiros socorros, Antisséptico, Analgésicos, Luvas' },
  { icon: '🛡', name: 'Protetor', quote: 'Enquanto eu estiver de pé, ninguém passa.', desc: 'Você sempre colocou a segurança dos outros acima da sua.', skills: 'Luta, Atletismo', powerName: 'Escudo Humano', powerDesc: 'Uma vez por cena, pode sofrer um ataque destinado a um aliado adjacente.', items: 'Escudo improvisado, Bastão, Capacete, Colete leve, Lanterna' },
  { icon: '🚨', name: 'Resgatista', quote: 'Desistir de alguém nunca foi uma opção.', desc: 'Você está acostumado a salvar pessoas em situações críticas.', skills: 'Atletismo, Medicina', powerName: 'Resgate', powerDesc: 'Pode carregar um aliado inconsciente sem reduzir seu deslocamento e recebe +2 em testes para retirar pessoas de escombros, incêndios ou veículos.', items: 'Machado, Pé de cabra, Corda, Kit de primeiros socorros, Lanterna' },
  { icon: '🤝', name: 'Comunitário', quote: 'Ninguém sobrevive sozinho.', desc: 'Você sempre viveu cercado por pessoas e sabe trabalhar em equipe.', skills: 'Diplomacia, Intuição', powerName: 'Espírito de Equipe', powerDesc: 'Sempre que ajudar um aliado, ele recebe +1 adicional no teste.', items: 'Rádio, Mochila, Cantil, Cobertor, Bloco de notas' },
  { icon: '🎭', name: 'Manipulador', quote: 'As pessoas acreditam no que querem ouvir.', desc: 'Você domina a arte da persuasão.', skills: 'Enganação, Diplomacia', powerName: 'Boa Conversa', powerDesc: 'Recebe +2 em testes de Enganação e Diplomacia durante negociações.', items: 'Gravador, Celular descarregado, Bloco de notas, Canivete, Rádio' },
  { icon: '🎯', name: 'Atirador Esportivo', quote: 'Precisão sempre foi um esporte. Agora é sobrevivência.', desc: 'Você treinava tiro por hobby antes do colapso.', skills: 'Pontaria, Percepção', powerName: 'Mira Treinada', powerDesc: 'Recebe +1 nas jogadas de ataque com armas de fogo de disparo único.', items: 'Pistola, Kit de limpeza, Binóculo, Protetor auricular, Lanterna' },
  { icon: '🦌', name: 'Caçador', quote: 'A natureza sempre oferece alimento para quem sabe procurar.', desc: 'Você sabe rastrear, caçar e sobreviver longe das cidades.', skills: 'Sobrevivência, Percepção', powerName: 'Rastreador', powerDesc: 'Recebe +2 em testes para seguir rastros e encontrar alimento natural.', items: 'Rifle de caça, Facão, Binóculo, Cantil, Corda' },
  { icon: '📦', name: 'Colecionador', quote: 'Nada deve ser desperdiçado.', desc: 'Você sempre guardou objetos que poderiam ser úteis.', skills: 'Investigação, Ofício', powerName: 'Aproveitamento Máximo', powerDesc: 'Sempre que desmontar um item, recupera mais materiais que o normal.', items: 'Mochila grande, Caixa organizadora, Alicate, Lanterna, Canivete' },
  { icon: '📚', name: 'Estudioso', quote: 'Conhecimento continua sendo a ferramenta mais poderosa.', desc: 'Você dedicou sua vida aos estudos e à pesquisa.', skills: 'Ciências, Investigação', powerName: 'Mente Analítica', powerDesc: 'Recebe +2 em testes para identificar substâncias, doenças e equipamentos.', items: 'Livros, Bloco de anotações, Lanterna, Mochila, Lupa' },
  { icon: '🏚', name: 'Isolado', quote: 'Você aprendeu a depender apenas de si mesmo.', desc: 'Você viveu longe da sociedade ou escolheu esse caminho.', skills: 'Sobrevivência, Vontade', powerName: 'Autossuficiente', powerDesc: 'Recebe +2 em testes para resistir à fome, sede e fadiga.', items: 'Machado, Cantil, Corda, Isqueiro, Mochila' },
  { icon: '🌆', name: 'Sobrevivente de Rua', quote: 'Você conhecia a luta pela sobrevivência antes de ela virar a realidade de todos.', desc: 'Anos vivendo nas ruas ensinaram você a improvisar, encontrar abrigo e aproveitar qualquer recurso disponível.', skills: 'Furtividade, Sobrevivência', powerName: 'Vira-Lata', powerDesc: 'Recebe +2 em testes para encontrar abrigo improvisado, comida descartada e objetos úteis em ambientes urbanos.', items: 'Cobertor, Canivete, Mochila, Luvas, Pé de cabra' },
  { icon: '🥫', name: 'Preparador (Prepper)', quote: 'Enquanto todos riam de você, você já estava se preparando para o pior.', desc: 'Você sempre acreditou que um grande desastre aconteceria e passou anos acumulando suprimentos, aprendendo técnicas de sobrevivência e planejando contingências.', skills: 'Sobrevivência, Investigação', powerName: 'Plano B', powerDesc: 'Uma vez por sessão, quando o grupo precisar de um item comum, você pode declarar que havia guardado esse item em sua mochila, desde que plausível.', items: 'Mochila grande, Cantil, Kit de primeiros socorros, Corda, Filtro de água' }
];

setTimeout(() => {
  const origensSection = document.getElementById('origens');
  if (origensSection) {
    origensSection.innerHTML = `
      <div class="catalog-heading">
        <div>
          <h3>Origens</h3>
          <p>O que você fazia antes do fim? Sua origem define o que você sabia fazer antes do mundo acabar, rendendo perícias bônus, itens iniciais e vantagens exclusivas.</p>
        </div>
        <button class="catalog-toggle" id="toggleOrigensBtn" type="button" aria-expanded="true">Ocultar origens</button>
      </div>
      <div id="origensWrapper" class="origins-grid">
        ${originsCatalog.map(orig => `
          <article class="origin-card">
            <header class="origin-header">
              <span class="origin-icon" aria-hidden="true">${orig.icon}</span>
              <h4>${orig.name}</h4>
            </header>
            <p class="origin-quote">"${orig.quote}"</p>
            <p class="origin-desc">${orig.desc}</p>
            
            <div class="origin-stats">
              <strong>Perícias</strong>
              <span>${orig.skills}</span>
            </div>
            
            <div class="origin-power">
              <strong>Poder: ${orig.powerName}</strong>
              <p>${orig.powerDesc}</p>
            </div>
            
            <div class="origin-items">
              <strong>Equipamento Inicial</strong>
              <p><em>Escolha dois:</em> ${orig.items}</p>
            </div>
          </article>
        `).join('')}
      </div>
    `;

    const toggleOrigensBtn = document.getElementById('toggleOrigensBtn');
    const origensWrapper = document.getElementById('origensWrapper');
    if (toggleOrigensBtn && origensWrapper) {
      const setOrigensVisibility = collapsed => {
        origensWrapper.style.display = collapsed ? 'none' : '';
        toggleOrigensBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleOrigensBtn.textContent = collapsed ? 'Exibir origens' : 'Ocultar origens';
        localStorage.setItem('t20-origens', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-origens') === 'collapsed';
      setOrigensVisibility(isCollapsed);
      
      toggleOrigensBtn.addEventListener('click', () => {
        setOrigensVisibility(origensWrapper.style.display !== 'none');
      });
    }
  }
}, 100);

// ==========================================
// SEÇÃO DE ATRIBUTOS
// ==========================================
const attributesCatalog = [
  { icon: '💪', name: 'Força', quote: 'Quando não há outra opção, a força abre o caminho.', desc: '<p>A Força representa o poder físico bruto do personagem. Ela determina sua capacidade de levantar peso, quebrar obstáculos, empurrar objetos pesados e lutar em combate corpo a corpo.</p><p>Personagens com alta Força conseguem utilizar armas pesadas com maior eficiência, carregar mais equipamentos e resistir melhor às exigências físicas do ambiente.</p>', uses: ['Ataques corpo a corpo.', 'Arrombar portas.', 'Derrubar obstáculos.', 'Empurrar veículos.', 'Escalar utilizando força bruta.', 'Agarrar ou imobilizar inimigos.', 'Determinar a capacidade de carga do personagem.'] },
  { icon: '🏃', name: 'Destreza', quote: 'Velocidade e precisão salvam mais vidas do que força descontrolada.', desc: '<p>Destreza representa coordenação motora, agilidade, reflexos e precisão dos movimentos. Ela influencia a capacidade do personagem de mirar com armas de fogo, mover-se silenciosamente, escapar de perigos e executar ações delicadas.</p><p>Personagens com alta Destreza costumam agir antes dos demais, acertar disparos com maior facilidade e evitar ataques.</p>', uses: ['Ataques à distância.', 'Esquiva.', 'Furtividade.', 'Reflexos.', 'Equilíbrio.', 'Arrombamentos delicados.', 'Escalada ágil.', 'Condução precisa de veículos.'] },
  { icon: '❤️', name: 'Constituição', quote: 'Sobreviver é resistir quando todos os outros desistem.', desc: '<p>Constituição representa a resistência física e mental do personagem diante das adversidades. Ela determina seus Pontos de Vida, resistência ao cansaço, doenças, fome, sede e infecções.</p><p>Em um cenário de apocalipse, onde recursos são escassos e o ambiente é tão perigoso quanto os inimigos, Constituição é um dos atributos mais importantes para garantir a sobrevivência a longo prazo.</p>', uses: ['Resistir à fome.', 'Resistir à sede.', 'Suportar noites sem dormir.', 'Enfrentar doenças.', 'Resistir à infecção.', 'Resistir ao frio ou calor extremos.', 'Recuperação durante descansos.', 'Testes de resistência física.'] },
  { icon: '🧠', name: 'Inteligência', quote: 'Conhecimento transforma problemas em soluções.', desc: '<p>Inteligência representa raciocínio lógico, memória, capacidade de aprendizado e conhecimento técnico. Ela é utilizada para operar equipamentos, interpretar informações, fabricar objetos, reparar máquinas, realizar procedimentos médicos e compreender o funcionamento do mundo.</p><p>Além do conhecimento adquirido antes do apocalipse, Inteligência também representa a capacidade de improvisar soluções utilizando os recursos disponíveis.</p>', uses: ['Medicina.', 'Tecnologia.', 'Investigação.', 'Ciências.', 'Fabricação.', 'Reparos.', 'Montagem de armadilhas.', 'Planejamento.', 'Decifrar documentos ou mapas.'] },
  { icon: '🗣', name: 'Carisma', quote: 'No fim do mundo, convencer alguém pode valer mais do que uma arma carregada.', desc: '<p>Carisma representa personalidade, confiança, liderança, determinação e influência sobre outras pessoas. Mais do que simplesmente falar bem, esse atributo mede a capacidade do personagem de inspirar aliados, negociar recursos, intimidar inimigos e manter a calma em situações críticas.</p><p>Em um mundo onde communities dependem da cooperação para sobreviver, o Carisma pode decidir o destino de um grupo inteiro.</p>', uses: ['Diplomacia.', 'Enganação.', 'Intimidação.', 'Liderança.', 'Negociações.', 'Recrutamento de sobreviventes.', 'Discursos motivacionais.', 'Resistência ao desespero e à pressão social.'] }
];

setTimeout(() => {
  const atributosSection = document.getElementById('atributos');
  if (atributosSection) {
    atributosSection.innerHTML = `
      <h3>Determinando os Atributos</h3>
      <p>Antes de iniciar a aventura, é hora de definir os atributos do seu personagem. Eles representam suas capacidades naturais e influenciam praticamente todas as ações realizadas durante a campanha, desde enfrentar um zumbi em combate até convencer outro sobrevivente a compartilhar seus recursos.</p>
      
      <p>Neste sistema, utilizamos o <strong>método Heroico</strong>, que cria personagens competentes e permite maior liberdade na construção de diferentes estilos de jogo.</p>

      <h4>Método Heroico</h4>
      <p>Para determinar seus atributos, siga os passos abaixo:</p>
      <ol style="margin-bottom: 20px;">
        <li>Role 4 dados de seis lados (4d6).</li>
        <li>Desconsidere o menor resultado obtido.</li>
        <li>Some os três dados restantes. Esse será o valor de um atributo.</li>
        <li>Repita esse processo cinco vezes, obtendo cinco valores ao final.</li>
      </ol>

      <p>Após realizar todas as rolagens, distribua livremente cada valor entre os cinco atributos (<strong>clique nos cards para ver os detalhes</strong>):</p>
      
      <div class="attributes-grid">
        ${attributesCatalog.map(attr => `
          <details class="attr-card" name="atributos-acordeon">
            <summary><strong>${attr.icon} ${attr.name}</strong></summary>
            <div class="attr-content">
              <p class="attr-quote">"${attr.quote}"</p>
              ${attr.desc}
              <strong>A ${attr.name} é utilizada em situações como:</strong>
              <ul>
                ${attr.uses.map(use => `<li>${use}</li>`).join('')}
              </ul>
            </div>
          </details>
        `).join('')}
      </div>

      <p>A distribuição é feita somente depois que todos os valores forem conhecidos, permitindo que cada jogador monte o personagem da maneira que desejar.</p>

      <div class="callout info">
        <strong>Exemplo de Distribuição</strong>
        <p>Um jogador que queira interpretar um Militar pode optar por colocar seus maiores valores em Força e Destreza, enquanto alguém que deseje criar um Médico provavelmente dará prioridade à Inteligência e à Constituição. Já um Negociador pode concentrar seus melhores resultados em Carisma, sem que isso seja definido pela sorte antes das escolhas.</p>
      </div>
    `;
  }
}, 150);

// ==========================================
// SEÇÃO DE PERÍCIAS
// ==========================================
const skillsCatalog = [
  { name: 'Acrobacia', attr: 'Destreza', desc: 'Representa sua capacidade de realizar movimentos ágeis, manter o equilíbrio e atravessar obstáculos com precisão. É utilizada para saltar entre telhados, escapar de agarrões, amortecer quedas e executar manobras arriscadas.' },
  { name: 'Adestramento', attr: 'Carisma', desc: 'Mede sua habilidade de treinar, acalmar e comandar animais. Também pode ser utilizada para lidar com cães de guarda, animais domésticos ou qualquer criatura que possa responder ao comportamento humano.' },
  { name: 'Atletismo', attr: 'Força', desc: 'Representa sua capacidade física para correr, escalar, nadar, saltar e realizar esforços intensos. É uma das principais perícias para superar obstáculos naturais e resistir às exigências físicas do apocalipse.' },
  { name: 'Conhecimento', attr: 'Inteligência', desc: 'Reflete seus estudos, memória e cultura geral. Permite recordar informações sobre história, geografia, química, biologia, organizações, fenômenos naturais e outros assuntos relevantes.' },
  { name: 'Diplomacia', attr: 'Carisma', desc: 'Representa sua capacidade de convencer pessoas através do diálogo, negociação e empatia. É utilizada para resolver conflitos, obter ajuda, negociar recursos e construir alianças.' },
  { name: 'Enganação', attr: 'Carisma', desc: 'Mede sua habilidade de mentir, blefar, disfarçar intenções ou manipular outras pessoas. Também pode ser utilizada para criar distrações ou esconder informações importantes.' },
  { name: 'Fortitude', attr: 'Constituição', desc: 'Representa sua resistência física diante de venenos, doenças, exaustão, fome, sede e outros efeitos que atacam o corpo. Personagens resistentes permanecem ativos mesmo nas condições mais extremas.' },
  { name: 'Furtividade', attr: 'Destreza', desc: 'Permite mover-se silenciosamente, esconder-se e evitar ser percebido. É essencial para escapar de hordas de zumbis e infiltrar-se em locais perigosos sem chamar atenção.' },
  { name: 'Iniciativa', attr: 'Destreza', desc: 'Determina a rapidez com que você reage diante de situações inesperadas. Quanto maior sua Iniciativa, maiores as chances de agir antes dos demais durante um combate ou evento crítico.' },
  { name: 'Intimidação', attr: 'Carisma', desc: 'Representa sua capacidade de impor respeito ou medo através da presença, ameaças ou demonstrações de força. Pode ser utilizada para desmotivar inimigos ou forçar alguém a cooperar.' },
  { name: 'Intuição', attr: 'Carisma', desc: 'Mede sua capacidade de compreender emoções, perceber intenções e identificar quando algo parece errado. É útil para detectar mentiras, avaliar pessoas e antecipar comportamentos.' },
  { name: 'Investigação', attr: 'Inteligência', desc: 'Representa sua habilidade de procurar pistas, interpretar evidências e conectar informações. É utilizada durante buscas, análises de cenas e resolução de mistérios.' },
  { name: 'Ladinagem', attr: 'Destreza', desc: 'Permite abrir fechaduras, desarmar armadilhas e manipular mecanismos delicados. Também é utilizada para arrombamentos discretos e outras ações que exigem precisão manual.' },
  { name: 'Luta', attr: 'Força', desc: 'Representa seu treinamento em combate corpo a corpo utilizando socos, facas, bastões, machados e outras armas de curto alcance. Também cobre técnicas de agarrar, empurrar e imobilizar adversários.' },
  { name: 'Medicina', attr: 'Inteligência', desc: 'Reflete seus conhecimentos sobre primeiros socorros, tratamento de ferimentos e cuidados com a saúde. É utilizada para estabilizar aliados, tratar doenças e reduzir os efeitos da infecção.' },
  { name: 'Ofício', attr: 'Inteligência', desc: 'Representa sua habilidade em trabalhos manuais, fabricação e reparos. Pode ser utilizada para construir barricadas, fabricar ferramentas, reparar equipamentos e produzir itens úteis.' },
  { name: 'Percepção', attr: 'Inteligência', desc: 'Mede sua atenção aos detalhes e capacidade de notar sons, movimentos ou objetos escondidos. É fundamental para evitar emboscadas e identificar perigos antes que seja tarde.' },
  { name: 'Pilotagem', attr: 'Destreza', desc: 'Representa sua habilidade para conduzir veículos terrestres, aquáticos ou aéreos. Também cobre manobras difíceis, perseguições e direção em condições adversas.' },
  { name: 'Pontaria', attr: 'Destreza', desc: 'Determina sua precisão ao utilizar armas de fogo, arcos, bestas e outras armas de ataque à distância. Também influencia disparos realizados sob pressão ou contra alvos em movimento.' },
  { name: 'Reflexos', attr: 'Destreza', desc: 'Representa sua velocidade para reagir a ataques, explosões e outros perigos imediatos. É utilizada para esquivar-se, evitar armadilhas e reduzir os efeitos de ameaças repentinas.' },
  { name: 'Sobrevivência', attr: 'Constituição', desc: 'Reflete seu conhecimento prático para viver em ambientes hostis. Permite encontrar alimento, água, abrigo, rastrear animais e enfrentar os desafios impostos pela natureza.' },
  { name: 'Tática', attr: 'Inteligência', desc: 'Representa sua capacidade de analisar o campo de batalha, elaborar estratégias e coordenar ações em grupo. É utilizada para planejar emboscadas, organizar defesas e antecipar movimentos inimigos.' },
  { name: 'Tecnologia', attr: 'Inteligência', desc: 'Mede seu conhecimento sobre equipamentos eletrônicos, computadores, sistemas digitais e dispositivos modernos. Também é utilizada para hackear sistemas simples, reparar aparelhos e operar tecnologias avançadas.' },
  { name: 'Vontade', attr: 'Carisma', desc: 'Representa sua força mental, determinação e autocontrole diante do medo, da dor e do desespero. É utilizada para resistir a efeitos psicológicos, manter a calma sob pressão e continuar lutando quando tudo parece perdido.' }
];

setTimeout(() => {
  const periciasSection = document.getElementById('pericias');
  if (periciasSection) {
    periciasSection.innerHTML = `
      <h3>Perícias</h3>
      <p>As perícias representam o treinamento, experiência e conhecimentos específicos de um personagem. Sempre que uma ação exigir mais do que uma capacidade natural, o Mestre poderá solicitar um teste de perícia.</p>
      <p>Cada perícia está ligada a um atributo e permite que personagens especializados realizem tarefas com maior eficiência, tanto em combate quanto durante a sobrevivência.</p>

      <h4>Atributos das Perícias</h4>
      <p>Para uma consulta rápida, veja abaixo qual atributo governa cada perícia do jogo:</p>
      <div class="skill-attr-grid">
        ${skillsCatalog.map(s => `
          <div class="sa-item">
            <strong>${s.name}</strong>
            <span>${s.attr}</span>
          </div>
        `).join('')}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <h4>Descrição das Perícias</h4>
          <p>Abaixo estão detalhadas as utilidades e focos de cada uma das 24 perícias disponíveis para o seu sobrevivente:</p>
        </div>
        <button class="catalog-toggle" id="togglePericiasBtn" type="button" aria-expanded="true">Ocultar descrições</button>
      </div>

      <div id="periciasDetailsWrapper" class="skill-desc-grid" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${skillsCatalog.map(s => `
          <div class="sd-card">
            <h5>${s.name} <span>${s.attr}</span></h5>
            <p>${s.desc}</p>
          </div>
        `).join('')}
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Treinamento em Perícias</h3>
      <p>Nem todos os sobreviventes possuem o mesmo nível de experiência. Enquanto alguns apenas conhecem o básico sobre determinada área, outros passaram anos aperfeiçoando suas habilidades antes — ou mesmo depois — do colapso da sociedade.</p>
      <p>Cada perícia possui um nível de treinamento, que representa o quanto seu personagem domina aquela área de conhecimento. Quanto maior o nível de treinamento, maior será o bônus recebido sempre que realizar um teste utilizando essa perícia.</p>
      <p>Os níveis de treinamento são divididos em quatro categorias:</p>
      
      <div class="skills-table">
        <div class="st-header">
          <div class="st-level">Nível</div>
          <div class="st-bonus">Bônus</div>
          <div class="st-desc">Descrição</div>
        </div>
        <div class="st-row">
          <div class="st-level"><strong>Destreinado</strong></div>
          <div class="st-bonus">+0</div>
          <div class="st-desc">Você possui apenas conhecimentos básicos ou age por instinto. Ainda pode tentar realizar a maioria das tarefas, mas depende principalmente de seu atributo e da sorte.</div>
        </div>
        <div class="st-row">
          <div class="st-level"><strong>Treinado</strong></div>
          <div class="st-bonus">+5</div>
          <div class="st-desc">Você recebeu treinamento ou adquiriu experiência suficiente para executar tarefas com competência. Este é o nível da maioria dos profissionais e sobreviventes experientes.</div>
        </div>
        <div class="st-row">
          <div class="st-level"><strong>Veterano</strong></div>
          <div class="st-bonus">+10</div>
          <div class="st-desc">Sua habilidade está muito acima da média. Você domina técnicas avançadas, age com confiança e raramente comete erros em situações comuns.</div>
        </div>
        <div class="st-row">
          <div class="st-level"><strong>Experiente</strong></div>
          <div class="st-bonus">+15</div>
          <div class="st-desc">Você é uma referência naquela área. Sua experiência permite enfrentar desafios extremamente difíceis e realizar feitos que poucos conseguiriam repetir.</div>
        </div>
      </div>

      <p>O bônus de treinamento é somado ao atributo correspondente sempre que um teste de perícia for realizado.</p>

      <div class="callout info">
        <strong>Exemplo de Teste</strong>
        <p>Um personagem com Destreza +3 e Pontaria Veterano realiza seus ataques à distância com um bônus de +13 (+3 de Destreza e +10 pelo treinamento). Da mesma forma, um Médico com Inteligência +4 e Medicina Experiente fará testes de Medicina com +19.</p>
      </div>

      <p>Ao longo da campanha, o treinamento em perícias pode evoluir conforme o personagem ganha experiência, representando o aprendizado adquirido ao enfrentar os desafios do apocalipse. Escolher em quais perícias investir é uma decisão importante, pois elas definem aquilo em que seu sobrevivente realmente se destaca quando a situação fica crítica.</p>
    `;

    const togglePericiasBtn = document.getElementById('togglePericiasBtn');
    const periciasDetailsWrapper = document.getElementById('periciasDetailsWrapper');
    if (togglePericiasBtn && periciasDetailsWrapper) {
      const setPericiasVisibility = collapsed => {
        periciasDetailsWrapper.style.display = collapsed ? 'none' : '';
        togglePericiasBtn.setAttribute('aria-expanded', String(!collapsed));
        togglePericiasBtn.textContent = collapsed ? 'Exibir descrições' : 'Ocultar descrições';
        localStorage.setItem('t20-pericias-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-pericias-desc') === 'collapsed';
      setPericiasVisibility(isCollapsed);
      
      togglePericiasBtn.addEventListener('click', () => {
        setPericiasVisibility(periciasDetailsWrapper.style.display !== 'none');
      });
    }
  }
}, 200);

// ==========================================
// SEÇÃO DE TALENTOS
// ==========================================
const talentosData = [
  {
    title: 'Talentos Físicos', tag: 'Físico', desc: 'Representam preparo físico, resistência e capacidade atlética.',
    talents: [
      { name: 'Corredor', focus: 'Mobilidade', effect: '<p>Seu deslocamento aumenta em +3 metros.</p><p>Além disso, recebe +2 em testes de Atletismo para correr, perseguir ou fugir.</p>' },
      { name: 'Braços Fortes', focus: 'Carga e força', effect: '<p>Sua capacidade de carga aumenta em 50%.</p><p>Recebe +2 em testes para empurrar, levantar ou destruir obstáculos.</p>' },
      { name: 'Escalador', focus: 'Terreno', effect: '<p>Escalar não reduz seu deslocamento.</p><p>Além disso, recebe +5 em testes de Atletismo para escalar.</p>' },
      { name: 'Pulmão de Ferro', focus: 'Resistência', effect: '<p>Recebe +5 em testes de Fortitude contra fadiga, fumaça e esforço prolongado.</p>' },
      { name: 'Resistente', focus: 'Recuperação', effect: '<p>Sempre que recuperar Pontos de Vida durante um descanso, recupera +2 PV adicionais por nível de personagem.</p>' }
    ]
  },
  {
    title: 'Talentos de Combate', tag: 'Combate', desc: 'Especializam o personagem em confrontos.',
    talents: [
      { name: 'Mira Precisa', focus: 'Precisão', effect: '<p>Recebe +1 nas jogadas de ataque com armas de fogo.</p>' },
      { name: 'Saque Rápido', focus: 'Agilidade', effect: '<p>Trocar ou sacar uma arma não exige ação.</p>' },
      { name: 'Combate Defensivo', focus: 'Cobertura', effect: '<p>Enquanto estiver utilizando cobertura.</p><p>Recebe +2 na Defesa.</p>' },
      { name: 'Especialista em Armas Brancas', focus: 'Dano corpo a corpo', effect: '<p>Recebe +2 nas jogadas de dano com armas corpo a corpo leves.</p>' },
      { name: 'Tiro Controlado', focus: 'Precisão à distância', effect: '<p>Quando realizar um disparo único.</p><p>Ignora até -2 de penalidades causadas por distância ou cobertura parcial.</p>' }
    ]
  },
  {
    title: 'Talentos de Sobrevivência', tag: 'Sobrevivência', desc: 'Essenciais para sobreviver no apocalipse.',
    talents: [
      { name: 'Coletor', focus: 'Saques', effect: '<p>Sempre que encontrar suprimentos.</p><p>Recebe um recurso adicional, escolhido pelo Mestre.</p>' },
      { name: 'Cozinheiro', focus: 'Alimentação', effect: '<p>As refeições preparadas por você recuperam 1 ponto adicional de Moral e reduzem a Fome em um estágio extra.</p>' },
      { name: 'Catador', focus: 'Recursos', effect: '<p>Ao desmontar equipamentos.</p><p>Recupera 1 componente extra.</p>' },
      { name: 'Dorme em Qualquer Lugar', focus: 'Descanso', effect: '<p>Você ignora penalidades por descansar em locais improvisados.</p>' },
      { name: 'Estômago de Ferro', focus: 'Resistência', effect: '<p>Recebe +5 contra doenças, intoxicações e alimentos estragados.</p>' }
    ]
  },
  {
    title: 'Talentos Técnicos', tag: 'Técnico', desc: 'Voltados para fabricação e manutenção.',
    talents: [
      { name: 'Armeiro', focus: 'Armas', effect: '<p>Consertar armas custa 50% menos materiais.</p>' },
      { name: 'Especialista em Eletrônica', focus: 'Tecnologia', effect: '<p>Recebe +2 em Tecnologia envolvendo aparelhos eletrônicos.</p>' },
      { name: 'Mecânico de Campo', focus: 'Veículos', effect: '<p>Consegue reparar veículos utilizando sucata improvisada.</p>' },
      { name: 'Improvisador', focus: 'Fabricação', effect: '<p>Pode fabricar equipamentos improvisados utilizando metade do tempo normal.</p>' },
      { name: 'Engenheiro de Fortificações', focus: 'Bases', effect: '<p>Barricadas construídas por você possuem 25% mais Pontos de Vida.</p>' }
    ]
  },
  {
    title: 'Talentos Sociais', tag: 'Social', desc: 'Mantêm o grupo unido.',
    talents: [
      { name: 'Negociador', focus: 'Comércio', effect: '<p>Recebe +2 em Diplomacia durante trocas comerciais.</p>' },
      { name: 'Inspirador', focus: 'Moral', effect: '<p>Durante descansos curtos.</p><p>Aliados recuperam +1 Moral.</p>' },
      { name: 'Presença Ameaçadora', focus: 'Intimidação', effect: '<p>Recebe +2 em Intimidação.</p>' },
      { name: 'Líder Nato', focus: 'Suporte', effect: '<p>Aliados em alcance curto recebem +1 em testes contra medo.</p>' },
      { name: 'Bom Ouvinte', focus: 'Intuição', effect: '<p>Recebe +2 em Intuição.</p>' }
    ]
  },
  {
    title: 'Talentos Mentais', tag: 'Mental', desc: 'Conhecimento e percepção.',
    talents: [
      { name: 'Observador', focus: 'Percepção', effect: '<p>Recebe +2 em Percepção.</p>' },
      { name: 'Memória Fotográfica', focus: 'Conhecimento', effect: '<p>Recebe +2 em Conhecimento.</p><p>Sempre pode recordar informações vistas anteriormente, desde que o Mestre considere plausível.</p>' },
      { name: 'Investigador', focus: 'Busca', effect: '<p>Recebe +2 em Investigação.</p><p>Além disso, reduz pela metade o tempo necessário para procurar pistas ou vasculhar um ambiente.</p>' },
      { name: 'Sangue Frio', focus: 'Resistência mental', effect: '<p>Recebe +5 em testes de Vontade contra medo, pânico e pressão psicológica.</p>' },
      { name: 'Estrategista', focus: 'Planejamento', effect: '<p>Recebe +2 em Tática.</p><p>Uma vez por cena, pode conceder +1 na Iniciativa de todos os aliados que possam ouvi-lo antes do início de um combate.</p>' }
    ]
  }
];

setTimeout(() => {
  const talentosSection = document.getElementById('talentos');
  if (talentosSection) {
    let tableRows = '';
    let detailsCards = '';

    talentosData.forEach(cat => {
      cat.talents.forEach(t => {
        tableRows += `
          <div class="tt-row">
            <div class="tt-col"><strong>${cat.tag}</strong></div>
            <div class="tt-col"><strong>${t.name}</strong></div>
            <div class="tt-col tt-col-muted">${t.focus}</div>
          </div>
        `;
      });

      let talentsListHTML = cat.talents.map(t => `
        <div class="talent-item">
          <strong>${t.name}</strong>
          <div class="talent-effect">${t.effect}</div>
        </div>
      `).join('');

      detailsCards += `
        <div class="talent-category-card">
          <h4>${cat.title}</h4>
          <p class="talent-cat-desc">${cat.desc}</p>
          <div class="talent-list">${talentsListHTML}</div>
        </div>
      `;
    });

    talentosSection.innerHTML = `
      <h3>Talentos</h3>
      <p>Em um mundo onde cada decisão pode significar a diferença entre viver e morrer, sobreviver depende muito mais do que apenas força ou coragem. Os Talentos representam habilidades e técnicas que tornam cada sobrevivente único. Enquanto a Classe define o que você faz e a Origem conta quem você era, os Talentos mostram como você enfrenta o apocalipse. Escolha um Talento no 1º nível e receba novos nos níveis 4, 8, 12, 16 e 20.</p>
      
      <h4>Resumo de Talentos</h4>
      <div class="talents-table">
        <div class="tt-header">
          <div class="tt-col">Categoria</div>
          <div class="tt-col">Talento</div>
          <div class="tt-col">Foco</div>
        </div>
        ${tableRows}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <p class="eyebrow">DESCRIÇÃO DOS TALENTOS</p>
          <p>Explore as descrições e bônus específicos de cada talento.</p>
        </div>
        <button class="catalog-toggle" id="toggleTalentsBtn" type="button" aria-expanded="false">Exibir talentos</button>
      </div>

      <div id="talentsDetailsWrapper" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${detailsCards}
      </div>
    `;

    const toggleBtn = document.getElementById('toggleTalentsBtn');
    const detailsWrapper = document.getElementById('talentsDetailsWrapper');
    if(toggleBtn && detailsWrapper) {
      const setTalentsVisibility = collapsed => {
        detailsWrapper.style.display = collapsed ? 'none' : '';
        toggleBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleBtn.textContent = collapsed ? 'Exibir talentos' : 'Ocultar talentos';
        localStorage.setItem('t20-talentos-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const stored = localStorage.getItem('t20-talentos-desc');
      const isCollapsed = stored ? stored === 'collapsed' : true; 
      setTalentsVisibility(isCollapsed);
      
      toggleBtn.addEventListener('click', () => {
        setTalentsVisibility(detailsWrapper.style.display !== 'none');
      });
    }
  }
}, 250);

// ==========================================
// SEÇÃO DE SOBREVIVÊNCIA: FOME
// ==========================================
const fomeLevels = [
  { level: 0, status: 'Alimentado', effect: '<p>Você está bem alimentado. Seu corpo possui energia suficiente para enfrentar os desafios do dia.</p><strong>Efeitos:</strong> Nenhuma penalidade.' },
  { level: 1, status: 'Com Fome', effect: '<p>Você sente fome, mas ainda consegue trabalhar normalmente.</p><strong>Efeitos:</strong> Nenhuma penalidade mecânica.<p><em>Este estágio serve apenas como um alerta.</em></p>' },
  { level: 2, status: 'Faminto', effect: '<p>A falta de alimento começa a afetar seu rendimento.</p><strong>Efeitos:</strong><ul><li>–1 em testes baseados em Força.</li><li>–1 em testes baseados em Constituição.</li></ul>' },
  { level: 3, status: 'Desnutrido', effect: '<p>Seu corpo começa a economizar energia. Você se movimenta mais devagar e qualquer esforço se torna cansativo.</p><strong>Efeitos:</strong><ul><li>–2 em testes de Força.</li><li>–2 em testes de Constituição.</li><li>Deslocamento reduzido em 3 metros.</li><li>Recupera apenas metade dos PV durante descansos.</li></ul>' },
  { level: 4, status: 'Inanição', effect: '<p>Seu organismo entrou em estado crítico. Você sente tonturas constantes e dificuldade para permanecer em pé.</p><strong>Efeitos:</strong><ul><li>–2 em todos os testes físicos.</li><li>–1 em Iniciativa.</li><li>Recupera apenas metade da Adrenalina.</li><li>Não pode realizar corridas prolongadas.</li></ul>' },
  { level: 5, status: 'Colapso', effect: '<p>Seu corpo não consegue mais continuar. Você está à beira da morte por desnutrição.</p><strong>Efeitos:</strong><ul><li>Sofre 1d6 de dano verdadeiro a cada 24 horas.</li><li>Não recupera PV durante descansos.</li><li>Não recupera Adrenalina.</li><li>Recebe Desvantagem (ou –5, conforme a mecânica do sistema) em todos os testes físicos.</li><li>Enquanto permanecer nesse estágio, qualquer esforço extremo pode fazer o personagem desmaiar, a critério do Mestre.</li></ul>' }
];

setTimeout(() => {
  const fomeSection = document.getElementById('fome');
  if (fomeSection) {
    fomeSection.innerHTML = `
      <h3>Fome</h3>
      <p class="class-tagline" style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 12px; margin-bottom: 24px;">“Você consegue lutar por alguns minutos sem comida. Sobreviver por semanas é outra história.”</p>
      <p>A Fome representa o desgaste causado pela falta de alimentação adequada. Diferente dos ferimentos, seus efeitos aparecem de forma gradual, reduzindo a força física, a concentração e a capacidade de recuperação do personagem.</p>
      <p>Durante o apocalipse, encontrar alimento é tão importante quanto encontrar munição. Ignorar a Fome por muito tempo pode tornar até as tarefas mais simples um grande desafio.</p>

      <h4>Funcionamento</h4>
      <p>Cada personagem possui um Nível de Fome, variando entre 0 e 5. Quanto maior o nível, maiores serão as penalidades sofridas.</p>

      <div class="skills-table" style="margin: 20px 0;">
        <div class="st-header" style="grid-template-columns: 80px 1fr;">
          <div class="st-level">Nível</div>
          <div class="st-desc">Estado</div>
        </div>
        ${fomeLevels.map(f => `
          <div class="st-row" style="grid-template-columns: 80px 1fr;">
            <div class="st-level"><strong>${f.level}</strong></div>
            <div class="st-desc"><strong>${f.status}</strong></div>
          </div>
        `).join('')}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <p class="eyebrow">ESTÁGIOS DA FOME</p>
          <p>Confira os efeitos práticos de cada nível de desnutrição.</p>
        </div>
        <button class="catalog-toggle" id="toggleFomeBtn" type="button" aria-expanded="true">Ocultar estágios</button>
      </div>

      <div id="fomeDetailsWrapper" class="skill-desc-grid" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${fomeLevels.map(f => `
          <div class="sd-card">
            <h5>Nível ${f.level} — ${f.status}</h5>
            <div style="font-size: 0.95em;">${f.effect}</div>
          </div>
        `).join('')}
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como a Fome Aumenta</h3>
      <p>Todo personagem precisa consumir <strong>1 Ração por dia</strong>. Ao final de cada período de 24 horas, caso não tenha consumido alimento suficiente:</p>
      <p style="background: rgba(255,0,0,0.08); padding: 12px; border-left: 4px solid #d32f2f; border-radius: 4px;"><strong>A Fome aumenta em 1 estágio.</strong></p>

      <p style="margin-top: 20px;">Algumas situações aceleram esse processo:</p>
      <div class="talents-table" style="margin-bottom: 24px;">
        <div class="tt-header" style="grid-template-columns: 1fr 2fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Efeito</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Caminhada intensa o dia inteiro</strong></div><div class="tt-col tt-col-muted">+1 teste de desgaste (o mestre pode exigir uma refeição extra ou um teste de Constituição para evitar avanço da Fome)</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Trabalho pesado</strong></div><div class="tt-col tt-col-muted">+1 teste de desgaste (o mestre pode exigir uma refeição extra ou um teste de Constituição para evitar avanço da Fome)</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Frio extremo</strong></div><div class="tt-col tt-col-muted">+1 teste de desgaste (o mestre pode exigir uma refeição extra ou um teste de Constituição para evitar avanço da Fome)</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Longas corridas</strong></div><div class="tt-col tt-col-muted">+1 teste de desgaste (o mestre pode exigir uma refeição extra ou um teste de Constituição para evitar avanço da Fome)</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Ferimentos graves</strong></div><div class="tt-col tt-col-muted">+1 teste de desgaste (o mestre pode exigir uma refeição extra ou um teste de Constituição para evitar avanço da Fome)</div></div>
      </div>
      <p><small><em>Essas situações não aumentam automaticamente a Fome, mas tornam o desgaste mais severo e justificam exigências adicionais do Mestre.</em></small></p>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como Reduzir a Fome</h3>
      <p>A comida possui uma classificação nutricional:</p>
      <div class="talents-table" style="margin-bottom: 20px;">
        <div class="tt-header" style="grid-template-columns: 1fr 1fr;">
          <div class="tt-col">Alimento</div>
          <div class="tt-col">Recuperação</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Lanche pequeno</strong></div><div class="tt-col tt-col-muted">reduz 1 estágio apenas se a Fome estiver em 1 ou 2</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Refeição simples</strong></div><div class="tt-col tt-col-muted">reduz 1 estágio</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Refeição completa</strong></div><div class="tt-col tt-col-muted">reduz 2 estágios</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Banquete ou refeição excepcional</strong></div><div class="tt-col tt-col-muted">reduz até 3 estágios (máximo uma vez por dia)</div></div>
      </div>
      <p><strong>Nota:</strong> Nunca é possível reduzir a Fome abaixo do estágio 0.</p>

      <h4>Comer Não é Instantâneo</h4>
      <p>Durante um combate, consumir alimento exige <strong>1 Ação Completa</strong>. Normalmente isso não compensa.</p>

      <h4>Qualidade da Comida</h4>
      <p>Nem toda comida é segura.</p>
      <div class="talents-table" style="margin-bottom: 16px;">
        <div class="tt-header" style="grid-template-columns: 1fr 1fr;">
          <div class="tt-col">Estado</div>
          <div class="tt-col">Exemplo</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Fresca</strong></div><div class="tt-col tt-col-muted">Ideal</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Conservada</strong></div><div class="tt-col tt-col-muted">Enlatados</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Improvisada</strong></div><div class="tt-col tt-col-muted">Caça</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Estragada</strong></div><div class="tt-col tt-col-muted">Alimento vencido</div></div>
      </div>
      <p>Comida estragada exige um teste de Fortitude. Em caso de <strong>Falha</strong>, o personagem pode sofrer intoxicação ou doença.</p>

      <div class="callout info" style="margin-top: 24px;">
        <strong>O Papel do Cozinheiro</strong>
        <p>Personagens com o Talento <em>Cozinheiro</em> conseguem aproveitar melhor os ingredientes disponíveis. Uma refeição preparada por um cozinheiro pode:</p>
        <ul style="margin-top: 8px;">
          <li>Alimentar mais pessoas;</li>
          <li>Reduzir um estágio adicional de Fome;</li>
          <li>Aumentar a Moral do grupo, conforme as regras da campanha.</li>
        </ul>
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Fome, Infecção e Moral</h3>
      <p>O enfraquecimento físico e mental tem consequências diretas em outros aspectos da sobrevivência:</p>
      
      <h4>Fome e Moral</h4>
      <p>A Fome afeta diretamente o estado emocional. Sempre que um personagem atingir os níveis <strong>4 (Inanição)</strong> ou <strong>5 (Colapso)</strong>, ele <strong>perde 1 ponto de Moral por dia</strong>. Isso representa irritação, desânimo e perda de esperança.</p>

      <h4>Fome e Infecção</h4>
      <p>Um corpo enfraquecido reage pior às doenças. Enquanto estiver nos níveis <strong>4 ou 5</strong>, o personagem sofre <strong>–2 em testes de Fortitude</strong> contra doenças e Infecção, representando um sistema imunológico debilitado.</p>

      <h4>Recuperação</h4>
      <p>Mesmo após comer, o corpo demora para voltar ao normal. Se o personagem atingir os níveis 4 ou 5, recuperar-se completamente exige <strong>pelo menos 24 horas de descanso</strong> com alimentação adequada e hidratação suficiente.</p>
    `;

    const toggleFomeBtn = document.getElementById('toggleFomeBtn');
    const fomeDetailsWrapper = document.getElementById('fomeDetailsWrapper');
    if (toggleFomeBtn && fomeDetailsWrapper) {
      const setFomeVisibility = collapsed => {
        fomeDetailsWrapper.style.display = collapsed ? 'none' : '';
        toggleFomeBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleFomeBtn.textContent = collapsed ? 'Exibir estágios' : 'Ocultar estágios';
        localStorage.setItem('t20-fome-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-fome-desc') === 'collapsed';
      setFomeVisibility(isCollapsed);
      
      toggleFomeBtn.addEventListener('click', () => {
        setFomeVisibility(fomeDetailsWrapper.style.display !== 'none');
      });
    }
  }
}, 300);

// ==========================================
// SEÇÃO DE SOBREVIVÊNCIA: SEDE
// ==========================================
const sedeLevels = [
  { level: 0, status: 'Hidratado', effect: '<p>Você possui água suficiente para manter o corpo funcionando normalmente.</p><strong>Efeitos:</strong> Nenhuma penalidade.' },
  { level: 1, status: 'Com Sede', effect: '<p>Sua garganta está seca e você começa a sentir desconforto.</p><strong>Efeitos:</strong> Nenhuma penalidade mecânica.<p><em>Este estágio serve apenas como um aviso.</em></p>' },
  { level: 2, status: 'Desidratado', effect: '<p>A falta de líquidos começa a comprometer seu desempenho.</p><strong>Efeitos:</strong><ul><li>–1 em testes baseados em Constituição.</li><li>–1 em testes de Fortitude.</li></ul>' },
  { level: 3, status: 'Desidratação Severa', effect: '<p>Seu corpo perde a capacidade de regular a temperatura corretamente. Você sente tontura, fadiga e dificuldade para manter o ritmo.</p><strong>Efeitos:</strong><ul><li>–2 em Constituição.</li><li>–2 em Fortitude.</li><li>Deslocamento reduzido em 3 metros.</li><li>Recupera apenas metade da Adrenalina durante descansos.</li></ul>' },
  { level: 4, status: 'Estado Crítico', effect: '<p>Seu organismo começa a entrar em falência. Você sente câimbras, visão embaçada e dificuldade para permanecer consciente.</p><strong>Efeitos:</strong><ul><li>–2 em todos os testes físicos.</li><li>–2 em Iniciativa.</li><li>Não recupera Adrenalina.</li><li>Recupera apenas metade dos Pontos de Vida.</li><li>Sempre que terminar um combate ou realizar uma atividade exaustiva, faça um teste de Fortitude. Em caso de falha, avance imediatamente para o estágio 5.</li></ul>' },
  { level: 5, status: 'Colapso', effect: '<p>Seu corpo não consegue mais manter as funções vitais. Você está à beira da morte por desidratação.</p><strong>Efeitos:</strong><ul><li>Sofre 1d6 de dano verdadeiro a cada 12 horas.</li><li>Não recupera Pontos de Vida.</li><li>Não recupera Adrenalina.</li><li>Recebe –5 em todos os testes físicos.</li><li>Sempre que iniciar um combate, faça um teste de Fortitude. Em caso de falha, você inicia a cena <strong>Caído</strong>, incapaz de agir até receber auxílio ou água.</li></ul>' }
];

setTimeout(() => {
  const sedeSection = document.getElementById('sede');
  if (sedeSection) {
    sedeSection.innerHTML = `
      <h3>Sede</h3>
      <p class="class-tagline" style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 12px; margin-bottom: 24px;">“Sem comida você enfraquece. Sem água você para.”</p>
      <p>A Sede representa a desidratação do organismo causada pela falta de água potável. Durante o apocalipse, encontrar uma fonte segura de água pode ser tão importante quanto encontrar munição ou um abrigo.</p>
      <p>Rios, lagos e reservatórios nem sempre são seguros. Beber água contaminada pode matar tão facilmente quanto a própria desidratação.</p>

      <h4>Funcionamento</h4>
      <p>Cada personagem possui um Nível de Sede, variando entre 0 e 5. Quanto maior o nível, mais debilitado seu corpo se torna.</p>

      <div class="skills-table" style="margin: 20px 0;">
        <div class="st-header" style="grid-template-columns: 80px 1fr;">
          <div class="st-level">Nível</div>
          <div class="st-desc">Estado</div>
        </div>
        ${sedeLevels.map(s => `
          <div class="st-row" style="grid-template-columns: 80px 1fr;">
            <div class="st-level"><strong>${s.level}</strong></div>
            <div class="st-desc"><strong>${s.status}</strong></div>
          </div>
        `).join('')}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <p class="eyebrow">ESTÁGIOS DA SEDE</p>
          <p>Confira os efeitos práticos de cada nível de desidratação.</p>
        </div>
        <button class="catalog-toggle" id="toggleSedeBtn" type="button" aria-expanded="true">Ocultar estágios</button>
      </div>

      <div id="sedeDetailsWrapper" class="skill-desc-grid" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${sedeLevels.map(s => `
          <div class="sd-card">
            <h5>Nível ${s.level} — ${s.status}</h5>
            <div style="font-size: 0.95em;">${s.effect}</div>
          </div>
        `).join('')}
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como a Sede Aumenta</h3>
      <p>Todo personagem deve consumir <strong>2 litros de água potável por dia</strong> para permanecer hidratado. Ao final de cada período de 24 horas, caso não tenha ingerido água suficiente:</p>
      <p style="background: rgba(255,0,0,0.08); padding: 12px; border-left: 4px solid #d32f2f; border-radius: 4px;"><strong>A Sede aumenta em 1 estágio.</strong></p>

      <p style="margin-top: 20px;">Algumas situações aceleram esse processo:</p>
      <div class="talents-table" style="margin-bottom: 24px;">
        <div class="tt-header" style="grid-template-columns: 1fr 2fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Efeito</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Calor intenso</strong></div><div class="tt-col tt-col-muted">Avança 1 estágio adicional.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Corridas prolongadas</strong></div><div class="tt-col tt-col-muted">Avança 1 estágio adicional.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Combates longos</strong></div><div class="tt-col tt-col-muted">O Mestre pode exigir consumo extra de água.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Trabalho pesado</strong></div><div class="tt-col tt-col-muted">Avança 1 estágio adicional.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Uso de roupas pesadas ou equipamentos de proteção</strong></div><div class="tt-col tt-col-muted">Pode aumentar o consumo diário de água.</div></div>
      </div>
      <p><small><em>Esses efeitos são cumulativos, a critério do Mestre.</em></small></p>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como Reduzir a Sede</h3>
      <p>A recuperação depende da quantidade e da qualidade da água consumida.</p>
      <div class="talents-table" style="margin-bottom: 20px;">
        <div class="tt-header" style="grid-template-columns: 1fr 1fr;">
          <div class="tt-col">Água consumida</div>
          <div class="tt-col">Recuperação</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Pequena quantidade</strong></div><div class="tt-col tt-col-muted">Reduz 1 estágio apenas se estiver nos níveis 1 ou 2.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>1 litro de água potável</strong></div><div class="tt-col tt-col-muted">Reduz 1 estágio.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>2 litros de água potável</strong></div><div class="tt-col tt-col-muted">Reduz 2 estágios.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Descanso completo com hidratação adequada</strong></div><div class="tt-col tt-col-muted">Remove até 3 estágios (máximo uma vez por dia).</div></div>
      </div>
      <p><strong>Nota:</strong> Nunca é possível reduzir a Sede abaixo do estágio 0.</p>

      <div class="callout info" style="margin-top: 24px;">
        <strong>⚠️ Água Contaminada</strong>
        <p>Nem toda água encontrada durante o apocalipse é segura. Água retirada de rios, lagos, caixas d'água abandonadas ou poças pode estar contaminada por bactérias, produtos químicos ou matéria orgânica.</p>
        <p style="margin-top: 8px;">Ao beber água contaminada, o personagem deve realizar um <strong>teste de Fortitude</strong>:</p>
        <ul style="margin-top: 6px;">
          <li><strong>Sucesso:</strong> Não sofre efeitos imediatos.</li>
          <li><strong>Falha:</strong> Recupera normalmente a Sede, mas contrai uma Infecção ou outra doença, conforme decisão do Mestre.</li>
        </ul>
        <p style="margin-top: 8px;"><em>Ferver ou purificar a água utilizando filtros ou pastilhas químicas elimina esse risco.</em></p>
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Desidratação, Tensão e Moral</h3>
      <p>A falta de água afeta o corpo de forma muito mais agressiva do que a fome, gerando complicações severas no psicológico e na imunidade:</p>
      
      <h4>Sede e Moral</h4>
      <p>A desidratação prolongada aumenta a irritação, reduz a concentração e afeta o humor. Sempre que um personagem atingir os níveis <strong>4 ou 5</strong>, ele <strong>perde 1 ponto de Moral</strong> ao final do dia caso não consiga reduzir seu nível de Sede.</p>

      <h4>Sede e Tensão</h4>
      <p>Enquanto estiver nos níveis <strong>3 ou superiores</strong>, o personagem sofre <strong>+1 Tensão</strong> sempre que entrar em combate, refletindo o estresse físico e mental causado pela desidratação severa.</p>

      <h4>Sede e Infecção</h4>
      <p>Um organismo desidratado responde pior às doenças. Enquanto estiver nos níveis <strong>4 ou 5</strong>, o personagem sofre <strong>–2 em testes de Fortitude</strong> contra Infecções e outras doenças, tornando-se muito mais vulnerável a complicações.</p>

      <h4>Recuperação</h4>
      <p>Mesmo após beber água, o organismo precisa de tempo para se recuperar. Se um personagem atingir os níveis <strong>4 ou 5</strong>, ele só recupera totalmente sua capacidade física após <strong>24 horas de descanso</strong>, hidratação adequada e alimentação suficiente.</p>
    `;

    const toggleSedeBtn = document.getElementById('toggleSedeBtn');
    const sedeDetailsWrapper = document.getElementById('sedeDetailsWrapper');
    if (toggleSedeBtn && sedeDetailsWrapper) {
      const setSedeVisibility = collapsed => {
        sedeDetailsWrapper.style.display = collapsed ? 'none' : '';
        toggleSedeBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleSedeBtn.textContent = collapsed ? 'Exibir estágios' : 'Ocultar estágios';
        localStorage.setItem('t20-sede-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-sede-desc') === 'collapsed';
      setSedeVisibility(isCollapsed);
      
      toggleSedeBtn.addEventListener('click', () => {
        setSedeVisibility(sedeDetailsWrapper.style.display !== 'none');
      });
    }
  }
}, 350);

// ==========================================
// SEÇÃO DE SOBREVIVÊNCIA: SONO
// ==========================================
const sonoLevels = [
  { level: 0, status: 'Bem Descansado', effect: '<p>Você dormiu o suficiente e seu corpo está recuperado.</p><strong>Efeitos:</strong> Nenhuma penalidade.' },
  { level: 1, status: 'Sonolento', effect: '<p>Você boceja com frequência e sente um leve cansaço.</p><strong>Efeitos:</strong> Nenhuma penalidade mecânica.<p><em>Este estágio serve apenas como um alerta.</em></p>' },
  { level: 2, status: 'Cansado', effect: '<p>A fadiga começa a comprometer sua atenção.</p><strong>Efeitos:</strong><ul><li>–1 em testes de Percepção.</li><li>–1 em testes de Iniciativa.</li></ul>' },
  { level: 3, status: 'Exausto', effect: '<p>Seu corpo responde mais lentamente e sua mente perde o foco.</p><strong>Efeitos:</strong><ul><li>–2 em Percepção.</li><li>–2 em Iniciativa.</li><li>–1 em testes de Inteligência.</li><li>Recupera apenas metade da Adrenalina durante descansos.</li></ul>' },
  { level: 4, status: 'Exaustão Severa', effect: '<p>Você luta para manter os olhos abertos. Seu tempo de reação diminui drasticamente.</p><strong>Efeitos:</strong><ul><li>–2 em todos os testes mentais.</li><li>–2 em Iniciativa.</li><li>Deslocamento reduzido em 3 metros.</li><li>Recupera apenas metade dos Pontos de Vida.</li><li>Não recupera toda a Adrenalina.</li><li>Sempre que terminar um combate ou realizar esforço intenso, faça um teste de Vontade. Em caso de falha, avance para o estágio 5.</li></ul>' },
  { level: 5, status: 'Colapso', effect: '<p>Seu organismo não consegue mais permanecer acordado. O sono vence qualquer esforço.</p><strong>Efeitos:</strong><ul><li>–5 em todos os testes mentais.</li><li>Não recupera Pontos de Vida.</li><li>Não recupera Adrenalina.</li><li>Sempre que iniciar uma cena de combate, faça um teste de Vontade. Em caso de falha, você perde seu primeiro turno, representando um lapso de atenção ou um breve apagão.</li><li>Sempre que permanecer em um local seguro por alguns minutos, o Mestre pode exigir um novo teste de Vontade. Em caso de falha, o personagem adormece involuntariamente.</li></ul>' }
];

setTimeout(() => {
  const sonoSection = document.getElementById('sono');
  if (sonoSection) {
    sonoSection.innerHTML = `
      <h3>Sono</h3>
      <p class="class-tagline" style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 12px; margin-bottom: 24px;">“No apocalipse, dormir é um luxo. Dormir em segurança é um milagre.”</p>
      <p>O Sono representa a necessidade de descanso físico e mental do personagem. Um sobrevivente cansado demora mais para reagir, comete erros simples e perde a capacidade de tomar boas decisões. Permanecer acordado por longos períodos pode ser tão perigoso quanto enfrentar uma horda de infectados.</p>

      <h4>Funcionamento</h4>
      <p>Cada personagem possui um Nível de Sono, variando entre 0 e 5. Quanto maior o nível, mais cansado ele está.</p>

      <div class="skills-table" style="margin: 20px 0;">
        <div class="st-header" style="grid-template-columns: 80px 1fr;">
          <div class="st-level">Nível</div>
          <div class="st-desc">Estado</div>
        </div>
        ${sonoLevels.map(s => `
          <div class="st-row" style="grid-template-columns: 80px 1fr;">
            <div class="st-level"><strong>${s.level}</strong></div>
            <div class="st-desc"><strong>${s.status}</strong></div>
          </div>
        `).join('')}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <p class="eyebrow">ESTÁGIOS DO SONO</p>
          <p>Confira os efeitos práticos da privação de sono e cansaço extremo.</p>
        </div>
        <button class="catalog-toggle" id="toggleSonoBtn" type="button" aria-expanded="true">Ocultar estágios</button>
      </div>

      <div id="sonoDetailsWrapper" class="skill-desc-grid" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${sonoLevels.map(s => `
          <div class="sd-card">
            <h5>Nível ${s.level} — ${s.status}</h5>
            <div style="font-size: 0.95em;">${s.effect}</div>
          </div>
        `).join('')}
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como o Sono Aumenta</h3>
      <p>Um personagem precisa dormir aproximadamente <strong>8 horas por dia</strong> para permanecer descansado. Ao final de cada período de 24 horas sem descanso adequado:</p>
      <p style="background: rgba(255,0,0,0.08); padding: 12px; border-left: 4px solid #d32f2f; border-radius: 4px;"><strong>O Nível de Sono aumenta em 1 estágio.</strong></p>

      <p style="margin-top: 20px;">Algumas situações tornam esse desgaste ainda maior:</p>
      <div class="talents-table" style="margin-bottom: 24px;">
        <div class="tt-header" style="grid-template-columns: 1fr 2fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Efeito</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Dormir menos de 4 horas</strong></div><div class="tt-col tt-col-muted">Avança 1 estágio adicional.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Permanecer de vigília durante toda a noite</strong></div><div class="tt-col tt-col-muted">Avança 1 estágio adicional.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Realizar marchas longas</strong></div><div class="tt-col tt-col-muted">O Mestre pode exigir um teste de Constituição para evitar aumento do Sono.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 2fr;"><div class="tt-col"><strong>Combates consecutivos sem descanso</strong></div><div class="tt-col tt-col-muted">Pode aumentar o desgaste, a critério do Mestre.</div></div>
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Descanso</h3>
      <p>Nem todo descanso possui a mesma qualidade.</p>
      <div class="talents-table" style="margin-bottom: 20px;">
        <div class="tt-header" style="grid-template-columns: 1fr 1fr;">
          <div class="tt-col">Tipo de descanso</div>
          <div class="tt-col">Recuperação</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Cochilo (1 a 2 horas)</strong></div><div class="tt-col tt-col-muted">Reduz 1 estágio (máximo até o estágio 2).</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Sono interrompido</strong></div><div class="tt-col tt-col-muted">Reduz 1 estágio.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Sono normal (8 horas)</strong></div><div class="tt-col tt-col-muted">Reduz 2 estágios.</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>Descanso confortável e seguro</strong></div><div class="tt-col tt-col-muted">Reduz até 3 estágios e recupera normalmente os demais recursos.</div></div>
      </div>
      <p><strong>Nota:</strong> Nunca é possível reduzir o Nível de Sono abaixo de 0.</p>

      <div class="callout info" style="margin-top: 24px;">
        <strong>⛺ Dormindo em Locais Inseguros</strong>
        <p>Dormir em um prédio abandonado, dentro de um veículo ou ao relento nunca é totalmente seguro. Sempre que o grupo realizar um descanso em uma área insegura, o Mestre pode determinar uma ou mais das seguintes consequências:</p>
        <ul style="margin-top: 8px;">
          <li>Interrupção do descanso por ruídos ou ataques;</li>
          <li>Recuperação reduzida;</li>
          <li>Aumento da Tensão ao acordar;</li>
          <li>Encontros aleatórios durante a noite.</li>
        </ul>
        <p style="margin-top: 8px;"><em>Isso incentiva os jogadores a procurar ou construir abrigos seguros.</em></p>
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Cansaço, Tensão e Outros Fatores</h3>
      <p>O cansaço mental e físico atinge o sobrevivente de várias formas ao mesmo tempo:</p>
      
      <h4>Sono e Moral</h4>
      <p>O cansaço prolongado afeta o humor e a convivência. Enquanto permanecer nos níveis <strong>4 ou 5</strong>, o personagem <strong>perde 1 ponto de Moral</strong> ao final de cada dia caso não consiga descansar adequadamente.</p>

      <h4>Sono e Tensão</h4>
      <p>A privação de sono torna qualquer situação mais estressante. Enquanto estiver nos níveis <strong>3 ou superiores</strong>, o personagem recebe <strong>+1 Tensão</strong> sempre que entrar em combate ou enfrentar um evento de grande perigo.</p>

      <h4>Sono e Infecção</h4>
      <p>O descanso é essencial para a recuperação do organismo. Enquanto estiver nos níveis <strong>4 ou 5</strong>, o personagem sofre <strong>–2 em testes de Fortitude</strong> contra Infecções e doenças, representando a queda de sua resistência física.</p>

      <h4>Sono e Recuperação</h4>
      <p>O Sono interfere diretamente na recuperação dos demais recursos. Um personagem nos níveis 3 ou superiores recupera menos Pontos de Vida e Adrenalina durante descansos. Nos níveis 4 e 5, a recuperação é severamente comprometida, reforçando a importância de encontrar um abrigo seguro antes de continuar explorando.</p>

      <div class="callout warning" style="margin-top: 24px; background: rgba(211, 47, 47, 0.1); border-color: #d32f2f;">
        <strong style="color: #ff8a80;">⚠️ Privação Prolongada de Sono</strong>
        <p>Se um personagem permanecer por três dias consecutivos no estágio <strong>5 — Colapso</strong>, ele passa a sofrer alucinações, lapsos de memória e desorientação, ficando sujeito a eventos narrativos determinados pelo Mestre, como confundir aliados com inimigos, interpretar sons inexistentes ou perder a noção do tempo.</p>
      </div>
    `;

    const toggleSonoBtn = document.getElementById('toggleSonoBtn');
    const sonoDetailsWrapper = document.getElementById('sonoDetailsWrapper');
    if (toggleSonoBtn && sonoDetailsWrapper) {
      const setSonoVisibility = collapsed => {
        sonoDetailsWrapper.style.display = collapsed ? 'none' : '';
        toggleSonoBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleSonoBtn.textContent = collapsed ? 'Exibir estágios' : 'Ocultar estágios';
        localStorage.setItem('t20-sono-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-sono-desc') === 'collapsed';
      setSonoVisibility(isCollapsed);
      
      toggleSonoBtn.addEventListener('click', () => {
        setSonoVisibility(sonoDetailsWrapper.style.display !== 'none');
      });
    }
  }
}, 400);

// ==========================================
// SEÇÃO DE SOBREVIVÊNCIA: INFECÇÃO
// ==========================================
const infeccaoLevels = [
  { level: 0, status: 'Saudável', effect: '<p>Você não apresenta sinais de infecção.</p><strong>Efeitos:</strong> Nenhuma penalidade.' },
  { level: 1, status: 'Contaminado', effect: '<p>Você foi exposto ao agente infeccioso, mas seu organismo ainda luta contra ele. Pode representar uma mordida superficial, um corte contaminado ou contato com sangue infectado.</p><strong>Efeitos:</strong> Nenhuma penalidade imediata.<p>Ao final de cada dia, faça um teste de Fortitude. <strong>Sucesso:</strong> permanece no estágio atual. <strong>Falha:</strong> avança para o estágio 2.</p>' },
  { level: 2, status: 'Infectado', effect: '<p>Os primeiros sintomas aparecem. Febre, dores musculares e fadiga começam a surgir.</p><strong>Efeitos:</strong><ul><li>–1 em Constituição.</li><li>–1 em Fortitude.</li><li>Recupera apenas metade dos Pontos de Vida.</li></ul><p>Ao final de cada dia, realize um teste de Fortitude. <strong>Sucesso:</strong> permanece no estágio atual. <strong>Falha:</strong> avança para o estágio 3.</p>' },
  { level: 3, status: 'Infecção Grave', effect: '<p>Seu corpo trava uma batalha intensa contra a doença. A febre aumenta, a fraqueza se torna evidente e cada esforço exige muito mais energia.</p><strong>Efeitos:</strong><ul><li>–2 em Constituição.</li><li>–2 em Fortitude.</li><li>Deslocamento reduzido em 3 metros.</li><li>Recupera apenas metade da Adrenalina.</li><li>Não pode realizar atividades extenuantes sem autorização do Mestre.</li></ul><p>Ao final de cada dia, faça um teste de Fortitude com desvantagem (ou –5, conforme a mecânica do sistema). <strong>Falha:</strong> Avança para o estágio 4.</p>' },
  { level: 4, status: 'Estado Crítico', effect: '<p>Seu organismo está perdendo a batalha. Você apresenta febre alta, tremores e dificuldade para permanecer consciente.</p><strong>Efeitos:</strong><ul><li>–2 em todos os testes físicos.</li><li>Não recupera Adrenalina.</li><li>Recupera apenas metade dos Pontos de Vida.</li><li>Sofre 1d4 de dano verdadeiro ao final de cada dia.</li></ul><p>Ao final de cada dia, faça um teste de Fortitude. <strong>Falha:</strong> Avança para o estágio 5.</p>' },
  { level: 5, status: 'Terminal', effect: '<p>A infecção domina completamente seu organismo. Sem tratamento imediato, sua morte é apenas uma questão de tempo.</p><strong>Efeitos:</strong><ul><li>Sofre 1d6 de dano verdadeiro a cada 12 horas.</li><li>Não recupera Pontos de Vida.</li><li>Não recupera Adrenalina.</li><li>Recebe –5 em todos os testes físicos e mentais.</li></ul><p>Quando seus Pontos de Vida chegarem a 0 devido à Infecção, o destino do personagem depende da natureza da doença na campanha. Em campanhas com vírus zumbi, ele pode morrer e reanimar como um infectado após o tempo determinado pelo Mestre.</p>' }
];

setTimeout(() => {
  const infeccaoSection = document.getElementById('infeccao');
  if (infeccaoSection) {
    infeccaoSection.innerHTML = `
      <h3>Infecção</h3>
      <p class="class-tagline" style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 12px; margin-bottom: 24px;">“Nem toda mordida mata na hora. Algumas apenas começam a contagem regressiva.”</p>
      <p>A Infecção representa doenças causadas por mordidas, arranhões, ferimentos contaminados ou contato prolongado com fluidos infecciosos. Além do vírus responsável pelo apocalipse, ela também engloba infecções bacterianas, septicemias e outras complicações médicas decorrentes da falta de higiene e de tratamento adequado.</p>
      <p>Ao contrário das demais mecânicas de sobrevivência, a Infecção não aumenta com o tempo, mas sim por exposição a fontes de contaminação e pela evolução da própria doença.</p>

      <h4>Funcionamento</h4>
      <p>Cada personagem possui um Nível de Infecção, variando entre 0 e 5.</p>

      <div class="skills-table" style="margin: 20px 0;">
        <div class="st-header" style="grid-template-columns: 80px 1fr;">
          <div class="st-level">Nível</div>
          <div class="st-desc">Estado</div>
        </div>
        ${infeccaoLevels.map(i => `
          <div class="st-row" style="grid-template-columns: 80px 1fr;">
            <div class="st-level"><strong>${i.level}</strong></div>
            <div class="st-desc"><strong>${i.status}</strong></div>
          </div>
        `).join('')}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <p class="eyebrow">ESTÁGIOS DA INFECÇÃO</p>
          <p>Confira a progressão dos sintomas e o impacto de cada estágio da doença.</p>
        </div>
        <button class="catalog-toggle" id="toggleInfeccaoBtn" type="button" aria-expanded="true">Ocultar estágios</button>
      </div>

      <div id="infeccaoDetailsWrapper" class="skill-desc-grid" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${infeccaoLevels.map(i => `
          <div class="sd-card">
            <h5>Nível ${i.level} — ${i.status}</h5>
            <div style="font-size: 0.95em;">${i.effect}</div>
          </div>
        `).join('')}
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como a Infecção Acontece</h3>
      <p>O Mestre determina quando há risco de contaminação. Situações comuns incluem:</p>
      <div class="talents-table" style="margin-bottom: 20px;">
        <div class="tt-header" style="grid-template-columns: 2fr 1fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Risco</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Mordida de infectado</strong></div><div class="tt-col" style="color: #ff1744; font-weight: bold;">Muito Alto</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Arranhão profundo</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">Alto</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Contato com sangue infectado em feridas abertas</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">Alto</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Corte com objeto contaminado</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">Médio</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Água contaminada</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">Médio</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Ferimentos sem tratamento por vários dias</strong></div><div class="tt-col" style="color: #81c784;">Baixo</div></div>
      </div>
      <p>Sempre que ocorrer uma exposição, o personagem realiza um teste de Fortitude. <strong>Sucesso:</strong> evita a contaminação. <strong>Falha:</strong> passa para o estágio 1 — Contaminado.</p>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Tratando a Infecção</h3>
      <p>Nem toda infecção evolui inevitavelmente. O tratamento adequado pode interromper ou até reverter seu avanço.</p>
      <p>Algumas formas de tratamento incluem:</p>
      <ul style="margin: 8px 0 16px 20px; color: var(--muted);">
        <li>Limpeza imediata do ferimento e desinfecção;</li>
        <li>Curativos esterilizados e antibióticos;</li>
        <li>Atendimento médico ou cirurgias, em casos extremos.</li>
      </ul>
      <p>Cada tratamento concede bônus no próximo teste de Fortitude ou reduz um estágio da Infecção, conforme o recurso utilizado e a decisão do Mestre.</p>

      <div class="callout info" style="margin-top: 20px;">
        <strong>💊 Antibióticos</strong>
        <p>Antibióticos não curam o vírus do apocalipse, mas combatem infecções bacterianas secundárias. Quando utilizados corretamente, concedem <strong>vantagem (ou +5)</strong> no próximo teste de Fortitude relacionado à Infecção. Cada dose só pode beneficiar um mesmo personagem uma vez por estágio.</p>
      </div>

      <div class="callout warning" style="margin-top: 16px; background: rgba(211, 47, 47, 0.1); border-color: #d32f2f;">
        <strong style="color: #ff8a80;">🪓 Amputação</strong>
        <p>Em campanhas que utilizam esse tipo de narrativa, uma amputação imediata pode impedir a progressão da infecção causada por uma mordida localizada em um membro. Para isso, a amputação deve ocorrer rapidamente após a exposição, conforme definido pelo Mestre. Esse procedimento exige equipamentos adequados, tratamento posterior e pode deixar sequelas permanentes.</p>
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>A Infecção no Dia a Dia</h3>
      <p>As reações do organismo a uma doença afetam drasticamente as outras necessidades vitais:</p>
      
      <h4>Infecção e Fome</h4>
      <p>Enquanto estiver nos níveis <strong>3 ou superiores</strong>, toda recuperação de Fome é <strong>reduzida em 1 estágio</strong>, representando a perda de apetite causada pela doença.</p>

      <h4>Infecção e Sede</h4>
      <p>Personagens infectados precisam de mais líquidos. Enquanto estiver nos níveis <strong>3 ou superiores</strong>, o consumo diário de água <strong>dobra</strong>. Caso não seja atendido, a Sede aumenta normalmente e seus efeitos se acumulam.</p>

      <h4>Infecção e Sono</h4>
      <p>A febre dificulta um descanso reparador. Mesmo dormindo normalmente, personagens nos níveis <strong>4 e 5</strong> recuperam <strong>apenas 1 estágio de Sono</strong>, em vez da quantidade habitual.</p>

      <h4>Infecção e Moral</h4>
      <p>Ver um companheiro adoecer lentamente é devastador. Sempre que um membro do grupo atingir o <strong>estágio 5 — Terminal</strong>, todos os aliados que presenciarem a situação recebem <strong>–1 Moral</strong>, a critério do Mestre.</p>

      <h4>Recuperação</h4>
      <p>A Infecção raramente desaparece sozinha. Após tratamento adequado, repouso e sucesso em testes consecutivos de Fortitude, o personagem pode <strong>reduzir seu nível de Infecção em 1 estágio por dia</strong>, até retornar ao estágio 0 — Saudável.</p>
      <p><small><em>Nota: Infecções causadas pelo vírus principal da campanha podem seguir regras próprias e, se desejado, serem incuráveis.</em></small></p>
    `;

    const toggleInfeccaoBtn = document.getElementById('toggleInfeccaoBtn');
    const infeccaoDetailsWrapper = document.getElementById('infeccaoDetailsWrapper');
    if (toggleInfeccaoBtn && infeccaoDetailsWrapper) {
      const setInfeccaoVisibility = collapsed => {
        infeccaoDetailsWrapper.style.display = collapsed ? 'none' : '';
        toggleInfeccaoBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleInfeccaoBtn.textContent = collapsed ? 'Exibir estágios' : 'Ocultar estágios';
        localStorage.setItem('t20-infeccao-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-infeccao-desc') === 'collapsed';
      setInfeccaoVisibility(isCollapsed);
      
      toggleInfeccaoBtn.addEventListener('click', () => {
        setInfeccaoVisibility(infeccaoDetailsWrapper.style.display !== 'none');
      });
    }
  }
}, 450);

// ==========================================
// SEÇÃO DE SOBREVIVÊNCIA: MORAL
// ==========================================
const moralLevels = [
  { level: 5, status: 'Inspirado', effect: '<p>Você acredita que ainda existe um futuro. Sua determinação inspira os demais sobreviventes.</p><strong>Benefícios:</strong><ul><li>+2 em testes de Vontade.</li><li>+1 em testes sociais.</li><li>Sempre que um aliado falhar em um teste de Moral, você pode permitir que ele repita esse teste uma vez por dia.</li></ul>' },
  { level: 4, status: 'Confiante', effect: '<p>Você mantém o foco mesmo diante das dificuldades.</p><strong>Benefícios:</strong><ul><li>+1 em testes de Vontade.</li><li>+1 contra efeitos de medo.</li></ul>' },
  { level: 3, status: 'Determinado', effect: '<p>Você continua lutando. Mesmo cansado e assustado, ainda acredita que vale a pena sobreviver.</p><strong>Efeitos:</strong> Nenhum modificador.<p><em>Este é o estado considerado normal para a maioria dos sobreviventes.</em></p>' },
  { level: 2, status: 'Abalado', effect: '<p>As perdas começam a pesar. Você questiona se tudo isso ainda faz sentido.</p><strong>Penalidades:</strong><ul><li>–1 em testes de Vontade.</li><li>–1 em testes sociais de liderança ou persuasão.</li></ul>' },
  { level: 1, status: 'Desesperançoso', effect: '<p>Você perdeu quase toda a confiança. Levantar da cama já exige esforço.</p><strong>Penalidades:</strong><ul><li>–2 em testes de Vontade.</li><li>–1 em todos os testes sociais.</li><li>Sempre que iniciar um combate, faça um teste de Vontade. Em caso de falha, receba +1 Tensão imediatamente.</li></ul>' },
  { level: 0, status: 'Quebrado', effect: '<p>Você perdeu completamente a esperança. Seu corpo ainda está vivo, mas sua vontade de continuar desapareceu.</p><strong>Penalidades:</strong><ul><li>–2 em todos os testes mentais.</li><li>Não pode fornecer auxílio em testes sociais.</li><li>Sempre que presenciar uma situação traumática, faça um teste de Vontade. Em caso de falha, sofra imediatamente os efeitos do estágio máximo de Tensão.</li></ul><p>Um personagem Quebrado ainda pode lutar, mas apenas por instinto ou desespero.</p>' }
];

setTimeout(() => {
  const moralSection = document.getElementById('moral');
  if (moralSection) {
    moralSection.innerHTML = `
      <h3>Moral</h3>
      <p class="class-tagline" style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 12px; margin-bottom: 24px;">“A comida mantém seu corpo vivo. A esperança mantém você caminhando.”</p>
      <p>A Moral representa a força emocional, a esperança e a determinação de um sobrevivente diante do colapso da civilização. Ela reflete sua capacidade de continuar lutando mesmo após perdas, fracassos e situações desesperadoras.</p>
      <p>Diferente da Tensão, que mede o estresse imediato durante momentos de perigo, a Moral representa o estado emocional acumulado ao longo dos dias. Ela muda lentamente e costuma ser influenciada pelas decisões do grupo, pela qualidade de vida no abrigo e pelos acontecimentos da campanha.</p>

      <h4>Funcionamento</h4>
      <p>Cada personagem possui um Nível de Moral, variando entre 0 e 5. Ao contrário das demais mecânicas de sobrevivência, quanto <strong>maior</strong> o nível, <strong>melhor</strong> é a Moral do personagem.</p>

      <div class="skills-table" style="margin: 20px 0;">
        <div class="st-header" style="grid-template-columns: 80px 1fr;">
          <div class="st-level">Nível</div>
          <div class="st-desc">Estado</div>
        </div>
        ${moralLevels.map(m => `
          <div class="st-row" style="grid-template-columns: 80px 1fr;">
            <div class="st-level"><strong>${m.level}</strong></div>
            <div class="st-desc"><strong>${m.status}</strong></div>
          </div>
        `).join('')}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <p class="eyebrow">ESTÁGIOS DA MORAL</p>
          <p>Confira os benefícios da esperança e as penalidades do desespero.</p>
        </div>
        <button class="catalog-toggle" id="toggleMoralBtn" type="button" aria-expanded="true">Ocultar estágios</button>
      </div>

      <div id="moralDetailsWrapper" class="skill-desc-grid" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${moralLevels.map(m => `
          <div class="sd-card">
            <h5>Nível ${m.level} — ${m.status}</h5>
            <div style="font-size: 0.95em;">${m.effect}</div>
          </div>
        `).join('')}
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como a Moral Aumenta</h3>
      <p>A Moral não é restaurada apenas descansando. Ela depende de experiências positivas e da sensação de que ainda existe esperança. Exemplos de situações que podem aumentar a Moral:</p>
      <div class="talents-table" style="margin-bottom: 24px;">
        <div class="tt-header" style="grid-template-columns: 2fr 1fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Efeito sugerido</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Descansar em um abrigo seguro</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Comer uma refeição completa em grupo</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Resgatar sobreviventes</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Concluir uma missão importante</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Derrotar uma grande ameaça</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Discurso inspirador de um aliado</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1 Moral (1x/dia)</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Celebrar uma conquista significativa</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1 Moral</div></div>
      </div>
      <p><small><em>O Mestre decide quando essas situações realmente justificam um aumento.</em></small></p>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como a Moral Diminui</h3>
      <p>A Moral costuma cair lentamente, mas acontecimentos marcantes podem abalá-la rapidamente. Exemplos:</p>
      <div class="talents-table" style="margin-bottom: 24px;">
        <div class="tt-header" style="grid-template-columns: 2fr 1fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Efeito sugerido</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Passar fome por vários dias</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Sofrer desidratação severa</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Permanecer exausto por muito tempo</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Perder um abrigo importante</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Ver um aliado morrer</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Abandonar inocentes</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Fracassar em uma missão decisiva</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Permanecer isolado por muitos dias</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–1 Moral</div></div>
      </div>
      <p><small><em>Esses efeitos não devem ocorrer repetidamente pelo mesmo evento, evitando punições excessivas.</em></small></p>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Outras Regras e Interações</h3>
      <p>A Moral conecta o estado emocional de todos e dá relevância a classes que não focam apenas no combate físico:</p>
      
      <h4>Moral Coletiva</h4>
      <p>Além da Moral individual, o Mestre pode acompanhar a Moral do grupo. Ela representa o clima entre os sobreviventes. Uma Moral coletiva elevada facilita cooperação, confiança, liderança e decisões difíceis. Já uma Moral baixa pode gerar discussões, deserções, conflitos internos e desobediência de NPCs. Essa regra é opcional, mas funciona muito bem em campanhas focadas na administração de comunidades.</p>

      <h4>Moral e Liderança</h4>
      <p>Personagens especializados em liderança possuem papel fundamental. Habilidades da classe Líder, talentos sociais e discursos inspiradores podem recuperar Moral mesmo em situações difíceis. Isso torna personagens de suporte tão importantes quanto combatentes.</p>

      <h4>Moral e Sobrevivência</h4>
      <p>As demais mecânicas influenciam diretamente a Moral. Fome prolongada reduz a esperança, Sede aumenta o desânimo, Sono insuficiente torna todos mais irritados, Infecção faz o grupo temer pela vida de seus companheiros e Tensão elevada por vários dias pode reduzir a Moral. Dessa forma, cuidar das necessidades básicas também significa preservar a saúde emocional do grupo.</p>

      <h4>Recuperando a Moral</h4>
      <p>A Moral não volta automaticamente com o tempo. Ela é restaurada por momentos de segurança, convivência e esperança, como dormir em camas de verdade, ouvir música, comemorar vitórias, reencontrar familiares, concluir objetivos importantes, realizar refeições especiais e receber notícias positivas. Esses momentos lembram aos sobreviventes que ainda existe algo pelo qual vale a pena continuar vivendo.</p>

      <h4>Eventos Traumáticos</h4>
      <p>Alguns acontecimentos podem afetar profundamente qualquer personagem, independentemente de sua experiência — como matar um familiar infectado, perder um companheiro de longa data, assistir à destruição do próprio abrigo ou presenciar um massacre. O Mestre pode reduzir a Moral imediatamente nesses casos, reforçando o peso emocional da narrativa.</p>

      <div class="callout info" style="margin-top: 24px;">
        <strong>🧠 Moral vs. Tensão</strong>
        <p>Embora relacionadas, essas mecânicas possuem funções diferentes. Moral representa a esperança e a determinação construídas ao longo da campanha. Tensão representa o estresse e o medo do momento.</p>
        <p style="margin-top: 8px;">É perfeitamente possível que um personagem tenha <strong>Moral alta e Tensão alta</strong>: ele ainda acredita que pode sobreviver, mas está completamente pressionado durante um combate. Da mesma forma, alguém pode ter <strong>Tensão baixa e Moral baixa</strong>: está calmo naquele instante, porém perdeu a vontade de continuar lutando. Essa separação permite representar melhor os aspectos psicológicos da sobrevivência.</p>
      </div>
    `;

    const toggleMoralBtn = document.getElementById('toggleMoralBtn');
    const moralDetailsWrapper = document.getElementById('moralDetailsWrapper');
    if (toggleMoralBtn && moralDetailsWrapper) {
      const setMoralVisibility = collapsed => {
        moralDetailsWrapper.style.display = collapsed ? 'none' : '';
        toggleMoralBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleMoralBtn.textContent = collapsed ? 'Exibir estágios' : 'Ocultar estágios';
        localStorage.setItem('t20-moral-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-moral-desc') === 'collapsed';
      setMoralVisibility(isCollapsed);
      
      toggleMoralBtn.addEventListener('click', () => {
        setMoralVisibility(moralDetailsWrapper.style.display !== 'none');
      });
    }
  }
}, 500);

// ==========================================
// SEÇÃO DE SOBREVIVÊNCIA: TENSÃO
// ==========================================
const tensaoLevels = [
  { level: 0, status: 'Calmo', effect: '<p>Você se sente seguro e mantém total controle sobre suas ações.</p><strong>Efeitos:</strong> Nenhuma penalidade.<p><em>Este é o estado normal de um personagem descansado e fora de perigo.</em></p>' },
  { level: 1, status: 'Alerta', effect: '<p>Seus sentidos estão atentos e seu corpo começa a se preparar para reagir.</p><strong>Efeitos:</strong> Nenhuma penalidade mecânica.<p><em>Este nível funciona como um aviso de que a pressão está aumentando.</em></p>' },
  { level: 2, status: 'Tenso', effect: '<p>O perigo começa a afetar sua concentração. Suas mãos ficam inquietas, sua respiração acelera e decisões simples exigem mais esforço.</p><strong>Efeitos:</strong><ul><li>–1 em testes de Vontade.</li><li>–1 em testes de Intuição e Investigação realizados sob pressão.</li></ul>' },
  { level: 3, status: 'Nervoso', effect: '<p>Você está visivelmente abalado. Sons repentinos provocam sustos e qualquer ameaça parece mais perigosa do que realmente é.</p><strong>Efeitos:</strong><ul><li>–2 em testes de Vontade.</li><li>–1 em testes de Inteligência e Pontaria.</li><li>Não pode escolher 10 ou realizar ações que exijam calma absoluta.</li><li>Sempre que sofrer um evento traumático, faça um Teste de Controle.</li></ul>' },
  { level: 4, status: 'Em Pânico', effect: '<p>Seu corpo reage antes de sua mente. Você sente dificuldade para respirar, pensar e controlar seus movimentos.</p><strong>Efeitos:</strong><ul><li>–2 em todos os testes mentais e em testes de Pontaria.</li><li>–2 em testes sociais, exceto Intimidação.</li><li>Não pode realizar reações ou manobras que exijam concentração.</li><li>Sempre que sofrer dano, ficar cercado ou presenciar uma morte violenta, faça um Teste de Controle. Em caso de falha, sofre uma <strong>Reação de Pânico</strong>.</li></ul>' },
  { level: 5, status: 'Colapso', effect: '<p>A pressão ultrapassou seus limites. Você perde momentaneamente o controle sobre suas ações.</p><strong>Efeitos:</strong><ul><li>–5 em testes mentais.</li><li>Não pode fornecer auxílio a aliados.</li><li>Não recupera Adrenalina enquanto permanecer neste nível.</li><li>No início de cada turno durante uma cena perigosa, faça um Teste de Controle. Em caso de falha, o personagem sofre uma <strong>Reação de Colapso</strong>.</li></ul><p>Após resolver a reação, sua Tensão permanece no nível 5 até que ele consiga se afastar do perigo ou receba ajuda.</p>' }
];

setTimeout(() => {
  const tensaoSection = document.getElementById('tensao');
  if (tensaoSection) {
    tensaoSection.innerHTML = `
      <h3>Tensão</h3>
      <p class="class-tagline" style="font-style: italic; border-left: 3px solid var(--accent); padding-left: 12px; margin-bottom: 24px;">“Você pode se acostumar com os mortos. O problema é quando começa a ouvir um deles respirando atrás de você.”</p>
      <p>A Tensão representa o acúmulo de medo, ansiedade e estresse durante situações perigosas. Ela aumenta quando o personagem presencia horrores, fica cercado, enfrenta ameaças superiores ou acredita que está prestes a morrer.</p>
      <p>Enquanto níveis baixos mantêm o sobrevivente alerta, níveis elevados comprometem seu raciocínio e podem provocar reações de pânico. A Tensão normalmente diminui quando o personagem encontra segurança, recebe apoio ou tem tempo para se acalmar.</p>

      <h4>Funcionamento</h4>
      <p>Cada personagem possui um Nível de Tensão, variando entre 0 e 5. Quanto maior o nível, mais próximo o personagem está de perder o controle.</p>

      <div class="skills-table" style="margin: 20px 0;">
        <div class="st-header" style="grid-template-columns: 80px 1fr;">
          <div class="st-level">Nível</div>
          <div class="st-desc">Estado</div>
        </div>
        ${tensaoLevels.map(t => `
          <div class="st-row" style="grid-template-columns: 80px 1fr;">
            <div class="st-level"><strong>${t.level}</strong></div>
            <div class="st-desc"><strong>${t.status}</strong></div>
          </div>
        `).join('')}
      </div>

      <div class="catalog-heading" style="margin-top: 36px;">
        <div>
          <p class="eyebrow">ESTÁGIOS DA TENSÃO</p>
          <p>Confira os efeitos práticos de cada nível de estresse e medo.</p>
        </div>
        <button class="catalog-toggle" id="toggleTensaoBtn" type="button" aria-expanded="true">Ocultar estágios</button>
      </div>

      <div id="tensaoDetailsWrapper" class="skill-desc-grid" style="margin-top: 20px; animation: fadeIn 0.3s ease-out;">
        ${tensaoLevels.map(t => `
          <div class="sd-card">
            <h5>Nível ${t.level} — ${t.status}</h5>
            <div style="font-size: 0.95em;">${t.effect}</div>
          </div>
        `).join('')}
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como a Tensão Aumenta</h3>
      <p>A Tensão aumenta quando o personagem enfrenta situações de perigo, medo ou pressão emocional.</p>
      <div class="talents-table" style="margin-bottom: 24px;">
        <div class="tt-header" style="grid-template-columns: 3fr 1fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Aumento sugerido</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Ouvir uma ameaça próxima sem conseguir localizá-la</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Ser surpreendido por um inimigo</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Entrar em combate estando ferido</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Ficar isolado em uma área perigosa</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Ser cercado por infectados</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Presenciar uma morte violenta</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Ver um aliado cair a 0 PV</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Sofrer uma mordida ou ferimento possivelmente infectado</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Encontrar uma criatura ou mutação aterrorizante</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">+1 ou +2</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Perder um aliado próximo</strong></div><div class="tt-col" style="color: #ff1744; font-weight: bold;">+2</div></div>
        <div class="tt-row" style="grid-template-columns: 3fr 1fr;"><div class="tt-col"><strong>Acreditar que não existe rota de fuga</strong></div><div class="tt-col" style="color: #ff1744; font-weight: bold;">+2</div></div>
      </div>
      <p><small><em>A mesma fonte normalmente não aumenta a Tensão mais de uma vez por cena, a menos que a situação piore significativamente.</em></small></p>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Teste de Controle</h3>
      <p>Sempre que uma regra exigir um Teste de Controle, o personagem deve realizar um teste de Vontade. A dificuldade depende da gravidade da situação:</p>
      <div class="talents-table" style="margin-bottom: 16px;">
        <div class="tt-header" style="grid-template-columns: 2fr 1fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">CD sugerida</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Ameaça inquietante</strong></div><div class="tt-col tt-col-muted">10</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Perigo evidente</strong></div><div class="tt-col tt-col-muted">15</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Situação aterrorizante</strong></div><div class="tt-col tt-col-muted">20</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Horror extremo</strong></div><div class="tt-col tt-col-muted">25</div></div>
      </div>
      <ul style="margin: 0 0 24px 20px; color: var(--muted);">
        <li><strong>Sucesso:</strong> o personagem mantém o controle e age normalmente.</li>
        <li><strong>Falha:</strong> sofre uma Reação de Pânico ou Colapso, conforme seu nível de Tensão.</li>
        <li><strong>Falha por 5 ou mais:</strong> além da reação, recebe +1 Tensão.</li>
      </ul>

      <h4>Reações de Pânico (Nível 4)</h4>
      <p>Quando o personagem falha em um Teste de Controle no nível 4, role 1d6 ou escolha a reação mais adequada à cena:</p>
      <div class="talents-table" style="margin-bottom: 16px;">
        <div class="tt-header" style="grid-template-columns: 80px 1fr;">
          <div class="tt-col">1d6</div>
          <div class="tt-col">Reação</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>1</strong></div><div class="tt-col"><strong>Congelar:</strong> O personagem perde sua próxima ação, incapaz de tomar uma decisão.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>2</strong></div><div class="tt-col"><strong>Fugir:</strong> O personagem deve utilizar seu próximo movimento para se afastar da principal fonte de perigo pela rota mais segura disponível.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>3</strong></div><div class="tt-col"><strong>Gritar:</strong> O personagem grita involuntariamente, revelando sua posição e podendo atrair inimigos próximos.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>4</strong></div><div class="tt-col"><strong>Derrubar:</strong> O personagem deixa cair um item que esteja segurando. Se estiver usando uma arma, ela é o item derrubado.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>5</strong></div><div class="tt-col"><strong>Agir por impulso:</strong> O personagem ataca, corre ou realiza uma ação precipitada. O Mestre escolhe uma atitude coerente com a ameaça imediata.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>6</strong></div><div class="tt-col"><strong>Entrar em choque:</strong> O personagem sofre –2 adicional em todos os testes até o final de seu próximo turno.</div></div>
      </div>

      <h4 style="margin-top: 24px;">Reações de Colapso (Nível 5)</h4>
      <p>No nível 5, as reações são mais graves. Role 1d6 ou escolha uma consequência adequada:</p>
      <div class="talents-table" style="margin-bottom: 24px;">
        <div class="tt-header" style="grid-template-columns: 80px 1fr;">
          <div class="tt-col">1d6</div>
          <div class="tt-col">Colapso</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>1</strong></div><div class="tt-col"><strong>Paralisia:</strong> O personagem perde o turno atual e o próximo.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>2</strong></div><div class="tt-col"><strong>Fuga desesperada:</strong> O personagem tenta abandonar a cena, ignorando perigos menores e ordens de aliados.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>3</strong></div><div class="tt-col"><strong>Agressividade:</strong> O personagem ataca a ameaça mais próxima. Caso não exista uma ameaça clara, pode empurrar ou ameaçar alguém que tente impedi-lo.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>4</strong></div><div class="tt-col"><strong>Desorientação:</strong> O personagem não diferencia corretamente direções, rotas ou ameaças. Até o final da cena, sofre –5 em Percepção e não pode fornecer informações táticas.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>5</strong></div><div class="tt-col"><strong>Crise emocional:</strong> O personagem chora, grita ou entra em hiperventilação. Ele fica incapaz de realizar ações complexas até receber auxílio ou passar em um novo teste de Vontade.</div></div>
        <div class="tt-row" style="grid-template-columns: 80px 1fr;"><div class="tt-col"><strong>6</strong></div><div class="tt-col"><strong>Desmaio:</strong> O personagem fica inconsciente por 1d4 rodadas. O Mestre pode evitar este resultado quando o desmaio significaria morte automática sem qualquer possibilidade de reação.</div></div>
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Como Reduzir a Tensão</h3>
      <p>A Tensão diminui quando o personagem consegue se afastar do perigo e recuperar o controle emocional:</p>
      <div class="talents-table" style="margin-bottom: 20px;">
        <div class="tt-header" style="grid-template-columns: 2fr 1fr;">
          <div class="tt-col">Situação</div>
          <div class="tt-col">Redução</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Passar dez minutos em segurança</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">–1</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Receber primeiros socorros ou apoio emocional</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">–1</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Encerrar uma ameaça importante</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">–1</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Realizar uma refeição tranquila</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">–1</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Dormir em um abrigo seguro</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">–2</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Participar de um momento de lazer ou convivência</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">–1</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Utilizar uma habilidade de liderança ou inspiração</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">–1</div></div>
        <div class="tt-row" style="grid-template-columns: 2fr 1fr;"><div class="tt-col"><strong>Consumir medicamento calmante</strong></div><div class="tt-col tt-col-muted">Variável</div></div>
      </div>
      <p><small><em>Um personagem não pode reduzir a Tensão enquanto estiver sendo perseguido, atacado ou exposto diretamente à fonte que provocou o estresse.</em></small></p>

      <h4>Acalmar um Aliado</h4>
      <p>Um personagem pode tentar acalmar outro sobrevivente utilizando uma ação completa e realizando um teste de Diplomacia, Medicina ou outra perícia apropriada. A CD é igual a <strong>10 + o dobro do nível atual de Tensão do alvo</strong>.</p>
      <ul style="margin: 8px 0 24px 20px; color: var(--muted);">
        <li><strong>Sucesso:</strong> o alvo reduz sua Tensão em 1.</li>
        <li><strong>Sucesso por 5 ou mais:</strong> reduz em 2.</li>
        <li><strong>Falha:</strong> nenhuma mudança.</li>
      </ul>
      <p><small><em>Cada personagem só pode receber esse benefício uma vez por cena.</em></small></p>

      <hr style="margin: 40px 0; border: none; border-top: 1px dashed var(--line);" />

      <h3>Outras Regras de Tensão</h3>
      <p>O estresse se conecta a todas as outras regras do jogo:</p>
      
      <h4>Tensão e Moral</h4>
      <p>Tensão e Moral representam aspectos diferentes do estado psicológico: Tensão mede o estresse imediato, enquanto Moral mede esperança e determinação a longo prazo. Um personagem com Moral alta resiste melhor ao pânico, enquanto alguém com Moral baixa pode entrar em colapso com mais facilidade.</p>
      <div class="talents-table" style="margin: 16px 0;">
        <div class="tt-header" style="grid-template-columns: 1fr 1fr;">
          <div class="tt-col">Moral</div>
          <div class="tt-col">Modificador em Testes de Controle</div>
        </div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>5</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+2</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>4</strong></div><div class="tt-col" style="color: #81c784; font-weight: bold;">+1</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>3</strong></div><div class="tt-col tt-col-muted">+0</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>2</strong></div><div class="tt-col" style="color: #ffb74d; font-weight: bold;">–1</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>1</strong></div><div class="tt-col" style="color: #ff5252; font-weight: bold;">–2</div></div>
        <div class="tt-row" style="grid-template-columns: 1fr 1fr;"><div class="tt-col"><strong>0</strong></div><div class="tt-col" style="color: #ff1744; font-weight: bold;">–3</div></div>
      </div>
      <p><small><em>Se um personagem terminar três dias consecutivos com Tensão 4 ou 5, perde 1 ponto de Moral.</em></small></p>

      <h4>Tensão e Sono</h4>
      <p>A privação de sono reduz o controle emocional. Enquanto estiver no nível 3 ou superior de Sono, o personagem recebe –1 em Testes de Controle. Nos níveis 4 e 5 de Sono, essa penalidade aumenta para –2.</p>

      <h4>Tensão e Combate</h4>
      <p>O combate é uma das principais fontes de Tensão, mas ela não deve aumentar a cada rodada. O Mestre deve aplicá-la quando algo relevante acontecer (ex: grupo emboscado, inimigo rompe barricada, munição acaba, aliado cai, nova horda aparece, rota de fuga bloqueada). Isso mantém a mecânica importante sem tornar seu controle excessivamente repetitivo.</p>

      <h4>Tensão e Adrenalina</h4>
      <p>A Tensão pode estimular o corpo temporariamente, mas cobra um preço. Uma vez por cena, quando alcançar o nível 3 ou superior, o personagem pode receber <strong>1 Ponto de Adrenalina temporário</strong>. Esse ponto deve ser utilizado até o final da cena. Depois que a cena terminar, o personagem recebe +1 Tensão. Caso já esteja no nível 5, perde 1 ponto de Moral em vez disso.</p>

      <div class="callout info" style="margin-top: 20px;">
        <strong>🧩 Traumas Prolongados (Marcas Traumáticas)</strong>
        <p>Sobreviventes expostos repetidamente a situações extremas podem desenvolver traumas duradouros. Quando um personagem alcançar o nível 5 de Tensão três vezes durante a mesma aventura, o Mestre pode atribuir uma Marca Traumática (ex: medo de lugares fechados, pavor de ficar sozinho, aversão a hospitais, pesadelos recorrentes, reação agressiva a sons, dificuldade para confiar em desconhecidos).</p>
        <p style="margin-top: 8px;">Marcas Traumáticas não devem retirar o controle do jogador constantemente. Elas funcionam como complicações narrativas e podem conceder Tensão adicional quando seus gatilhos aparecem. Com descanso prolongado, segurança, apoio de aliados ou tratamento adequado, uma Marca Traumática pode ser superada.</p>
      </div>

      <h4>Tensão Coletiva</h4>
      <p>Em cenas envolvendo comunidades, multidões ou grandes grupos de sobreviventes, o Mestre pode acompanhar uma única Tensão coletiva. Quando ela aumenta, NPCs podem discutir, desobedecer ordens, entrar em pânico, abandonar posições, desperdiçar recursos ou causar tumultos. Personagens com habilidades de liderança podem reduzir a Tensão coletiva por meio de discursos, organização e demonstrações de segurança.</p>

      <div class="callout warning" style="margin-top: 24px; background: rgba(255, 152, 0, 0.1); border-color: #ff9800;">
        <strong style="color: #ffb74d;">🎲 Orientação ao Mestre</strong>
        <p>A Tensão deve criar escolhas e consequências, não servir apenas para impedir jogadores de agir. Evite exigir testes a todo momento. Utilize a mecânica quando existir uma ameaça real, uma revelação assustadora ou uma mudança importante na cena.</p>
        <p style="margin-top: 8px;">Também é recomendável permitir que o jogador interprete sua própria reação sempre que possível. A tabela de pânico deve ser utilizada quando ele desejar um resultado aleatório ou quando a situação justificar uma perda temporária de controle.</p>
      </div>
    `;

    const toggleTensaoBtn = document.getElementById('toggleTensaoBtn');
    const tensaoDetailsWrapper = document.getElementById('tensaoDetailsWrapper');
    if (toggleTensaoBtn && tensaoDetailsWrapper) {
      const setTensaoVisibility = collapsed => {
        tensaoDetailsWrapper.style.display = collapsed ? 'none' : '';
        toggleTensaoBtn.setAttribute('aria-expanded', String(!collapsed));
        toggleTensaoBtn.textContent = collapsed ? 'Exibir estágios' : 'Ocultar estágios';
        localStorage.setItem('t20-tensao-desc', collapsed ? 'collapsed' : 'expanded');
      };
      
      const isCollapsed = localStorage.getItem('t20-tensao-desc') === 'collapsed';
      setTensaoVisibility(isCollapsed);
      
      toggleTensaoBtn.addEventListener('click', () => {
        setTensaoVisibility(tensaoDetailsWrapper.style.display !== 'none');
      });
    }
  }
}, 550);
