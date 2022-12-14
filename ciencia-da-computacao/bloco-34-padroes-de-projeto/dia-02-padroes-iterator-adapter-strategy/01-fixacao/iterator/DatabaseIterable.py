# Iterator e Iterable é a Interface padronizada pelo Python
from collections.abc import Iterable
from DatabaseIterator import DatabaseIterator


class DatabaseIterable(Iterable):
    def __init__(self, db, query):
        self.db = db
        self.query = query

    """Aqui retornamos qual é o objeto que realiza a iteração"""
    def __iter__(self):
        return DatabaseIterator(self.db, self.query)