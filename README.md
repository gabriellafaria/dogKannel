# Canil do Eduardo 🐶

Seja bem vindo! Obrigada por vir olhar o projeto ✨ 

Esse é um projeto full stack, a separação está por diretórios, front-end e back-end.

### Como executar o sistema?

Inicialmente, é necessário instalar as dependências do projeto. Para isso, basta executar o comando no diretório do projeto:

```
npm install
```

Por mais que tenha sido realizada a separação, o front-end inicia realizando uma requisição ao back para a listagem dos PetShops parceiros, desta forma, recomenda-se iniciar o back-end primeiro.

#### Comando para inicialização no diretório do projeto:
```
npm run dev:back
```

#### Inicialização do front, em um novo terminal:
```
npm run dev:front
```

#### Portas configuradas:

- Back-end - porta 3333 
- Front-end - porta 5173

É possível inicializar cada um no diretório específico, basta acessar o diretório e executar o comando `npm run dev` no front e `npm run start:dev` no backend.

### 👩‍💻 Tecnologias utilizadas ⚙️
#### Front-end:
- TypeScript
- React
- DayJs
- Vite
- Styled-components

#### Back-end:
- TypeScript
- NodeJs
- Fastify
- DayJs

### Algumas decisões do projeto:
- A utilização do DayJs foi para facilitar a manipulação de datas, por ser uma biblioteca mais simples.

- A utilização do Vite foi para ter um ambiente de desenvolvimento mais rápido e por ter mais familiaridade.

- Os dados dos PetShops estão armazenados em um repositório em memória. 

- Por ser um projeto sem inserções, não foi necessário a utilização de um banco de dados.

- A utilização do Fastify foi para ter mais familiaridade.

- Utilizei o Styled-components para facilitar a criação dos componente estilizados.

- A utilização do TypeScript foi para ter um código mais seguro, com menos erros.

### O que poderia ser melhorado⁉️
- A separação do front e back poderia ser feita de forma mais eficiente.

- A utilização de um banco de dados para armazenar os dados dos PetShops e as informações das consultas, viabilizando um histórico de buscas.

- A utilização de testes unitários e de integração.

- A disponibilização do sistema em deploy.

- A utilização de um design mais elaborado.

- A utilização de contextos para temas e melhor legibilidade do código.

- A correção da tipagem any no arquivo index.ts.
  * No front-end, arquivo `pages/index.ts`, linha 57, está com o eslint desabilitado para uma linha, pois o operador `this` não foi reconhecido, porém, o código está funcionando normalmente.
