# import pytest
from src.pre_built.counter import count_ocurrences


def test_counter():

    result = count_ocurrences("data/jobs.csv", "Python")

    assert type(result) == int
    assert result == 1639
