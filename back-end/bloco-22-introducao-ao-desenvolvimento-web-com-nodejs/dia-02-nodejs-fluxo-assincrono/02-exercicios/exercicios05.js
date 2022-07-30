const fs = require('fs').promises;

const arrStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];



Promise.all([
  arrStrings.map((str, index) => {
    fs.writeFile(`file${index + 1}.txt`, str);
  })
])
  .then((teste) => { // só pra eu ver o que é a resposta
    console.log(teste);
  })
  .catch((error) => {
    console.error(error.message);
  })



