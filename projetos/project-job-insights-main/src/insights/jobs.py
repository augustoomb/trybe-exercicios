import csv
from functools import lru_cache
from typing import List, Dict

# requisito 1
# https://courses.cs.washington.edu/courses/cse140/13wi/csv-parsing.html


@lru_cache
def read(path: str) -> List[Dict]:
    with open(path, encoding="utf-8") as file:
        content = csv.DictReader(file, delimiter=",", quotechar='"')

        list_dict = []

        for item in content:
            list_dict.append(item)

        return list_dict

    raise NotImplementedError


def get_unique_job_types(path: str) -> List[str]:
    data = read(path)

    set_job_type = set()
    list_job_type = []

    # salvar para um conjunto(set), pois ele ignora dados repetidos:
    for item_data in data:
        set_job_type.add(item_data["job_type"])

    # movendo do set para uma lista conforme solicitado
    for item_job_type in set_job_type:
        list_job_type.append(item_job_type)

    return list_job_type

    # raise NotImplementedError


def filter_by_job_type(jobs: List[Dict], job_type: str) -> List[Dict]:
    # for job in jobs:
    #     if(job["job_type"] == job_type)

    filtered_jobs = [job for job in jobs if (job["job_type"] == job_type)]

    return filtered_jobs

    # raise NotImplementedError


# def main():
#     #     # # requisito 1: utilização:
#     #     # print(read("../../tests/mocks/jobs.csv"))

#     #     # requisito 2: utilização
#     #     # print(get_unique_job_types("../../tests/mocks/jobs.csv"))

#     # requisito 6: utilização
#     # print(
#     #     filter_by_job_type([], "trainee")
#     # )


# main()
