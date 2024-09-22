# import pytest
from src.pre_built.sorting import sort_by

list_jobs = [
    {
        "date_posted": "2022-02-01",
        "max_salary": 30000,
        "min_salary": 10000,
    },
    {
        "date_posted": "2021-09-03",
        "max_salary": 50000,
        "min_salary": 20000,
    },
    {
        "date_posted": "2022-10-05",
        "max_salary": 90000,
        "min_salary": 50000,
    },
]


ordered_by_date = [
    {
        "date_posted": "2022-10-05",
        "max_salary": 90000,
        "min_salary": 50000,
    },
    {
        "date_posted": "2022-02-01",
        "max_salary": 30000,
        "min_salary": 10000,
    },
    {
        "date_posted": "2021-09-03",
        "max_salary": 50000,
        "min_salary": 20000,
    },
]

ordered_by_max_salary = [
    {
        "date_posted": "2022-10-05",
        "max_salary": 90000,
        "min_salary": 50000,
    },
    {
        "date_posted": "2021-09-03",
        "max_salary": 50000,
        "min_salary": 20000,
    },
    {
        "date_posted": "2022-02-01",
        "max_salary": 30000,
        "min_salary": 10000,
    },
]

ordered_by_min_salary = [
    {
        "date_posted": "2022-02-01",
        "max_salary": 30000,
        "min_salary": 10000,
    },
    {
        "date_posted": "2021-09-03",
        "max_salary": 50000,
        "min_salary": 20000,
    },
    {
        "date_posted": "2022-10-05",
        "max_salary": 90000,
        "min_salary": 50000,
    },
]


def test_sort_by_criteria():
    # with pytest.raises(ValueError):
    #     sort_by(list_jobs, "param_incor")

    sort_by(list_jobs, "date_posted")
    assert list_jobs == ordered_by_date

    sort_by(list_jobs, "max_salary")
    assert list_jobs == ordered_by_max_salary

    sort_by(list_jobs, "min_salary")
    assert list_jobs == ordered_by_min_salary
