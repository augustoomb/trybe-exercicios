const Users = require('./Users.json');

const mockCreate = (Instance, data) => {
  if (!data) {
    return;
  }

  const newData = data;
  if (!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const User = {
  create: async (data) => mockCreate(Users, data),
  findAll: async () => Users,  // retorna o nosso Users.json (mock)
};

module.exports = {
  User,
};


/*
Não se preocupe em entender a lógica das funções do Mock!
Basta entender que ele retorna, de forma mais ou menos estática,
os dados que esperamos que uma consulta em um modelo verdadeiro faria.
Em outras palavras, aqui estamos dizendo que um objeto User,
por exemplo, tem um método assíncrono findAll,
que retorna nosso conjunto de pessoas usuárias fake.
*/

/*
Dessa forma, podemos usar isso para interceptar a função verdadeira do Sequelize,
substituindo pela nossa.
*/