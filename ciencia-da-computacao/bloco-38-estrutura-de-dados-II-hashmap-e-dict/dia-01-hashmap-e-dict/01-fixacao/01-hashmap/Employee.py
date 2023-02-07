from HashMap import HashMap

class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name
        


if __name__ == "__main__":
    employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(23))



    print(registry.get_value(10))
    registry.update_value(10, "name30")
    print(registry.get_value(10))
