const connection = require('./connection');

async function getBalanceBTC(){
  const [result] = await connection.execute(`
    SELECT CAST(SUM(amount / 100000000) as DECIMAL(10,8)) as totalAmount, coin 
    FROM model_database.transactions
    WHERE coin = 'BTC'
  `);

  return result[0]
}

async function getBalanceBRL(){
  const [result] = await connection.execute(`
    SELECT CAST(SUM(amount / 100) as DECIMAL(10,2)) as totalAmount, coin 
    FROM model_database.transactions
    WHERE coin = 'BRL'
  `)

  return result[0]
}

async function createTransaction({ coin, amount, type }){
  const [{ insertId }] = await connection.execute(`
  INSERT INTO model_database.transactions (coin, amount, type) VALUES
  (?, ?, ?)
  `, [coin, amount, type])

  return { id: insertId, coin, amount, type }
}

// getBalanceBTC().then(result => console.log({ result }))
// getBalanceBRL().then(result => console.log({ result }))
// createTransaction({ amount: 500 * 100, coin: 'BRL', type: 'deposit' }).then(result => console.log({ result }))

module.exports = { getBalanceBTC, getBalanceBRL, createTransaction }
