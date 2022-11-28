restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# filtrando usando for e if (normal):


def my_filter():
    filtered_restaurants = []
    min_rating = 3.0
    for restaurant in restaurants:
        if restaurant["nota"] > min_rating:
            filtered_restaurants.append(restaurant)
    return filtered_restaurants

# print(my_filter())

# ----------
# filtrando usando Compreensão de lista (list comprehension):

# primeira coisa escrita dentro do array é o que vou salvar dentro dele
# ou seja, na função abaixo, o "restaurant" escrito primeiro é o mesmo
# que estou usando no for. Só significa que é ele(e apenas ele)  que vou salvar no array


def my_filter_with_list_comprehension():
    min_rating = 3.0
    filtered_restaurants = [restaurant
                            for restaurant in restaurants
                            if restaurant["nota"] > min_rating]
    return filtered_restaurants


def list_comprehension_strings():
    names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
    new_names_list = [name for name in names_list if 'a' in name]
    return new_names_list


def list_comprehension_numbers():
    quadrados = [x*x for x in range(11)]
    return quadrados


print(list_comprehension_numbers())
