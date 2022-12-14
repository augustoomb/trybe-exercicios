# Código exemplo para simular a API Gerenciator3000
class ReportLoader:
    def __init__(self):
        self.headers = ["id", "date", "final_price"]
        self.rows = [
            [1337, "2020-11-20", 2350.5],
            [1338, "2020-11-21", 4800.5],
        ]

loader = ReportLoader()
print(loader.headers)   #  ['id', 'date', ..., 'final_price']
print(loader.rows[0])  #  [1337, '2020-11-20', ..., 2350.5]