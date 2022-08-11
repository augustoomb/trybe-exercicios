DROP TABLE model_database.transactions

CREATE TABLE model_database.transactions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  coin VARCHAR(10) NOT NULL,
  amount INT NOT NULL,
  type VARCHAR(20),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO model_database.transactions (coin, amount, type) VALUES
('BRL', 30000, 'deposit'),
('BRL', 20000, 'deposit'),
('BRL', -10000, 'withdraw'),
('BTC', 159852, 'deposit'),
('BTC', -100000, 'withdraw'),
('BTC', 20254, 'deposit');

SELECT *
FROM model_database.transactions;

SELECT CAST(SUM(amount / 100) as DECIMAL(10,2)) as totalAmount, coin 
FROM model_database.transactions
WHERE coin = 'BRL'

SELECT CAST(SUM(amount / 100000000) as DECIMAL(10,8)) as totalAmount, coin 
FROM model_database.transactions
WHERE coin = 'BTC'
