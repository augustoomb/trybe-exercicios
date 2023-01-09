from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()

# price = selector.css(".product_main .price_color::text").get()
price = selector.css(".product_main .price_color::text").re_first(r"\d*\.\d{2}")

description = selector.css("#product_description ~ p::text").get()

suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
    
cover = selector.css("#product_gallery img::attr(src)").get()

cover_url = "http://books.toscrape.com/catalogue/" + cover

print(title, price, description, cover, sep=",")

