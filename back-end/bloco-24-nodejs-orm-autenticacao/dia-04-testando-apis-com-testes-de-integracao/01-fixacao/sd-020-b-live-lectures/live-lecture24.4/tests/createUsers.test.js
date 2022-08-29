const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const server = require('../src/api/app');

const { User } = require('../src/models'); // chamando o model da aplicação, não o teste
const { User: userMock } = require('./mock/models');

chai.use(chaiHttp);

const { expect } = chai;

describe('Rota /api/users', () => {
  const ENDPOINT = '/api/users';

  before(() => {
    sinon.stub(User, 'create').callsFake(userMock.create);
    sinon.stub(User, 'findAll').callsFake(userMock.findAll);
  });

  after(() => {
    User.create.restore();
    User.findAll.restore();
  });

  describe('Consulta a lista de pessoas usuárias', () => {
    let response;

    before(async () => {
      response = await chai.request(server).get(ENDPOINT);
    });

    it('Essa requisição deve retornar código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('Traz uma lista inicial contendo dois registros de pessoas usuárias', () => {
      expect(response.body).to.have.length(2);
    });
  });

  describe('Insere um novo registro', () => {
    let createRequest = {};
    let firstUserList = [];
    let secondUserList = [];
    const newUser = {
      username: 'jane',
      password: 'senha123',
    };

    before(async () => {
      firstUserList = await chai
        .request(server)
        .get(ENDPOINT)
        .then(({ body }) => body);
      createRequest = await chai.request(server).post(ENDPOINT).send(newUser);
      secondUserList = await chai
        .request(server)
        .get(ENDPOINT)
        .then(({ body }) => body);
    });

    describe('firstUserList', () => {
      it('A primeira requisição GET para a rota deve retornar 2 registros', () => {
        expect(firstUserList).to.have.length(2);
      });
    });

    describe('createRequest', () => {
      it('A requisição POST para a rota retorna o código de status 201', () => {
        expect(createRequest).to.have.status(201);
      });

      it('A requisição deve retornar um objeto no corpo da resposta', () => {
        expect(createRequest.body).to.be.a('object');
      });

      it('O objeto possui a propriedade "message"', () => {
        expect(createRequest.body).to.have.property('message');
      });

      it('A propriedade "message" possui o texto "Novo usuário criado com sucesso"', () => {
        expect(createRequest.body.message).to.be.equal(
          'Novo usuário criado com sucesso',
        );
      });
    });

    describe('secondUserList', () => {
      it('A segunda requisição GET para rota deve retornar, por tanto, 3 registros', () => {
        expect(secondUserList).to.have.length(3);
      });

      it('O registro criado deve corresponder ao enviado na requisição POST', () => {
        expect(secondUserList[2]).to.contain(newUser);
      });
    });
  });
});
