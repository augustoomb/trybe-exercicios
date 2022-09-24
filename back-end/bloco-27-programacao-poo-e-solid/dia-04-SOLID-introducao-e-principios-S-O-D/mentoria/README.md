# Mentoria Invertida POO da Turma **20** :book: :rocket:

Este código é dedicado a Mentoria Invertida de POO #VQV :smile:

## Caso :thinking:

Nossa equipe foi contratada para realizarmos mudanças em uma aplicação que já está pronta. Atualmente ela está usando o **paradigma estrutural** e o objetivo vai ser refatorar ela usando **orientação a objeto**. :wink: :smile:

## Configurando a aplicação:

- Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente.

- Utilize o arquivo `database.sql` para subir o banco de dados.

- Caso opte por utilizar um banco de dados no Docker temos um `docker-compose.yml`
  pronto

## Desafio :eyes:

Refatore a aplicação utilizando o paradigma de programação orientada a objetos
(bônus se utilizar os princípios SOLID também!)

### Banco de dados:

A aplicação possui 3 interfaces já prontas (Person, Talker e Spectator) que
modelam o banco de dados e **não devem ser alteradas**

`Person`: possui 3 atributos:

- id;
- name;
- age;

`Talker`: Extende `Person` e tem os `atributos`:

- id (herdado de Person);
- name (herdado de Person);
- age (herdado de Person);
- displayOrder (é a ordem em que as pessoas palestrantes vão se apresentar);

`Spectator`: Extende `Person` e tem os `atributos`:

- id (herdado de Person);
- name (herdado de Person);
- age (herdado de Person);
- position (é o lugar onde a pessoa vai se sentar);

### API:

Nossa aplicação possui os endpoints `/talker` e `/spectator` que **não devem ser alterados**, e onde é possível:

- cadastrar uma nova pessoa, palestrante ou ouvinte

- ler os dados de uma pessoa, palestrante ou ouvinte

- atualizar a ordem de apresentação de um palestrante ou o assento de um ouvinte

- remover uma pessoa, palestrante ou ouvinte

### Dicas para refatorar a aplicação:

- A estrutura do banco de dados, a API, e as regras de validação não podem ser alteradas, já a organização dos arquivos e pastas podem ser alteradas se entenderem que faz sentido

- Começar pela pasta `models`, depois refatorar a `services` e `utils` e por fim a `controllers` garante uma experiência mais fluida

- As entidades `Talker` e `Spectator` são bem similares, pensem em como refletir isso nas classes
