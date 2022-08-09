const customerModel = require('./models/customers');

async function main() {
  const result = await customerModel.getAll();

  console.table(result);
}

main();