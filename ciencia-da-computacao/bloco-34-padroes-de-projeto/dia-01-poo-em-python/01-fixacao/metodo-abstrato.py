#Para declarar um método como abstrato, utilizamos o decorador @abc.abstractmethod, 
# e preenchemos o corpo do método com um pass, com Ellipsis (...) ou com um raise NotImplementedError:

from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")