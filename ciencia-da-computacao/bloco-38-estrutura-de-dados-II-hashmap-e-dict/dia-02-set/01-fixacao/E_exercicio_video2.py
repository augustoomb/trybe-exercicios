# RECEBA UMA LISTA DE NUMEROS QUE REPRESENTEM VÁRIAS JOGADAS DE UM DADO DE 6 LADOS

# SUA MISSÃO É COMBINAR AS JOGADAS QUE SOMAM 7.
# OU SEJA, DESCUBRA TODAS AS DUPLAS QUE É POSSÍVEL FORMAR QUE SOMAM 7

# CADA JOGADA SÓ PODE SER COMBINADA UMA ÚNICA VEZ COM OUTRA DUPLA.


def get_seven(rolls):
    seen_before = set()
    lucky_rolls = []

    for roll in rolls:
        if 7-roll in seen_before: # aqui é uma subtração, de 7 menos o numero(roll)
            lucky_rolls.append((7-roll, roll))
            seen_before.discard(7-roll)
        else:
            seen_before.add(roll)


if __name__ == "__main__":
    rolls = [5, 2, 1, 3, 2, 6, 1, 4, 2, 6, 3, 1]

    print(get_seven(rolls))