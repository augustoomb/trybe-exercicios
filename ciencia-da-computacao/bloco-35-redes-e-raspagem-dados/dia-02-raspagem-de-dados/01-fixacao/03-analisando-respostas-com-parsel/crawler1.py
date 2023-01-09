# SITE USADO PARA TREINAR RASPAGEM DE DADOS: http://books.toscrape.com/

# vamos baixar o conteúdo da página e criar um seletor, que será utilizado para
# realizarmos as extrações. Vamos criar o arquivo .py para buscarmos as informações:

from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)