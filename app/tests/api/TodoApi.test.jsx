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

});