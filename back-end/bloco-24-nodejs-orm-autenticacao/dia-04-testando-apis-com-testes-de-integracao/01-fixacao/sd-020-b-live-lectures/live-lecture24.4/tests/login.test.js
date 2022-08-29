const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

const server = require('../src/api/app.js');

const { User } = require('../src/models');
const { User: userMock } = require('./mock/models');

const jwt = require('jsonwebtoken');

describe('POST /api/login', () => {
    before(() => {
        sinon.stub(User, 'findOne').callsFake(userMock.findOne);
    });

    after(() => {
        User.findOne.restore();
    });

    describe('Quando não é passada pessoa usuária e senha', () => {
        let response;

        before(async () => {
            response = await chai.request(server)
            .post('/api/login')
            .send({})
        });

        it('retorna código de status "401"', () => {
            expect(response).to.have.status(401);
        });

        it('retorna objeto no body', () => {
            expect(response.body).to.be.an('object');
        });

        it('objeto do response possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });

        it('a propriedade "message" tem o valor "É necessário usuário e senha para fazer login"', () => {
            expect(response.body.message).to.be.equals('É necessário usuário e senha para fazer login');
        });
    });

    describe('Quando a pessoa usuária não existe ou senha é inválida', () => {
        let response;

        before(async () => {
            response = await chai.request(server)
            .post('/api/login')
            .send({
                username: 'user-fake',
                password: 'senha-fake'
            })
        });

        it('retorna código de status "401"', () => {
            expect(response).to.have.status(401);
        });

        it('retorna objeto no body', () => {
            expect(response.body).to.be.an('object');
        });

        it('objeto do response possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });

        it('a propriedade "message" tem o valor "Usuário não existe ou senha inválida"', () => {
            expect(response.body.message).to.be.equals('Usuário não existe ou senha inválida');
        });
    });

    describe('Quando login é feito com sucesso', () => {
        let response;

        const user = {
            username: "Saul Reixas",
            password: "tocasaul" 
        }

        before(async () => {
            response = await chai.request(server)
            .post('/api/login')
            .send({
                username: "Saul Reixas",
                password: "tocasaul"
            });
        });

        it('retorna código de status "200"', () => {
            expect(response).to.have.status(200);
        })

        it('retorna um objeto no body', () => {
            expect(response).to.be.an('object');
        })

        it('objeto do response possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });

        it('a response deve conbter a propriedade token que contém o username usado no login no seu payload', () => {
            const {token} = response.body;

            const payload = jwt.decode(token);
            
            expect(payload.username).to.be.equals(user.username);
        });
    })

});

