class DoubleNode:
    def __init__(self, value):
        self.value = value  # Dado a ser armazenado
        self.next = None  # próximo nó
        self.prev = None  # nó anterior

    def __str__(self):
        return f"Node(value={self.value}, next={self.next}), prev={self.prev}"