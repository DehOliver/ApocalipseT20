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
  <ul class="progression"><li><b>Níveis 1–5:</b> rastreia, encontra recursos e orienta o grupo.</li><li><b>Níveis 6–10:</b> evita perigos, detecta armadilhas e conduz expedições seguras.</li><li><b>Níveis 11–15:</b> domina grandes áreas e identifica ameaças antes de qualquer confronto.</li><li><b>Níveis 16–20:</b> guia comunidades por territórios hostis, prevê hordas e encontra recursos onde ninguém mais conseguiria.</li></ul>`;

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
  <h5>Evolução</h5><ul class="progression"><li><b>Níveis 1–5:</b> inspira aliados e coordena pequenas equipes.</li><li><b>Níveis 6–10:</b> organiza expedições, fortalece a Moral e melhora o desempenho do grupo.</li><li><b>Níveis 11–15:</b> muda o rumo de combates e negociações.</li><li><b>Níveis 16–20:</b> lidera comunidades inteiras e transforma sobreviventes em uma força organizada.</li></ul>`;

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
  <div class="choice-grid"><div><strong>Atributo principal</strong><p><b>Carisma.</b> Afeta Diplomacia, Enganação, Intimidação, Atuação, recrutamento, Moral e inspiração.</p></div><div><strong>Atributo secundário</strong><p><b>Inteligência.</b> Afeta leitura de pessoas, estratégia social, comunidades e negociações.</p></div></div>
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
  ['👤', 'Personagens', [['Classes', 'classes', 'personagens', classCatalog.map(([name, anchor]) => [name, anchor])], ['Origens', 'origens', 'personagens'], ['Atributos', 'atributos', 'personagens'], ['Perícias', 'pericias', 'personagens'], ['Vantagens', 'vantagens', 'personagens']]],
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
    toggle.textContent = collapsed ? '▸ Mostrar arquétipos' : '⌄ Ocultar arquétipos';
    toggle.setAttribute('aria-expanded', String(!collapsed));
    localStorage.setItem('t20-nav-archetypes', collapsed ? 'collapsed' : 'expanded');
  };
  setArchetypeNavVisibility(localStorage.getItem('t20-nav-archetypes') === 'collapsed');
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

