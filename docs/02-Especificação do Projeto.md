# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feito pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

|NOME              | IDADE | OCUPAÇÃO                 | APLICATIVOS                                         | MOTIVAÇÕES                                                 | FRUSTRAÇÕES                                                                                                                                                                                    | HOBBIES E HISTÓRIAS                 |
|------------------|-------|--------------------------|-----------------------------------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| Isabela Cristina | 24    | Estudante de direito     | Instagram e Facebook                                | Facilidade, busca por lugares diferentes e independência   | Extrema dependência de outras pessoas, constrangimento frequente e dificuldades escessivas                                                                                                    | Leitura e encontrar os amigos      |
|Lucas Lima        | 22    | Desempregado             | Facebook, instagram, youtube e aplicativos de banco | Busca por lazer, conhecer novos lugares e interação social |   Falta de locais adaptados, condição financeira insuficiente para usufruir de um bom atendimento, se sentir envergonhado e não saber os locais em que pode ser atendido corretamente | Escutar música, leitura e cozinhar |


> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                                                                     |PARA ... `MOTIVO/VALOR`                                                                                                                  |
|--------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
|Isabela Cristina    | Ter acesso a informação sobre estabelecimentos que tenham uma boa assistência aos deficientes visuais | Não passar por constrangimentos e dificuldades excessivas ao adentrar estes estabelecimentos                                                          |
|Isabela Cristina    | Um espaço onde possa trocar ideias com outros colegas portadores de deficiência visual sobre diversos estabelecimentos | Sempre estarmos ligados sobre locais que realmente possuem um auxílio adequado ou se a assistência que dizem ter é apenas de fachada |
|Isabela Cristina    | Compartilhar informações sobre estabelecimentos, não presentes no sistema, que possuem auxílio ao deficiente visual    | Facilitar a procura por esses estabelecimentos, deixando mais simples para todos                                                     |
|Lucas Lima          | Ter conhecimento de quais espaços possuam adaptações físicas e comportamentais para atendimento e auxílio de deficientes visuais | Evitar contratempos e vergonha ao me dirigir a um local que não possa atender minhas necessidades e limitações físicas       |
|Lucas Lima          | Um espaço para avaliar os locais visitados por mim                                                                     | Deixar recomendações ou reclamações sobre o atendimento prestado                                                               |
|Lucas Lima          | Compartilhar com outras pessoas com limitações físicas os locais bem adaptados                                         | Incentivar e demonstrar a essas pessoas que elas podem usufruir de serviços e lazer                                                    |
|Lucas Lima          | Saber a opinião de outras pessoas sobre os locais que possuem auxílio para deficientes visuais                         | Decidir se o local prestaria um bom atendimento e auxílio                                                                              |

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito                                                                                                                                    | Prioridade |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|RF-001| O site deve apresentar na página principal locais de destaque que possam atender de maneira eficiente os grupos com deficiência visual (API)              | ALTA       | 
|RF-002| O site deve apresentar uma imagem correspondente ao local destacado na página principal (thumbnail)                                                       | MÉDIA      |
|RF-003| O site deve permitir ao usuário se informar sobre a descrição do local, com diversos detalhes. Ex: endereço, telefone, horário de funcionamento.          | ALTA       |
|RF-004| O site deve oferecer um mapa para que seja possível verificar onde ficam os locais, para saber da proximidade e auxílio em viagens, por exemplo.          | ALTA       |
|RF-005| O site deve permitir que, ao selecionar o local no mapa, seja possível verificar todas as informações a respeito do mesmo.                                | ALTA       |
|RF-006| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um tema específico que será informado na caixa de pesquisa. | ALTA       |
|RF-007| O site deve permitir visualizar as informações de contatos do mantenedor da aplicação web.                                                                | BAIXA      |
|RF-008| O site deve permitir o compartilhamento de locais visitados ou avaliados em plataformas de redes sociais                                                  | MÉDIA      |
|RF-009| O site deve permitir salvar os locais de preferência                                                                                                      | MÉDIA      |
|RF-010| O site deve permitir verificar os locais salvos como preferidos                                                                                           | ALTA       |
|RF-011| O site deve permitir que usuários possam tecer comentários sobre os locais.                                                                               | ALTA       |
|RF-012| O site deve exibir os comentários registrados juntamente com o local em amostra.                                                                          | ALTA       |


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender:

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku). | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada. |  ALTA | 
|RNF-003| O site deverá ser completamente acessível para dificientes visuais, com textos objetivos e claros para descrição de imagens, arquivos e texto. |  ALTA | 
|RNF-004| O site deve ter bom nível de contraste entre os elementos da tela em conformidade. |  MÉDIA | 
|RNF-005| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). |  ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 10/12/2023. |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend      |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho. |


> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
