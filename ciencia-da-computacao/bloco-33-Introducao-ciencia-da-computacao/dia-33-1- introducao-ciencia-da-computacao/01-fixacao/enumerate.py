languages = ['Python', 'Java', 'JavaScript']

# aqui é um objeto. Não consigo ver no print
enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista(agora consigo ver no print)
enumerate_list = list(enumerate_prime)

# print(enumerate_prime) // apenas exibe "object"

print(enumerate_list)
# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]
