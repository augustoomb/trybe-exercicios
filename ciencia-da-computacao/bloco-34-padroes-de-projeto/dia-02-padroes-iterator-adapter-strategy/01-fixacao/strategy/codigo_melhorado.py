from abc import ABC, abstractmethod


class BancoStrategy(ABC):  # Interface
    @classmethod
    @abstractmethod
    def debitar(cls):
        raise NotImplementedError


class ItauStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Itau (exemplo)
        print("Débito realizado pelo Itau")


class SantanderStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Santander (exemplo)
        print("Santander, Débito efetuado!")


class BradescoStrategy(BancoStrategy):
    @classmethod
    def debitar(cls, conta, valor):
        # Codigos específico do Bradesco (exemplo)
        print("Sucesso!")

# ... métodos para todos os bancos