const classesSection = document.getElementById('classes');
if (classesSection) {
  const catalog = document.createElement('div');
  catalog.className = 'class-catalog';
  catalog.innerHTML = `<div class="catalog-heading"><div><p class="eyebrow">ARQUÉTIPOS DISPONÍVEIS</p><p>Uma classe representa as experiências que ajudaram seu sobrevivente a chegar até aqui. Escolha aquela que melhor descreve como ele contribui para o grupo.</p></div><button class="catalog-toggle" id="catalogToggle" type="button" aria-controls="classCards" aria-expanded="true">Ocultar arquétipos</button></div><div id="classCards">${classCatalog.map(([name, anchor, description, details]) => `<article id="${anchor}" class="class-card ${details ? 'class-card--expanded' : ''}"><h4>${name}</h4>${details || `<p>${description}</p>`}</article>`).join('')}</div>`;
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
  {
    icon: '🏠', name: 'Civil Comum',
    quote: 'Você era apenas mais uma pessoa tentando viver sua vida quando tudo acabou.',
    desc: 'Você não possuía treinamento especializado, mas aprendeu a sobreviver enfrentando desafios como qualquer outra pessoa.',
    skills: 'Vontade, Intuição',
    powerName: 'Adaptável', powerDesc: 'Uma vez por cena, pode repetir um teste de perícia que tenha falhado. Deve aceitar o novo resultado.',
    items: 'Mochila, Lanterna, Cantil, Canivete, Cobertor'
  },
  {
    icon: '🎖', name: 'Veterano',
    quote: 'Você já conhecia a violência muito antes do fim do mundo.',
    desc: 'Experiências anteriores em conflitos o prepararam para manter a calma sob pressão.',
    skills: 'Pontaria, Guerra',
    powerName: 'Sangue Frio', powerDesc: 'Recebe +2 em testes contra medo, pânico e intimidação.',
    items: 'Faca de combate, Colete leve, Lanterna tática, Binóculo, Kit de limpeza de armas'
  },
  {
    icon: '🔥', name: 'Sobrevivente Nato',
    quote: 'Você aprendeu cedo que ninguém sobreviveria por você.',
    desc: 'Você desenvolveu instintos apurados para enfrentar situações extremas.',
    skills: 'Sobrevivência, Percepção',
    powerName: 'Instinto de Sobrevivência', powerDesc: 'Recebe +2 em testes para evitar emboscadas, armadilhas e perigos naturais.',
    items: 'Cantil, Faca, Mochila, Corda, Isqueiro'
  },
  {
    icon: '🎒', name: 'Saqueador',
    quote: 'Os recursos estão escondidos. Você sabe onde procurar.',
    desc: 'Você desenvolveu técnicas para entrar, vasculhar e sair de locais perigosos rapidamente.',
    skills: 'Investigação, Furtividade',
    powerName: 'Olhos Afiados', powerDesc: 'Recebe +2 em testes para encontrar suprimentos durante saques.',
    items: 'Pé de cabra, Mochila, Lanterna, Canivete, Luvas'
  },
  {
    icon: '🗺', name: 'Explorador',
    quote: 'Cada rua pode esconder uma ameaça... ou uma oportunidade.',
    desc: 'Você está acostumado a descobrir caminhos, mapear áreas e reconhecer terrenos.',
    skills: 'Sobrevivência, Atletismo',
    powerName: 'Reconhecimento', powerDesc: 'Recebe +2 em testes para navegar e evitar se perder.',
    items: 'Bússola, Binóculo, Corda, Mapa, Cantil'
  },
  {
    icon: '🏕', name: 'Campista',
    quote: 'Você se sente mais confortável dormindo sob as estrelas do que entre quatro paredes.',
    desc: 'Anos de acampamentos ensinaram como viver com poucos recursos.',
    skills: 'Sobrevivência, Ofício',
    powerName: 'Vida ao Ar Livre', powerDesc: 'Recebe +2 em testes para montar acampamentos e reduzir os efeitos do clima.',
    items: 'Barraca, Saco de dormir, Cantil, Isqueiro, Machado'
  },
  {
    icon: '🚗', name: 'Estradeiro',
    quote: 'Nenhuma estrada é longa demais quando você sabe para onde está indo.',
    desc: 'Você passou boa parte da vida viajando.',
    skills: 'Pilotagem, Sobrevivência',
    powerName: 'Direção Econômica', powerDesc: 'Veículos conduzidos por você consomem menos combustível em viagens longas.',
    items: 'Rádio, Mapa rodoviário, Caixa de ferramentas, Lanterna, Mochila'
  },
  {
    icon: '🔧', name: 'Faz-Tudo',
    quote: 'Sempre existe uma maneira de fazer funcionar.',
    desc: 'Você aprendeu um pouco de tudo.',
    skills: 'Ofício, Tecnologia',
    powerName: 'Improvisador', powerDesc: 'Recebe +2 para fabricar ou reparar objetos improvisados.',
    items: 'Caixa de ferramentas, Alicate, Fita isolante, Martelo, Chave inglesa'
  },
  {
    icon: '🩹', name: 'Cuidador',
    quote: 'Nem sempre é preciso ser médico para salvar uma vida.',
    desc: 'Você sempre cuidou das pessoas ao seu redor.',
    skills: 'Medicina, Intuição',
    powerName: 'Primeiros Socorros', powerDesc: 'Recebe +2 em testes de Medicina para estabilizar aliados.',
    items: 'Bandagens, Kit de primeiros socorros, Antisséptico, Analgésicos, Luvas'
  },
  {
    icon: '🛡', name: 'Protetor',
    quote: 'Enquanto eu estiver de pé, ninguém passa.',
    desc: 'Você sempre colocou a segurança dos outros acima da sua.',
    skills: 'Luta, Atletismo',
    powerName: 'Escudo Humano', powerDesc: 'Uma vez por cena, pode sofrer um ataque destinado a um aliado adjacente.',
    items: 'Escudo improvisado, Bastão, Capacete, Colete leve, Lanterna'
  },
  {
    icon: '🚨', name: 'Resgatista',
    quote: 'Desistir de alguém nunca foi uma opção.',
    desc: 'Você está acostumado a salvar pessoas em situações críticas.',
    skills: 'Atletismo, Medicina',
    powerName: 'Resgate', powerDesc: 'Pode carregar um aliado inconsciente sem reduzir seu deslocamento e recebe +2 em testes para retirar pessoas de escombros, incêndios ou veículos.',
    items: 'Machado, Pé de cabra, Corda, Kit de primeiros socorros, Lanterna'
  },
  {
    icon: '🤝', name: 'Comunitário',
    quote: 'Ninguém sobrevive sozinho.',
    desc: 'Você sempre viveu cercado por pessoas e sabe trabalhar em equipe.',
    skills: 'Diplomacia, Intuição',
    powerName: 'Espírito de Equipe', powerDesc: 'Sempre que ajudar um aliado, ele recebe +1 adicional no teste.',
    items: 'Rádio, Mochila, Cantil, Cobertor, Bloco de notas'
  },
  {
    icon: '🎭', name: 'Manipulador',
    quote: 'As pessoas acreditam no que querem ouvir.',
    desc: 'Você domina a arte da persuasão.',
    skills: 'Enganação, Diplomacia',
    powerName: 'Boa Conversa', powerDesc: 'Recebe +2 em testes de Enganação e Diplomacia durante negociações.',
    items: 'Gravador, Celular descarregado, Bloco de notas, Canivete, Rádio'
  },
  {
    icon: '🎯', name: 'Atirador Esportivo',
    quote: 'Precisão sempre foi um esporte. Agora é sobrevivência.',
    desc: 'Você treinava tiro por hobby antes do colapso.',
    skills: 'Pontaria, Percepção',
    powerName: 'Mira Treinada', powerDesc: 'Recebe +1 nas jogadas de ataque com armas de fogo de disparo único.',
    items: 'Pistola, Kit de limpeza, Binóculo, Protetor auricular, Lanterna'
  },
  {
    icon: '🦌', name: 'Caçador',
    quote: 'A natureza sempre oferece alimento para quem sabe procurar.',
    desc: 'Você sabe rastrear, caçar e sobreviver longe das cidades.',
    skills: 'Sobrevivência, Percepção',
    powerName: 'Rastreador', powerDesc: 'Recebe +2 em testes para seguir rastros e encontrar alimento natural.',
    items: 'Rifle de caça, Facão, Binóculo, Cantil, Corda'
  },
  {
    icon: '📦', name: 'Colecionador',
    quote: 'Nada deve ser desperdiçado.',
    desc: 'Você sempre guardou objetos que poderiam ser úteis.',
    skills: 'Investigação, Ofício',
    powerName: 'Aproveitamento Máximo', powerDesc: 'Sempre que desmontar um item, recupera mais materiais que o normal.',
    items: 'Mochila grande, Caixa organizadora, Alicate, Lanterna, Canivete'
  },
  {
    icon: '📚', name: 'Estudioso',
    quote: 'Conhecimento continua sendo a ferramenta mais poderosa.',
    desc: 'Você dedicou sua vida aos estudos e à pesquisa.',
    skills: 'Ciências, Investigação',
    powerName: 'Mente Analítica', powerDesc: 'Recebe +2 em testes para identificar substâncias, doenças e equipamentos.',
    items: 'Livros, Bloco de anotações, Lanterna, Mochila, Lupa'
  },
  {
    icon: '🏚', name: 'Isolado',
    quote: 'Você aprendeu a depender apenas de si mesmo.',
    desc: 'Você viveu longe da sociedade ou escolheu esse caminho.',
    skills: 'Sobrevivência, Vontade',
    powerName: 'Autossuficiente', powerDesc: 'Recebe +2 em testes para resistir à fome, sede e fadiga.',
    items: 'Machado, Cantil, Corda, Isqueiro, Mochila'
  },
  {
    icon: '🌆', name: 'Sobrevivente de Rua',
    quote: 'Você conhecia a luta pela sobrevivência antes de ela virar a realidade de todos.',
    desc: 'Anos vivendo nas ruas ensinaram você a improvisar, encontrar abrigo e aproveitar qualquer recurso disponível.',
    skills: 'Furtividade, Sobrevivência',
    powerName: 'Vira-Lata', powerDesc: 'Recebe +2 em testes para encontrar abrigo improvisado, comida descartada e objetos úteis em ambientes urbanos.',
    items: 'Cobertor, Canivete, Mochila, Luvas, Pé de cabra'
  },
  {
    icon: '🥫', name: 'Preparador (Prepper)',
    quote: 'Enquanto todos riam de você, você já estava se preparando para o pior.',
    desc: 'Você sempre acreditou que um grande desastre aconteceria e passou anos acumulando suprimentos, aprendendo técnicas de sobrevivência e planejando contingências.',
    skills: 'Sobrevivência, Investigação',
    powerName: 'Plano B', powerDesc: 'Uma vez por sessão, quando o grupo precisar de um item comum, você pode declarar que havia guardado esse item em sua mochila, desde que plausível.',
    items: 'Mochila grande, Cantil, Kit de primeiros socorros, Corda, Filtro de água'
  }
];

setTimeout(() => {
  const origensSection = document.getElementById('origens');
  if (origensSection) {
    origensSection.innerHTML = `
      <h3>Origens</h3>
      <p>O que você fazia antes do fim? Sua origem define o que você sabia fazer antes do mundo acabar, rendendo perícias bônus, itens iniciais e vantagens exclusivas.</p>
      <div class="origins-grid">
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
  }
}, 100);