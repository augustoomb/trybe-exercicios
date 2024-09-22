# pegando a imagem base do hub
FROM mjgargani/puppeteer:trybe1.0

# apontando onde será a pasta base na imagem (vi na doc do projeto)
WORKDIR /todo-app/tests

ADD node_modules.tar.gz .

# copiando tudo do pc(pasta onde está este dockerfile)para a raiz(WORKDIR)
COPY . .

CMD [ "npm", "test" ]