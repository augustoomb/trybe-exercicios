import time

def check_sum(numbers, target):
    left_pointer = 0
    right_pointer = len(numbers) - 1

    while left_pointer < right_pointer:
        test_sum = numbers[left_pointer] + numbers[right_pointer]
        if test_sum == target:
            return print("soma encontrada!")
        if test_sum < target:
            left_pointer += 1
        else:
            right_pointer -= 1

    return False

def check_sum_quad(numbers, target):
    for index, num in enumerate(numbers):  # N = len(numbers)
        for num2 in numbers[index + 1:]:  # N
            if num + num2 == target:
                return print("soma encontrada!")
    return False


if __name__ == "__main__":
    # 5000 números
    five_thousand = list(range(0,5000))
    # 10.000 números
    ten_thousand = list(range(0,10000))
    # 20.000 números
    twenty_thousand = list(range(0,20000))

    print('\n')
    start_time = time.time()
    check_sum(five_thousand, 9900)
    print(f"N -> 5 mil: {(time.time() - start_time)} segundos")
    start_time = time.time()
    check_sum_quad(five_thousand, 9900)
    print(f"N² -> 5 mil: {(time.time() - start_time)} segundos")
    print('\n')
    start_time = time.time()
    check_sum(ten_thousand, 19000)
    print(f"N -> 10 mil: {(time.time() - start_time)} segundos")
    start_time = time.time()
    check_sum_quad(ten_thousand, 19000)
    print(f"N² -> 10 mil: {(time.time() - start_time)} segundos")
    print('\n')
    start_time = time.time()
    check_sum(twenty_thousand, 39000)
    print(f"N -> 20 mil: {(time.time() - start_time)} segundos")
    start_time = time.time()
    check_sum_quad(twenty_thousand, 39000)
    print(f"N² -> 20 mil: {(time.time() - start_time)} segundos")


# ================================================

def mais_que_25_porcent_quad(array):
    for elem in array:
        contador = 0
        numero_desejado = len(array) // 4

        for elem2 in array:
            if elem == elem2:
                contador += 1
        
        if contador > numero_desejado:
            return elem
        
    return -1


