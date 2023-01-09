# Com esse seletor em mãos (URL que nos leva até a página de detalhes de um produto.),
# precisamos recuperar o atributo href que contém o link para a página de detalhes do livro.
# Vamos criar um outro arquivo, apenas para fazer o teste da feature que queremos implementar,
# depois vamos alterar o código do arquivo exemplo_scrape.py para realmente implementar a função.
# Lembre-se de criar o arquivo no mesmo diretório que já estava utilizando.

from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# Vamos testar com a primeira página
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recupera o atributo href do primeiro elemento que combine com o seletor
href = selector.css(".product_pod h3 a::attr(href)").get()
print(href)

# Para obter a url completa, basta adicionar a nossa URL_BASE
print(URL_BASE + href)