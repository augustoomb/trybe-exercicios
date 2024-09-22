# import sys
import pathlib
import csv
from collections import Counter
# https://docs.python.org/3/library/collections.html#collections.Counter

# DICA: https://www.programiz.com/python-programming/user-defined-exception
# CRIANDO MINHA PRÓPRIA EXCEPTION


class InvalidExtensionException(Exception):
    "Quando a extensão do arquivo informado for diferente de .csv"
    pass


def get_file_extension(path_file):
    return pathlib.Path(path_file).suffix


def get_data_csv(path_to_file):
    wish_list = []
    with open(path_to_file, 'r') as file:
        wish_list = list(csv.reader(file))

    return wish_list


def write_data_in_txt(list_data, path_to_file):
    file = open(path_to_file, mode='w')
    file.writelines(list_data)


def get_most_requested_dish(data_csv, client):
    list_counts = []
    for item in data_csv:
        if item[0] == client:
            list_counts.append(item[1])

    return Counter(list_counts).most_common()[0][0]


def get_times_the_product_was_ordered(data_csv, client, prod):
    list_counts = 0
    for item in data_csv:
        if item[0] == client and item[1] == prod:
            list_counts += 1

    return list_counts


def get_all_products_in_csv(path_to_file):
    data_csv = get_data_csv(path_to_file)

    set_products = set()
    for item in data_csv:
        set_products.add(item[1])

    return set_products


def get_all_days_in_csv(path_to_file):
    data_csv = get_data_csv(path_to_file)

    set_days = set()
    for item in data_csv:
        set_days.add(item[2])

    return set_days


def get_all_products_by_client(data_csv, client):
    set_products = set()

    for item in data_csv:
        if item[0] == client:
            set_products.add(item[1])

    return set_products


def get_all_days_by_client(data_csv, client):
    set_days = set()

    for item in data_csv:
        if item[0] == client:
            set_days.add(item[2])

    return set_days


def analyze_log(path_to_file):
    if get_file_extension(path_to_file) != ".csv":
        raise FileNotFoundError(f"Extensão inválida:: {path_to_file}")

    try:
        data_csv = get_data_csv(path_to_file)

        most_requested_dish_maria = get_most_requested_dish(data_csv, 'maria')

        times_the_product_was_ordered = get_times_the_product_was_ordered(
            data_csv, 'arnaldo', 'hamburguer'
        )

        all_products = get_all_products_in_csv(path_to_file)
        joao_products = get_all_products_by_client(data_csv, 'joao')
        products_that_joao_never_asked_for = (
            all_products.difference(joao_products)
        )

        all_days = get_all_days_in_csv(path_to_file)
        joao_days = get_all_days_by_client(data_csv, 'joao')
        days_that_joao_does_not_go = all_days.difference(joao_days)

        data_to_save_in_txt = [
            f"{most_requested_dish_maria}\n",
            f"{str(times_the_product_was_ordered)}\n",
            f"{str(products_that_joao_never_asked_for)}\n",
            str(days_that_joao_does_not_go),
        ]

        write_data_in_txt(data_to_save_in_txt, 'data/mkt_campaign.txt')

    except FileNotFoundError:
        raise FileNotFoundError(f"Arquivo inexistente: {path_to_file}")


# if __name__ == "__main__":
#     path_to_file = "data/mkt_campaign.txt"

#     analyze_log(path_to_file)
