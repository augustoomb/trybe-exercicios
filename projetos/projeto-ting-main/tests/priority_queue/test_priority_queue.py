from ting_file_management.priority_queue import PriorityQueue
import pytest


def test_basic_priority_queueing():
    my_priority_queue = PriorityQueue()

    obj_test1 = {
        "nome_do_arquivo": "statics/arquivo_teste.txt",
        "qtd_linhas": 3
    }

    obj_test2 = {
        "nome_do_arquivo": "statics/arquivo_teste2.txt",
        "qtd_linhas": 4
    }

    obj_test3 = {
        "nome_do_arquivo": "statics/arquivo_teste3.txt",
        "qtd_linhas": 7
    }

    obj_test4 = {
        "nome_do_arquivo": "statics/arquivo_teste4.txt",
        "qtd_linhas": 9
    }

    assert my_priority_queue.is_priority(obj_test1) is True
    assert my_priority_queue.is_priority(obj_test3) is False

    my_priority_queue.enqueue(obj_test1)
    my_priority_queue.enqueue(obj_test2)
    my_priority_queue.enqueue(obj_test3)
    my_priority_queue.enqueue(obj_test4)

    assert len(my_priority_queue.regular_priority) == 2
    assert len(my_priority_queue.high_priority) == 2

    assert my_priority_queue.search(0) == obj_test1
    assert my_priority_queue.search(3) == obj_test4

    with pytest.raises(IndexError):
        my_priority_queue.search(999)

    my_priority_queue.dequeue()
    assert len(my_priority_queue.high_priority) == 1
