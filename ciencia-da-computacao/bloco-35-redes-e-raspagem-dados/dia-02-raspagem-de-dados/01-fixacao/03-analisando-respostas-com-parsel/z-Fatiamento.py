# Podemos também definir dois índices que serão o valor inicial e final
# de uma subsequência da estrutura. Ou três valores, sendo o último o tamanho
# do passo que daremos ao percorrer a subsequência:

# Quando não incluso o valor inicial, iniciaremos do índice 0
# e do índice 2 em diante, os elementos não são incluídos
(1, 2, 3, 4)[:2]  # Saída: (1, 2)

# Quando omitimos o valor final
# o fatiamento ocorre até o fim da sequência
(1, 2, 3, 4)[1:]  # Saída: (2, 3, 4)

# Vá do índice 3 até o 7.
# O item no índice 7 não é incluído
"palavra"[3:7]  # Saída: "avra"

# Começando do elemento de índice 1, vá até o último,
# saltando de 2 em 2
[1, 2, 3, 4][1::2]  # Saída: [2, 4]


# À partir da versão 3.9 do Python, teremos uma função chamada removesuffix,
# que é equivalente à palavra[:-len(suffix)].




# -------------------------------------------------------------
# BONUS: fui usado no exercicio um exemplo com Três indices: 

            
lista = ["a", "u", "g", "u", "s"]

print(lista[0:5:1])   //['a', 'u', 'g', 'u', 's']


# EXPLICANDO... o primeiro indice diz onde vou começar.
# No caso, comecei do indice 0,ou seja, do início.

# o segundo indice é o final.
# No caso, meu arr vai até o índice 4 (0...4), mas coloquei 5 pra ele incluir tudo.

# O ultimo indice é opcional.
# Nesse exemplo coloquei 1. Significa que ele vai pegar de 1 em 1.
# Se eu colocasse 2, ele pegaria de 2 em 2;