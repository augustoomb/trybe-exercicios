const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { Post } = require('../src/models');
const { Post: postMock } = require('./mock/models');

const { User } = require('../src/models');
const { User: userMock } = require('./mock/models'); 

const { expect } = chai;

const server = require('../src/api/app.js');

describe('GET /api/posts', () => {

    before( async () => {
        sinon.stub(User, 'findOne').callsFake(userMock.findOne);
        sinon.stub(Post, 'findAll').callsFake(postMock.findAll);
    });

    after(() => {
        User.findOne.restore();
        Post.findAll.restore();
    });

    describe('Quando não é passado um JWT para autenticação', () => {
        before( async () => {
            response = await chai.request(server).get('/api/posts').set('authorization', '');
        })

        it('retorna o código de status "401"', () => {
            expect(response).to.have.status(401);
        })

        it('retorna um objeto no body', () => {
            expect(response.body).to.be.an('object');
        })

        it('objeto do response possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });

        it('a propriedade "message" tem o valor "A requisição necessita de um token válido"', () => {
            expect(response.body.message).to.be.equals('A requisição necessita de um token válido');
        });
    })

    describe('Quando os posts são buscados com sucesso', () => {
        let response;

        before( async () => {

            const loginResponse = await chai.request(server)
                .post('/api/login')
                .send({
                    username: "Saul Reixas",
                    password: "tocasaul"
                });

            response = await chai.request(server)
                .get('/api/posts')
                .set('authorization', loginResponse.body.token);
        });
    
        

        it('retorna código de status "200"', () => {
            expect(response).to.have.status(200);
        })

        it('o corpo da resposta é um array', () => {
            expect(response.body.mockPosts).to.be.an('array');
        })
    })


})