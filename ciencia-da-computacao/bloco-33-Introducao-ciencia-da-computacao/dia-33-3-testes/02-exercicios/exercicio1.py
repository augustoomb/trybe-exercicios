def is_divisible_3(n):
  return n % 3 == 0

def is_divisible_5(n):
  return n % 5 == 0

def numbers(n):
  list_numbers = []
  for index in range(1, n+1):
    if is_divisible_3(index) and is_divisible_5(n):
      list_numbers.append('FizzBuzz')
    elif is_divisible_3(index):
      list_numbers.append('Fizz')
    elif is_divisible_5(index):
      list_numbers.append('Buzz')
    else:
      list_numbers.append(index)
  return list_numbers
    

print(numbers(10))
