# Observando o navegador aberto com a execução do código, você verá que ele abriu na
# página solicitada e em seguida começou a percorrer as páginas do site,
# o que indica que tudo está correndo bem. Contudo, pouco antes de finalizar,
# já na última página, no terminal aparece uma exceção do Selenium chamada ‘NoSuchElementException’.

# Pela mensagem fica mais fácil de entender o que deu errado.
# Ao entrar na última página, ele fez a raspagem de todas as informações pedidas,
# porém o passo seguinte foi impossível de executar já que precisava achar o
# botão ‘next’ para alterar o link na variável url2request.
# A forma mais simples de resolver este erro é importar a exceção do Selenium e tratá-la com um try,
# de forma que ao ocorrer esta situação o loop seja quebrado.


from selenium import webdriver

from selenium.webdriver.common.by import By

from selenium.common.exceptions import NoSuchElementException

firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)

    books = []

    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        new_item = {}

        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)
    return books


firefox.get("https://books.toscrape.com/")

all_books = []
url2request = "https://books.toscrape.com/"

next_page_link = (
    firefox.find_element(By.CLASS_NAME, "next")
    .get_attribute("innerHTML")
)

while next_page_link:

    all_books.extend(scrape(url2request))
    try:
        url2request = (
            firefox.find_element(By.CLASS_NAME, 'next')
            .find_element(By.TAG_NAME, 'a').get_attribute('href')
        )
    except NoSuchElementException:
        print("exception handled")
        break

print(all_books)