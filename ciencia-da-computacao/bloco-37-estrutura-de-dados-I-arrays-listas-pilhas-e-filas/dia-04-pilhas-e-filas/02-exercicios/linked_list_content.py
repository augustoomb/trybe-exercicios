from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length
    
    #  acessar o Node em qualquer posição da lista - complexidade: O(n)
    def __get_node_at(self, pos):
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while pos > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                pos -= 1

        return value_to_be_returned
    
    # INSERIR NO INÍCIO - complexidade: O(1):
    
    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1


    # INSERIR NO FIM - complexidade: O(1):
    def insert_last(self, value):
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



    #INSERIR EM QUALQUER POSIÇÃO - complexidade: O(n)
    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1



    # REMOVER NO INÍCIO - complexidade: O(1)
    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed
    


    # REMOVER NO FINAL - complexidade: O(1)
    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.head_value

        while previous_to_be_removed.next.next:
            previous_to_be_removed = previous_to_be_removed.next

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed
    #  Veja que essa função requer uma atenção especial,
    # pois além de uma variável auxiliar que utilizamos como ponteiro
    # para identificar o Node a ser removido, precisamos ter uma outra
    # variável para indicar o Node anterior.
    # Desta forma, indicamos que o Node anterior ao último irá
    # apontar para None como próximo, liberando assim a referência
    # ao anteriormente tido como último em nossa estrutura.



    # REMOVER EM QUALQUER POSIÇÃO - complexidade: O(n)
    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.head_value
        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed



    #OBTER ELEMENTO EM QUALQUER POSIÇÃO  - complexidade: O(n)
    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.head_value
        if value_to_be_returned:
            while position > 0 and value_to_be_returned.next:
                value_to_be_returned = value_to_be_returned.next
                position -= 1
            if value_to_be_returned:
                value_returned = Node(value_to_be_returned.value)
        return value_returned    


    # SABER SE LISTA ESTÁ VAZIA
    def is_empty(self):
        return not self.__length
    

    # REMOVER TODOS OS NÓS DA LISTA
    def clear(self):
        while not self.is_empty():
            self.remove_first()


    #  consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência.
    # Caso o valor não exista, considere retornar -1            complexidade: O(n)
    def index_of(self, value):
        position = 1
        current_value = self.head_value
        while current_value:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1
    
    

# Para testar, apenas rode o arquivo com: `python3 linked_list_content.py` :)
if __name__ == "__main__":
    linked_list = LinkedList()

    print(linked_list.is_empty()) # saída: True
    linked_list.insert_first(1)
    print(linked_list) # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_first(2)
    print(linked_list) # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.insert_last(3)
    print(linked_list) # saída: LinkedList(len=3 value=Node(value=2 next=Node(value=1 next=Node(value=3 next=None))))

    linked_list.remove_last()
    print(linked_list) # saída: LinkedList(len=2 value=Node(value=2 next=Node(value=1 next=None)))

    linked_list.remove_first()
    print(linked_list) # saída: LinkedList(len=1 value=Node(value=1 next=None))

    linked_list.insert_at(5, 1)
    print(linked_list) # saída: LinkedList(len=2 value=Node(value=1 next=Node(value=5 next=None)))

    linked_list.remove_at(0)
    print(linked_list) # saída: LinkedList(len=1 value=Node(value=5 next=None))

    linked_list.insert_at(6, 1)
    linked_list.insert_at(7, 2)
    linked_list.insert_at(8, 3)
    linked_list.insert_at(9, 4)
    print(linked_list.get_element_at(3)) # saída: Node(value=8 next=None)