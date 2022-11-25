# Boas Vindas ao repositório de introdução à Python

## Aqui você vai encontrar exercícios para treinar conceitos introdutórios à linguagem Python. Você encontra esse conteúdo [aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/section/b436f9e0-dfde-4a16-9bad-82f0c559dd45/day/bee44ac6-0782-48cd-9ce8-1811980e558e/lesson/71641e4a-4804-43d0-b91c-b6c0c8724013) dentro da plataforma de aprendizagem.
---

## Como começar?
<details>
<summary> Passo a Passo </summary>

1. Tenha o Python instalado em sua máquina ([guia aqui](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/aa76abc8-b842-40d9-b5cc-baa960952129/lesson/3f79a20e-f527-4871-b69b-544310cfbda0 "Guia de configuração de ambiente Python")), caso tenha dúvidas sobre esse ponto, poste no canal da turma e o time responsável irá te ajudar aqui. 

2. Crie o ambiente virtual que será utilizado para instalar as dependências

```bash
python3 -m venv .venv
```

3. Ative o ambiente virtual que foi criado

```bash
source .venv/bin/activate
```

4. Instale os requerimentos deste repositório 

```bash
python3 -m pip install -r dev-requirements.txt
```

5. Execute todos os testes do repositório (note que, enquanto não houver implementação nas funções, os testes falharão!)

```bash
python3 -m pytest
```

6. Execute os testes de um arquivo específico (note que, enquanto não houver implementação nas funções, os testes falharão!)

```bash
python3 -m pytest tests/<caminho/para/o/arquivo/de/teste>
```

7. Execute apenas um teste específico de um arquivo específico (note que, enquanto não houver implementação nas funções, os testes falharão!)

```bash
python3 -m pytest tests/<caminho/para/o/arquivo/de/teste>::<nome_da_função_do_teste>
```

</details>

---


## Detalhamento sobre os exercícios

<details>

<summary> Operações Básicas </summary>
<br>


### Os exercícios relacionados às operações básicas na linguagem `Python` podem ser encontrados no arquivo `exercises/basic_operations.py`, o que se espera de cada um destes exercícios será detalhado abaixo:


<br>

1. A função abaixo deve receber dois números e retornar o valor correspondente à soma dos mesmos.

```bash
def basic_sum(first_number, second_number):
    return 
```

2. A função abaixo deve receber dois números e retornar o valor correspondente à diferença do primeiro número em relação ao segundo.

```bash
def basic_difference(first_number, second_number):
    return 
```

3. A função abaixo deve receber dois números e retornar o valor correspondente ao produto dos mesmos.

```bash
def basic_product(first_number, second_number):
    return 
```

4. A função abaixo deve receber dois números e retornar o valor correspondente à divisão do primeiro com o segundo número.

```bash
def basic_division(first_number, second_number):
    return 
```

5. A função abaixo deve receber dois números e retornar o valor correspondente à divisão inteira (quociente) do primeiro com o segundo número.

```bash
def basic_integer_division(first_number, second_number):
    return 
```

6. A função abaixo deve receber dois números e retornar o valor correspondente ao resto da divisão entre o primeiro e o segundo número.

```bash
def basic_remainder(first_number, second_number):
    return 
```

7. A função abaixo deve receber dois números e retornar o valor correspondente ao primeiro número elevado ao segundo.

```bash
def basic_potentiation(first_number, second_number):
    return 
```

</details>

---

<br>
<details>

<summary> Tipos de Dados em Python </summary>
<br>


### Os exercícios relacionados aos tipos de dados na linguagem `Python` podem ser encontrados no arquivo: `exercises/python_data_types.py`, o que se espera de cada um destes exercícios será detalhado abaixo:


<br>

1. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo booleano.

```bash
def is_bool(value):
    return 
```

2. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo inteiro.

```bash
def is_int(value):
    return 
```

3. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo float.

```bash
def is_float(value):
    return  
```

4. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo string.

```bash
def is_string(value):
    return 
```

5. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo lista.

```bash
def is_list(value):
    return 
```

6. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo tupla.

```bash
def is_tuple(value):
    return 
```

7. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo conjunto.

```bash
def is_set(value):
    return 
```

8. A função abaixo deve verificar se o valor recebido como parâmetro é do tipo dicionário.

```bash
def is_dict(value):
    return 
```

