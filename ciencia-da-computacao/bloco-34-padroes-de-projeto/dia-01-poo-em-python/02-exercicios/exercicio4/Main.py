from LogEmTela import LogEmTela
from Log import Log

def main():
    meu_log_em_tela = LogEmTela()
    meu_log_em_tela.log("mensagem de teste LOG")

    meu_log = Log()
    meu_log.adicionar_manipulador(meu_log_em_tela)

    

main()