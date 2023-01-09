import requests

# Por 10 segundos não temos certeza se a requisição irá retornar
response = requests.get("https://httpbin.org/delay/10")
print(response)



# As vezes pedimos um recurso ao servidor, mas caso o nosso tráfego de rede esteja
# lento ou exista um problema interno do servidor, nossa resposta pode demorar
# ou até mesmo ficar travada indefinidamente.