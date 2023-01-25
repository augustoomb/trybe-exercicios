# IMPLEMENTAR O FATORIAL DE N

def fatorial(n):
    if n == 1:
        return 1
    else:
        return n * fatorial(n - 1)

print(fatorial(7))