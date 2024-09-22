from collections import Counter


class TrackOrders:
    def __init__(self):
        self._data = []

    # aqui deve expor a quantidade de estoque
    def __len__(self):
        return len(self._data)

    def __str__(self):
        return str(self._data)

    def add_new_order(self, customer, order, day):
        dict_order = {'customer': customer, 'order': order, 'day': day}
        self._data.append(dict_order)

    def get_most_ordered_dish_per_customer(self, customer):
        arr_orders = []
        for item in self._data:
            if item['customer'] == customer:
                arr_orders.append(item['order'])

        return Counter(arr_orders).most_common()[0][0]

    def get_all_dishes(self):
        local_set = set()
        for item in self._data:
            local_set.add(item['order'])

        return local_set

    def get_all_days(self):
        local_set = set()
        for item in self._data:
            local_set.add(item['day'])

        return local_set

    def get_never_ordered_per_customer(self, customer):
        set_dish = set()
        for item in self._data:
            if item['customer'] == customer:
                set_dish.add(item['order'])

        dish_never_ordered = self.get_all_dishes().difference(set_dish)

        return dish_never_ordered

    def get_days_never_visited_per_customer(self, customer):
        set_days = set()
        for item in self._data:
            if item['customer'] == customer:
                set_days.add(item['day'])

        day_never_ordered = self.get_all_days().difference(set_days)

        return day_never_ordered

    def get_busiest_day(self):
        days = []
        for item in self._data:
            days.append(item['day'])

        return Counter(days).most_common()[0][0]

    def get_least_busy_day(self):
        days = []
        for item in self._data:
            days.append(item['day'])

        return Counter(days).most_common()[-1][0]


if __name__ == "__main__":
    my_track_orders = TrackOrders()
    my_track_orders.add_new_order('joao', 'hamburguer', 'terça-feira')
    my_track_orders.add_new_order('joao', 'coxinha', 'segunda-feira')
    my_track_orders.add_new_order('jose', 'japa', 'segunda-feira')
    my_track_orders.add_new_order('joao', 'coxinha', 'sabado')
    my_track_orders.add_new_order('maria', 'pizza', 'sabado')
    print(my_track_orders.get_least_busy_day())
