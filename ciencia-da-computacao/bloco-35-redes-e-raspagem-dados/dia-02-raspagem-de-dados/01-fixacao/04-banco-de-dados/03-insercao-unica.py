# Para adicionarmos documentos à nossa coleção utilizamos o método insert_one:

from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# book representa um dado obtido na raspagem
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
client.close()  # fecha a conexão com o banco de dados


# Quando um documento é inserido, um _id único é gerado e retornado