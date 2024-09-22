def study_schedule(permanence_period, target_time):
    try:
        contador = 0

        for item in permanence_period:
            if item[0] <= target_time <= item[1]:
                contador += 1

        return contador
    except TypeError:
        return None
