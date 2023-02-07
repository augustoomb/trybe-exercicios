# SEPARE AS PALAVRAS DE ACORDO COM SUA LETRA INICIAL

text = ['Ana', 'ama', 'Joao', 'que', 'ama', 'Jose', 'mais', 'Jose', 'nao', 'ama', 'Ana']

# resposta:

# a: ['Ana', 'ama', 'ama', 'ama', 'Ana']
# j: ['Joao', 'Jose', 'Jose']
# q: ['que']
# m: ['mas']
# n: ['nao']

def screening(text):
    screen = {}

    for word in text:
        first_char = word[0]
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)

    return screen


if __name__ == "__main__":
    for key, value in screening(text).items():
        print(f"{key}: {value}")