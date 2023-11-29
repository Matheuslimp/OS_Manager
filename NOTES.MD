https://chat.openai.com/share/55c2cb96-051a-4b06-9671-7fa71cec99e2
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
### 1 - Defina o Escopo do Projeto:
Quais são os objetivos?
    - Criar um sistema de gerenciamento de chamado/solitações de serviço web.
    - 
Quais recursos são necessários?
    - Backend, Frontend
    - Painel de adminitração
    - Vizualização do usuário final ( Solicitante do serviço )
    - Vizualização do atendente
    - Esse projeto tera um Banco de dados NoSQL
### 2 - Estrutura do Projeto:
    OS_Maneger/
|-- public/
|   |-- index.html
|   |-- assets/
|       |-- css/
|       |-- js/
|-- src/
|   |-- components/
|   |   |-- Componente1.js
|   |   |-- Componente2.js
|   |-- models/
|   |   |-- Modelo1.js
|   |   |-- Modelo2.js
|   |-- views/
|   |   |-- View1.js
|   |   |-- View2.js
|   |-- app.js
|-- node_modules/
|-- package.json
|-- README.md

public/: Pasta onde fica o conteúdo público do seu projeto. O index.html é o ponto de entrada da sua aplicação. A pasta assets/ pode conter estilos (css) e scripts (js) globais.

src/: Pasta onde você coloca o código-fonte do seu projeto.

components/: Componentes reutilizáveis da sua aplicação.
models/: Classes ou funções relacionadas à lógica de negócios e manipulação de dados.
views/: Componentes ou classes responsáveis pela apresentação e interação com o usuário.
app.js: Arquivo principal que inicia a aplicação, conectando modelos, visões e controladores conforme necessário.
node_modules/: Pasta onde ficam as dependências do seu projeto (gerenciadas pelo npm ou yarn).

package.json: Arquivo de configuração do seu projeto, onde você especifica as dependências, scripts e outras configurações.

README.md: Documentação do seu projeto.
-------

### 3 - Passo do desenvolvimento desse projeto. 
Aqui será adicionado todas as atualizações desse projeto, e atividade a serem feitas.

# Iniciandao projeto,
[x] Instalação do Express.js
[x] Criando arquivo server.js
[x] Start no servidor
[X] Criando primeira logia do servidor.
# Exibir Primeiro chamado em tela
[x] Criar classe de solicitacao e modulo contrutor. 
[ ] Criar uma funça Registra chamado
[ ] Exibir chamado em Tela. 