9. A função abaixo recebe uma string genérica como parâmetro e deve retornar a mesma string, no entanto, todos os caracteres maiúsculos devem ser convertidos em minúsculos.

```bash
def return_lower_case_string(word):
    return 
```

10. A função abaixo recebe um elemento e uma lista como parâmetros e deve retornar a mesma lista, mas agora contendo o elemento em sua última posição.

```bash
def append_element_in_list(element, input_list):
    return 
```

11. A função abaixo recebe um elemento e uma lista como parâmetros e deve retornar a mesma lista, mas agora removendo o elemento passado como parâmetro.

```bash
def remove_element_from_list(element, input_list):
    return 
```

12. A função abaixo recebe uma chave, um valor e um dicionário como parâmetros e deve retornar o mesmo dicionário contendo o novo par chave: valor.

```bash
def create_new_key_value_in_dict(key, value, input_dict):
    return 
```

13. A função abaixo recebe uma chave e um dicionário como parâmetros e deve retornar o mesmo  dicionário, mas agora removendo a chave passada como parâmetro.

```bash
def delete_key_from_dict(key, input_dict):
    return 
```

14. A função abaixo recebe um elemento e um conjunto como parâmetros e deve retornar o mesmo conjunto contendo o elemento.

```bash
def add_element_to_set(element, input_set):
    return 
```

15. A função abaixo recebe um elemento e um conjunto como parâmetros e deve retornar o mesmo conjunto removendo o elemento passado como parâmetro

```bash
def remove_element_from_set(element, input_set):
    return 
```


</details>

---

<br>
<details>

<summary> Condicionais </summary>
<br>


### Os exercícios relacionados às estruturas condicionais na linguagem `Python` podem ser encontrados no arquivo: `exercises/conditionals.py`. Pode ser que você encontre uma resolução para estes exercícios que não necessite de uma estrutura condicional (ifs), contudo, para fins didáticos, recomenda-se sua utilização. O que se espera de cada um destes exercícios será detalhado abaixo:


<br> 

1. A função abaixo deve verificar se a string passada como parâmetro possui 4 ou mais caracteres, em caso positivo, deve retornar `True`, em caso negativo, retornar `False`.

```bash
def check_if_word_has_4_or_more_letters(word):
    return 
```

2. A função abaixo recebe dois números como parâmetros e deve retornar aquele que é maior entre eles, em caso de igualdade, o retorno pode ser qualquer um dos dois.

```bash
def check_what_number_is_greater(first_number, second_number):
    return 
```

3. A função abaixo deve verificar se o número recebido como parâmetro é par ou ímpar. Caso seja par, a função deve retornar `"even"`, caso seja ímpar, deve retornar `"odd"`.

```bash
def check_if_number_is_odd_or_even(number):
    return 
```

4. A função abaixo recebe um elemento e uma lista como parâmetros e deve verificar se o elemento está contido na lista, em caso positivo, deve retornar `True`, em caso negativo, retornar `False`.

```bash
def check_if_element_exists_in_list(element, input_list):
    return 
```

</details>

---

<br>
<details>

<summary> Repetição </summary>
<br>


### Os exercícios relacionados às estruturas de repetição na linguagem `Python` podem ser encontrados no arquivo: `exercises/repetition.py`. Pode ser que você encontre uma resolução para estes exercícios que não necessite de uma estrutura de repetição (for, while), contudo, para fins didáticos, recomenda-se sua utilização. O que se espera de cada um destes exercícios será detalhado abaixo:

<br>


1. A função abaixo recebe uma string como parâmetro e deve retornar uma lista contendo cada um dos caracteres da string. A ordem dos caracteres na lista deve ser a mesma ordem da string.

```bash
def append_each_letter_of_the_word_in_a_list(word):
    return 
```

2. A função abaixo recebe uma string genérica que tem apenas uma letra maiúscula como parâmetro. A função deve retornar o número que corresponde ao índice (posição) da letra maiúscula na string.

```bash
def return_index_of_the_uppercase_letter(word):
    return
```

3. A função abaixo recebe uma lista como parâmetro na qual apenas um de seus elementos é uma string. A função deve retornar esse elemento.

```bash
def return_element_from_list_that_is_string(input_list):
    return 
```

</details>

---

## Qualquer dúvida ou problema, basta postar no canal do slack da turma ou procurar o time de instrução responsável 😊, bons estudos!
