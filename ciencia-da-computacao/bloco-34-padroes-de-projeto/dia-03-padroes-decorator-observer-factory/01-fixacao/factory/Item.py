from abc import ABC, abstractmethod

class Item(ABC):
    @abstractmethod
    def __repr__(self):
        # __repr__ é o método que o Python chama quando realizamos um print() do objeto 
        pass