from src.insights.jobs import read

# from jobs import read
from typing import Union, List, Dict

# import sys


def get_max_salary(path: str) -> int:
    data = read(path)

    set_salary = set()

    for item_data in data:
        if item_data["max_salary"].isnumeric():
            set_salary.add(int(item_data["max_salary"]))

    return max(set_salary)

    # raise NotImplementedError


def get_min_salary(path: str) -> int:
    data = read(path)

    set_salary = set()

    for item_data in data:
        if item_data["min_salary"].isnumeric():
            set_salary.add(int(item_data["min_salary"]))

    return min(set_salary)

    # raise NotImplementedError


def check_if_is_number(value):
    if type(value) == int or type(value) == float:
        return True
    if type(value) == str:
        return value.isnumeric()


def matches_salary_range(job: Dict, salary: Union[int, str]) -> bool:
    if ("min_salary" not in job) or ("max_salary" not in job):
        raise ValueError("chaves min_salary e max_salary devem ser informadas")

    if not check_if_is_number(salary):
        raise ValueError("salary deve ser número")

    if (not check_if_is_number(job["min_salary"])) or (
        not check_if_is_number(job["max_salary"])
    ):
        raise ValueError("min_salary e max_salary devem ser números")

    # if job["min_salary"] > job["max_salary"]:
    if int(job["min_salary"]) > int(job["max_salary"]):
        raise ValueError("min_salary deve ser menor que max_salary")

    return int(job["min_salary"]) <= int(salary) <= int(job["max_salary"])

    # raise NotImplementedError


def filter_by_salary_range(
    jobs: List[dict], salary: Union[str, int]
) -> List[Dict]:

    filtered = []

    for job in jobs:
        try:
            result = matches_salary_range(job, salary)
            if result:
                filtered.append(job)

        except ValueError:
            pass

    return filtered


# raise NotImplementedError


# def main():

#     jobs = [
#         {"max_salary": 0, "min_salary": 10},  # posição 0
#         {"max_salary": 10, "min_salary": 100},  # posição 1
#         {"max_salary": 10000, "min_salary": 200},  # posição 2
#         {"max_salary": 15000, "min_salary": 0},  # posição 3
#         {"max_salary": 1500, "min_salary": 0},  # posição 4
#         {"max_salary": -1, "min_salary": 10},  # posição 5
#     ]

#     # salaries = [0, 1, 5, 1000, 2000, -1, -2, None, "", [], {}, lambda: 1]

#     filter_by_salary_range(jobs, 0)


# main()


# ----------------------
# def filter_by_salary_range(
#     jobs: List[dict], salary: Union[str, int]
# ) -> List[Dict]:

#     filtered = []

#     for job in jobs:
#         try:
#             result = matches_salary_range(job, salary)
#             if result:
#                 filtered.append(job)

#         except ValueError as err:
#             if str(err) == "salary deve ser número":
#                 sys.exit(1)
#             else:
#                 pass

#     return filtered
