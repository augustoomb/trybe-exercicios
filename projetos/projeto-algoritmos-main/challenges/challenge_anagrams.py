# remover acentos
# from unidecode import unidecode


# def remove_accents(str):
#     return unidecode(str)


def str_to_list(str):
    return list(str)


def str_to_lower_case(str):
    return str.lower()


def mount_list(str):
    # str_without_accents = remove_accents(str)
    # str_lower_case = str_to_lower_case(str_without_accents)
    str_lower_case = str_to_lower_case(str)
    list = str_to_list(str_lower_case)
    return list


def list_to_str(list):
    return ''.join(list)


def compare_strings(str1, str2):
    if str1 == '' and str2 == '':
        return False
    else:
        return str1 == str2


def is_anagram(first_string, second_string):
    arr_primeira_str_ordenada = quick_sort(mount_list(first_string))
    arr_segunda_str_ordenada = quick_sort(mount_list(second_string))
    primeira_str_ordenada = list_to_str(arr_primeira_str_ordenada)
    segunda_str_ordenada = list_to_str(arr_segunda_str_ordenada)
    comparacao = compare_strings(primeira_str_ordenada, segunda_str_ordenada)
    return (primeira_str_ordenada, segunda_str_ordenada, comparacao)


# Baseado em: https://stackoverflow.com/questions/48017422
# /implementing-quick-sort-in-python


def quick_sort(arr):
    tam_arr = len(arr)
    if tam_arr <= 1:
        return arr
    meio_do_arr = tam_arr // 2
    pivot = arr[meio_do_arr]
    esq = [x for x in arr if x < pivot]
    dir = [x for x in arr if x > pivot]
    meio = [x for x in arr if x == pivot]
    return quick_sort(esq) + meio + quick_sort(dir)


# print(is_anagram("Augusto", "Otávio"))
# print(is_anagram("", ""))
