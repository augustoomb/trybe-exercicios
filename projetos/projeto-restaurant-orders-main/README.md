# Boas-vindas ao repositório do projeto `Restaurant Orders`!

Foi desenvolvido um projeto em Python utilizando uma situação real para exercitar as habilidades em Hashmap, Dict e Set

# Projeto

<details>
  <summary><strong>Situação</strong></summary><br />
A lanchonete :baguette_bread: :cook: Pão na Chapa :baguette_bread: :cook: possui um sistema de faturamento de pedidos de clientes que salva o nome da pessoa, o pedido realizado e o dia da semana do atendimento. A gerência da lanchonete quer aumentar suas vendas e melhorar sua gestão interna e, para isso, te contratou para implementar um projeto de melhorias, o Projeto `Restaurant Orders`. </br>
    Em um primeiro momento (requisitos obrigatórios), você deverá atuar para que o sistema gere relatórios com informações sobre os pedidos e as pessoas clientes que frequentam a lanchonete. Estes dados irão auxiliar o trabalho de uma agência de marketing com o objetivo de alavancar as vendas e o número de pessoas clientes. </br>
 </br>
</br>
Habilidades exercitadas: </br>
  - Trabalhar com `Hashmap` e `Dict` e; </br>
  - Trabalhar com `Set`. </br>

</details>


# Requisitos obrigatórios

## 1 - Campanha de publicidade

> Implemente um método chamado `analyze_log` no módulo `src/analyze_log.py` que gere informações de uma lanchonete.

A lanchonete quer promover ações de marketing e, para isso, a agência de publicidade precisa das informações abaixo:

- Qual o prato mais pedido por 'maria'?

- Quantas vezes 'arnaldo' pediu 'hamburguer'?

- Quais pratos 'joao' nunca pediu?

- Quais dias 'joao' nunca foi à lanchonete?

#### Dados

O atual sistema da lanchonete 🥖🧑‍🍳 Pão na Chapa 🥖🧑‍🍳  guarda os `logs` de todos os pedidos feitos em um arquivo _csv_, contendo o formato `cliente, pedido, dia`, um por linha e sem nome das colunas (a primeira linha já é um pedido).

O `log` a ser utilizado é o arquivo `data/orders_1.csv`. Todas as informações são _strings_ com letras minúsculas. O histórico contém pedidos feitos em todos os dias da semana que a lanchonete abre, e de todos os pratos que a lanchonete oferece. Ou seja, é possível saber o cardápio e agenda completos. Os dias da semana estão no formato `"...-feira", "sabado" ou "domingo"`, e **não nos interessa informações sobre os dias que a lanchonete não abre**.

#### Implementação

No arquivo `analyze_log.py`, escreva uma função que responda às seguintes perguntas abaixo:

- Qual o prato mais pedido por 'maria'?

- Quantas vezes 'arnaldo' pediu 'hamburguer'?

- Quais pratos 'joao' nunca pediu?

- Quais dias 'joao' nunca foi à lanchonete?

A função não retornará nada e deverá apenas salvar as respostas no arquivo `data/mkt_campaign.txt`, na mesma ordem das peguntas acima.

<details>
<summary><b>Clique aqui para ver a assinatura da função.</b></summary>

```python
def analyze_log(path_to_file):
    # Código vem aqui
```

</details>

<details>
<summary><b>Clique aqui para ver saída correta da função.</b></summary>

```
hamburguer
1
{'pizza', 'coxinha', 'misto-quente'}
{'sabado', 'segunda-feira'}
```
</details>


- No arquivo `analyze_log.py` deve estar implementada a função `def analyze_log(path_to_file)`;

- A função deve realizar a leitura do `log` e salvar em um arquivo `txt` as informações solicitadas;

- Utilização correta de `Dict/Set`, vistos no módulo;

- Código legível e modularizado, quando for o caso.

## 2 - Análises contínuas

> Implemente a classe `TrackOrders` que gere informações contínuas da  Pão na Chapa 🍳 .

A campanha de marketing foi um sucesso! A gerência da  Pão na Chapa deseja agora um sistema que mantenha um registro contínuo dessas informações. Mais especificamente, deseja que o sistema permita, a qualquer momento, a extração das seguintes informações:

- Prato favorito por cliente;

- Pratos nunca pedidos por cada cliente;

- Dias nunca visitados por cada cliente;

- Dia mais movimentado;

- Dia menos movimentado.

Para isso, você deverá implementar uma classe que entregue as informações acima.

#### Implementação

**Arquivos**

- Implemente a classe `TrackOrders` no arquivo `track_orders.py`;

- O arquivo `src/main.py` é apenas auxiliar e faz a leitura do arquivo `csv` especificado e envia, ao mesmo tempo, a informação de cada pedido para as classes `TrackOrders` e para a classe `InventoryControl`;


- No arquivo `src/main.py` algumas informações são impressas na tela para que você observe o comportamento das classes após a leitura completa do arquivo `csv`,


**Teste o comportamento do arquivo `main.py`**.

Abra o arquivo `main.py` e complete a variável _path_ com `data/orders_1.csv`. Rode o arquivo `main.py`. Quatro linhas de `None` devem ser impressas. Isso acontece, porque as funções não estão devidamente implementadas ainda.

**Implemente a solução**

<details>
<summary><b>No arquivo <code>track_orders.py</code>, implemente a classe <code>TrackOrders</code>. Clique aqui para ver os métodos que devem ser implementados.</b></summary>

```python
class TrackOrders:
    # aqui deve expor a quantidade de estoque
    def __len__(self):
        pass

    def add_new_order(self, customer, order, day):
        pass

    def get_most_ordered_dish_per_customer(self, customer):
        pass

    def get_never_ordered_per_customer(self, customer):
        pass

    def get_days_never_visited_per_customer(self, customer):
        pass

    def get_busiest_day(self):
        pass

    def get_least_busy_day(self):
        pass
```

</details>


- Classe `TrackOrders` implementada;

- A classe está devidamente modularizada;

- Os métodos fazem uso das técnicas de `Dict` e `Set` vistos no módulo;

- Os métodos atingem complexidade ótima (geralmente `O(1)` ou `O(n)`, em alguns métodos que usam `Set`).



---
