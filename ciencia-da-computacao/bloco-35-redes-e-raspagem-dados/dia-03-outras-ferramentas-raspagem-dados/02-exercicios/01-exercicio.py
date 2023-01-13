# Exercício 1: Com o Selenium, faça uma requisição para o endpoint
# “https://quotes.toscrape.com/“ e imprima a primeira citação que aparece na página.

from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

firefox.get("https://quotes.toscrape.com/")

phrases = firefox.find_elements(By.CLASS_NAME, "text")

print(phrases[0].get_attribute("innerHTML"))



# OUTRA FORMA (GABARITO):

# from selenium import webdriver
# from selenium.webdriver.common.by import By

# firefox = webdriver.Firefox()

# def scrape(url):
#         firefox.get(url)

#         quote = firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')

#         print(quote)

# scrape('https://quotes.toscrape.com/')