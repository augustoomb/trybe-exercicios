def count_ocurrences(path: str, word: str) -> int:
    file = open(path, "r")
    read_data = file.read()
    word_count = read_data.lower().count(word.lower())
    return word_count


# def main():
#     print(count_ocurrences("../../data/jobs.csv", "Python"))


# main()
