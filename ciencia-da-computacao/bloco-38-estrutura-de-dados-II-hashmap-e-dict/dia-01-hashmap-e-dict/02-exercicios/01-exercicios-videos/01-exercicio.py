# ENCONTRE O NÚMERO MAIS FREQUENTE. SE HOUVER EMPATE, RETORNE QUALQUER UM.

nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]

def count(nums):
    count = {}
    most_frequent = nums[0]

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        if count[num] > count[most_frequent]:
            most_frequent = num

    return most_frequent


if __name__ == "__main__":
    print(count(nums))