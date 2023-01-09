# Em seguida, acessamos a página de detalhes do produto, e inspecionamos a descrição do produto.
# A descrição do produto está uma tag p, “irmã” de uma tag com id product_description.
# Isto pode ser expresso através do seletor a.
# No código, precisamos realizar uma nova requisição à página de detalhes
# e depois analisaremos seu conteúdo em busca da descrição do produto.
# Para isso, vamos alterar todo o conteúdo novamente,
# porém dessa vez será o conteúdo do arquivo teste.py:

from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()
detail_page_url = URL_BASE + href

# baixa o conteúdo da página de detalhes
detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recupera a descrição do produto
# ~ significa a tag irmã
description = detail_selector.css("#product_description ~ p::text").get()
print(description)