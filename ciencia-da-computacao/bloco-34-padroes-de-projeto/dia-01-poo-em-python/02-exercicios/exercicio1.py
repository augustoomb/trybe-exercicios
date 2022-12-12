class Tv:
    def __init__(self,  tamanho):
        self.__volume =  50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    
    def aumentar_volume(self):
        if self.__volume >= 99:
             raise ValueError(
                f"Volume precisar ser menor ou igual a 99"
            )
        self.__volume += 1

    def diminuir_volume(self):
        if self.__volume <= 0:
             raise ValueError(
                f"Volume precisar ser maior que 0"
            )
        self.__volume -= 1

    def modificar_canal(self, novo_canal):
        if not 1 <= novo_canal <= 99:
            raise ValueError(
                f"Canal precisa estar entre 1 e 99"
            )
        self.__canal = novo_canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    # para imprimir o objeto
    def __str__(self):
        return f"""
            volume: {self.__volume}
            canal: {self.__canal}
            tamanho: {self.__tamanho}
            ligada: {self.__ligada}
        """


def main():
    minha_tv = Tv(55)
    try:
        minha_tv.aumentar_volume()
        minha_tv.ligar_desligar()
        print(minha_tv)
    except ValueError as err:
        print(err)


main()