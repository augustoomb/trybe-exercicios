# from ting_file_management.queue import Queue
# from ting_file_management.file_process import process


def list_contains(list, word, details):
    list_content = []
    for index in range(len(list)):
        if word.lower() in list[index].lower():
            if details is False:
                list_content.append(
                    {"linha": index + 1}
                )
            else:
                list_content.append(
                    {"linha": index + 1, "conteudo": list[index]}
                )

    return list_content


def exists_word(word, instance, details=False):
    occurrence_list = []
    for index in range(len(instance)):
        item_in_queue = instance.search(index)
        list_content = list_contains(item_in_queue['linhas_do_arquivo'],
                                     word, details)
        if len(list_content) > 0:
            occurrence_list.append({
                "palavra": word,
                "arquivo": item_in_queue['nome_do_arquivo'],
                "ocorrencias": list_content
            })

    return occurrence_list


def search_by_word(word, instance):
    occurrence_list = exists_word(word, instance, True)

    return occurrence_list

# if __name__ == "__main__":
#     queue1 = Queue()
#     process("statics/nome_pedro.txt", queue1)
#     print('Resposta abaixo:')
#     print(search_by_word("pedro", queue1))
