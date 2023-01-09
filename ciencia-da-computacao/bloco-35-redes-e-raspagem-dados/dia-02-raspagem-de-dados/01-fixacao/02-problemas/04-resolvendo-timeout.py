import requests


try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)



# Ás vezes pedimos um recurso ao servidor, mas caso o nosso tráfego de rede esteja
# lento ou exista um problema interno do servidor,
# nossa resposta pode demorar ou até mesmo ficar travada indefinidamente.

# Como garantir, após um tempo, que o recurso seja retornado?

# Podemos definir um tempo limite (timeout) para que, após este tempo,
# possamos tomar alguma atitude, como por exemplo, realizar uma nova tentativa.

# OBS: os números (10 e 1 ) presentes no link são apenas para esse exemplo
# específico e não são utilizados em um link comum