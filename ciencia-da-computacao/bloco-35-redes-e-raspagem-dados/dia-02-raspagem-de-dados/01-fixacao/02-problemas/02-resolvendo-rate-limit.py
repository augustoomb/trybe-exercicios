import requests
import time


# Coloca uma pausa de 6 segundos a cada requisição
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response)
    time.sleep(6)



# Uma boa prática é sempre fazermos uma pausa entre as requisições, ou lote delas,
# mesmo que o website onde a informação está não faça o bloqueio.
# Assim, evitamos tirar o site do ar.