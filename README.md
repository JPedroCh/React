# Prova Técnica Frontend

Este é um exemplo de aplicação React que utiliza Typescript e Vite.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas no seu sistema:

- Node.js (>=18.x)
- Npm (>=8.x)
- Docker (>=20.x)

## Configuração Local

### 1. Clonar o Repositório

Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/JPedroCh/React.git
cd React
```

### 2. Instalar Dependências

Instale as dependências do projeto usando o Yarn:

```bash
npm install
```

### 3. Configurar o .env

Crie um arquivo .env que tenha a variável de ambiente VITE_NEWS_API_URL para definir a url a ser utilizada para as requisições relacionadas a API de notícias.

```env
VITE_NEWS_API_URL=http://localhost:3000
```

Caso deseje utilizar o json-server para simular a API, basta copiar a variável de ambiente apresentada e executar o seguinte comando:

```bash
npm run json-server
```

### 4. Iniciar a Aplicação

Inicie a aplicação em ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`.

## Configuração com Docker

### 1. Construir a Imagem Docker

Construa a imagem Docker da aplicação:

```bash
docker build -t <nome_da_imagem> .
```

### 2. Iniciar o Contêiner

Inicie o contêineres usando o seguinte comando:

```bash
docker run -p 8080:8080 <nome_da_imagem>
```

A aplicação estará disponível em `http://localhost:8080`.

## Testes

### BDD

O BDD é uma prática de desenvolvimento de software que envolve colaboração entre desenvolvedores, QA e não-programadores para definir o comportamento desejado de uma aplicação através de exemplos de uso compreensíveis para todos. Alguns cenários para verificação manual do comportamento relacionado a funcionalidade de buscar endereços por CEP estão definidos no arquivo /test/**features/list-addresses.feature**.

#### Cenários:
```
Feature: List addresses
  Scenario: Searching an address by an existing cep number
    Given I have navigated to cep page
    Then fill the cep number form
    When click on the search button
    Then I should see the addresses related to the given cep number. 

  Scenario: Searching an address by non-existent cep number
    Given I have navigated to cep page
    Then fill the cep number form with a non-existent cep number
    When click on the search button
    Then I should see a message telling that it was not possible to find an address related to the given cep number. 
```

## Contribuição

Se você deseja contribuir para este projeto, por favor siga estas etapas:

1. Fork o repositório
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request para a branch `develop`

## Estrutura de Pastas/Arquivos

```bash
my-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── test/
│   └── features/
├── .env
├── .gitignore
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

### Descrição das Pastas e Arquivos
- `public/` - Diretório onde estão imagens e arquivos públicos.
- `src/` - Diretório principal onde está o código fonte da aplicação.
- `src/components/` - Contém componentes de UI reutilizáveis que podem ser usados em toda a aplicação.
- `src/pages/` - Contém os componentes que representam páginas inteiras da aplicação.
- `src/routes/` - Contém arquivo de configuração de rotas que define as rotas da aplicação usando react-router-dom.
- `src/services/` - Contém arquivos que lidam com chamadas de API externas, lógica de negócios ou qualquer lógica da camada de serviço. 
- `src/styles/` - Contém estilos CSS globais, arquivos de tema e quaisquer outros arquivos relacionados a estilização. 
- `src/App.tsx` - Contém o componente raiz da aplicação e configura as rotas e provedores de estado global.
- `src/main.tsx` - Renderiza o componente App no DOM.
- `src/vite-env.d.ts` - Fornece definições de TypeScript para variáveis de ambiente específicas do Vite.
- `test/` - Diretório onde estão todos arquivos relacionados aos testes.
- `test/features/` - Contém os testes seguindo o BDD para cada funcionalidade.
- `.env` - Contém variáveis de ambiente usadas pela aplicação. 

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.