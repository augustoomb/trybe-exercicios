# Filas: crie uma classe Queue, onde deve conter as operações: enqueue, dequeue, peek e is_empty.

# Para este desafio, é necessário efetuar o import das classes LinkedList e Node e utilizar
# seus métodos de acesso para simular uma fila, respeitando o padrão FIFO.

from node import Node

class LinkedQueue:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedQueue(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length
    

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    # EQUIVALENTE O insert_last DA LISTA ENCADEADA 
    def enqueue(self, value):
        last_value = Node(value)
        current_value = self.head_value

        # Mais abaixo criaremos o método is_empty()
        # que substituirá a condição deste if
        if current_value is None:
            return self.insert_first(value)

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1


    # EQUIVALE AO remove_first DA LISTA ENCADEADA
    def dequeue(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed
    
    # PEGAR PRIMEIRO ELEMENTO QUE FOI INSERIDO
    def peek(self):
        return self.head_value

    # SABER SE FILA ESTÁ VAZIA
    def is_empty(self):
        return not self.__length
    

if __name__ == "__main__":
        linked_queue = LinkedQueue()
        
        print(f"A FILA ESTÁ VAZIA?: {linked_queue.is_empty()}")

        linked_queue.enqueue(5)
        linked_queue.enqueue(7)
        linked_queue.enqueue(9)
        print(f"A FILA COMPLETA: {linked_queue}")    

        print(f"ELEMENTO FIRST IN: {linked_queue.peek()}")    

        linked_queue.dequeue()
        print(f"A FILA APÓS 1 DEQUEUE: {linked_queue}")

        print(f"A FILA ESTÁ VAZIA?: {linked_queue.is_empty()}")

