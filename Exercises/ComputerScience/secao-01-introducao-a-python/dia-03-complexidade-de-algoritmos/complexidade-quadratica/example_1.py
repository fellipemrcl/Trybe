import timeit


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            result.append(number1 * number2)
            number_of_iterations += 1

    return result, number_of_iterations


meu_array = [1, 2, 3, 4, 5]

# Use timeit para medir o tempo de execução
tempo_decorrido = timeit.timeit(
    "multiply_arrays(meu_array, meu_array)", globals=globals(), number=1
)

print(f"Tempo decorrido: {tempo_decorrido} segundos")
