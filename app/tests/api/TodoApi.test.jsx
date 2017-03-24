var expect = require('expect');

var TodoApi = require('TodoApi');


describe('TodoApi', () => {
    var nameLocalStorageVar = 'react-todos';
    beforeEach(() => {
        localStorage.removeItem(nameLocalStorageVar);
    });

    it('should exist', () => {
        expect(TodoApi).toExist();
    });


    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [
                {
                    id: 100,
                    text: 'test all files',
                    completed: false
                }
            ];
            TodoApi.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem(nameLocalStorageVar));
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = { a: 'b' };
            TodoApi.setTodos(badTodos);
            expect(localStorage.getItem(nameLocalStorageVar)).toEqual(null);
        });
    });

    describe('getTodos', () => {

        it('should return empty array for bad localstorage data', () => {
            var actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in localstorage', () => {

            var todos = [
                {
                    id: 100,
                    text: 'test all files',
                    completed: false
                }
            ];

            localStorage.setItem(nameLocalStorageVar, JSON.stringify(todos));
            var actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual(todos);
        });

    });


    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'Some text here',
                completed: true
            },
            {
                id: 2,
                text: 'Other text here',
                completed: false
            },
            {
                id: 3,
                text: 'Some text here',
                completed: true
            }
        ];

        it('should return all items if showCompleted is true', () => {
            var filterTodos = TodoApi.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        });

        it('should return non-completed todos when showCompleted is false', () => {
            var filterTodos = TodoApi.filterTodos(todos, false, '');
            expect(filterTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filterTodos = TodoApi.filterTodos(todos, true, '');
            expect(filterTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filterTodos = TodoApi.filterTodos(todos, true, 'some');
            expect(filterTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            var filterTodos = TodoApi.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        });
    });

});