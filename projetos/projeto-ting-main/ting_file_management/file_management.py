import pathlib
import sys

# DICA: https://www.programiz.com/python-programming/user-defined-exception
# CRIANDO MINHA PRÓPRIA EXCEPTION


class InvalidExtensionException(Exception):
    "Quando a extensão do arquivo informado for diferente de .txt"
    pass

# PEGANDO A EXTENSÃO DO ARQUIVO INFORMADO


def get_file_extension(path_file):
    return pathlib.Path(path_file).suffix

# DICA: https://stackoverflow.com/questions/31661307/python-regex-remove-n
# REMOVER O \n USANDO EXPRESSÃO REGULAR


def remove_break_line(str):
    return str.strip().replace('\n', '')


def txt_importer(path_file):
    try:
        if get_file_extension(path_file) != ".txt":
            raise InvalidExtensionException

        file = open(path_file, mode="r")
        list_data = [remove_break_line(line) for line in file]

        file.close()

        return list_data

    except FileNotFoundError:
        print(f'Arquivo {path_file} não encontrado', file=sys.stderr)
    except InvalidExtensionException:
        print('Formato inválido', file=sys.stderr)


# if __name__ == "__main__":
#     txt_importer("statics/arquivo_teste.txt")
#     print(txt_importer("statics/arquivo_teste.txt"))
