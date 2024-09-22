from .file_management import txt_importer
import sys


def check_path_file_in_queue(path_file, instance):
    for index in range(len(instance)):
        path_file_in_queue = (instance.search(index)['nome_do_arquivo'])
        if path_file_in_queue == path_file:
            return True


def process(path_file, instance):
    if check_path_file_in_queue(path_file, instance):
        return None

    list_content = txt_importer(path_file)

    dict_file = {
        "nome_do_arquivo": path_file,
        "qtd_linhas": len(list_content),
        "linhas_do_arquivo": list_content
    }

    instance.enqueue(dict_file)

    print(dict_file, file=sys.stdout)


def remove(instance):
    removal = instance.dequeue()
    if removal is None:
        print("Não há elementos", file=sys.stdout)
    else:
        print(f"Arquivo {removal['nome_do_arquivo']} removido com sucesso",
              file=sys.stdout)


def file_metadata(instance, position):
    try:
        found_element = instance.search(position)
        print(found_element, file=sys.stdout)
    except IndexError:
        print("Posição inválida", file=sys.stderr)


# O check_path_file_in_queue verifica se o path_file passado já está na fila.
# Minha queue possui um método que recebe um index e retorna o valor presente
# na posição da queue.
# Usando este método, eu trago o valor presente em cada posição da Queue
# e comparo com o que foi passado por parâmetro.
