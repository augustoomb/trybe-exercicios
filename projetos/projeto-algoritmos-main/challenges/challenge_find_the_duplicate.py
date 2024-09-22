from collections import Counter


def check_if_positive_number(arr):
    try:
        return all((n > 0) for n in arr)
    except TypeError:
        return False


def find_duplicate(nums):
    if nums is None or len(nums) < 2:
        return False
    elif check_if_positive_number(nums) is False:
        return False
    elif Counter(nums).most_common()[0][1] == 1:
        return False
    return Counter(nums).most_common()[0][0]


# nums = [1, 3, 4, 2, 5]
# print(find_duplicate(nums))
# find_duplicate(nums)
