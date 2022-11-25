def append_each_letter_of_the_word_in_a_list(word):
    charactersList = []
    for letter in word:
        charactersList.append(letter)
    return charactersList


def return_index_of_the_uppercase_letter(word):
    for letter in word:
        if letter == letter.upper():
            return word.index(letter)


def return_element_from_list_that_is_string(input_list):
    for item in input_list:
        if type(item) == str:
            return item
