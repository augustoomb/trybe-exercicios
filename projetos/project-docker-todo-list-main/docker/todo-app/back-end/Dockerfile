# pegando a imagem base do dockerhub
FROM node:14-alpine

# apontando onde será a pasta base na imagem (vi na doc do projeto)
WORKDIR /todo-app/back-end

ADD node_modules.tar.gz .

# copiando tudo do pc(pasta onde está este dockerfile)para a raiz(WORKDIR)
COPY . .

# comando básico para instalar dependências.
# Já estou copiando e extraindo a pasta node_modules
# Não ficou claro se preciso desse passo. Mas não atrapalhará.
RUN npm install

# expondo a porta solicitada no readme
EXPOSE 3001

CMD [ "npm", "start" ]