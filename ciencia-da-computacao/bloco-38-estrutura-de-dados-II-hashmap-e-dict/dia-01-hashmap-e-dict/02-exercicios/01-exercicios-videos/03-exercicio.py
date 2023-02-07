# QUAIS ELEMENTOS DA LISTA TAMBÉM OCORREM NA LISTA B?

# OU SEJA, QUAL A INTERSECÇÃO ENTRE AS LISTAS

listA = [1, 2, 3, 4, 5, 6]
listB = [4, 5, 6, 7, 8, 9]

# resposta: [4, 5, 6]

def intersection(listA, listB):
    seen_in_a = {}

    for item in listA:
        if item not in seen_in_a:
            seen_in_a[item] = True

    ans = []
    for item in listB:
        if item in seen_in_a:
            ans.append(item)

    return ans


if __name__ == "__main__":
    print(intersection(listA, listB))
