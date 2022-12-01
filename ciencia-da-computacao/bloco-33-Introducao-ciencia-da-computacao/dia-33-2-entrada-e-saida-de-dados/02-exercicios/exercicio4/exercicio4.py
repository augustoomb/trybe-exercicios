# Exercício 4: Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a porcentagem de livros
# em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

import json

def read_json():
  with open("books.json") as fileOpen:
    return json.load(fileOpen)

def count_books_by_category(books):
  categories = {}
  
  for book in books:
      for category in book["categories"]:
          categories[category]+=1

  return categories

# def count_books_by_categories(books):
#     categories = {}
#     for book in books:
#         for category in book["categories"]:
#             if not categories.get(category):
#                 categories[category] = 0
#             categories[category] += 1
#     return categories


books = read_json()
print(count_books_by_category(books))