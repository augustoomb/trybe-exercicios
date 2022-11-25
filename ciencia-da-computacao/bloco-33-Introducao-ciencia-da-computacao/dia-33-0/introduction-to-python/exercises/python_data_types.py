def is_bool(value):
    return type(value) == bool


def is_int(value):
    return type(value) == int


def is_float(value):
    return type(value) == float


def is_string(value):
    return type(value) == str


def is_list(value):
    return type(value) == list


def is_tuple(value):
    return type(value) == tuple


def is_set(value):
    return type(value) == set


def is_dict(value):
    return type(value) == dict


def return_lower_case_string(word):
    return word.lower()


def append_element_in_list(element, input_list):
    input_list.append(element)
    return input_list


def remove_element_from_list(element, input_list):
    input_list.remove(element)
    return input_list


def create_new_key_value_in_dict(key, value, input_dict):
    input_dict[key] = value
    return input_dict


def delete_key_from_dict(key, input_dict):
    del input_dict[key]
    return input_dict


def add_element_to_set(element, input_set):
    input_set.add(element)
    return input_set


def remove_element_from_set(element, input_set):
    input_set.remove(element)
    return input_set
