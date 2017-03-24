var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'test text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [] });
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);

        expect(todoApp.state.todos[0].createdAt).toBeA('number');


    });


    it('should toggle completed value when handleToggle called', () => {
        var todoMock = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [todoMock] });

        // check that todos first item has completed vale of falsev
        expect(todoApp.state.todos[0].completed).toBe(false);

        // call handleToggle with 11
        todoApp.handleToggle(todoMock.id);

        expect(todoApp.state.todos[0].completed).toBe(true);

        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // Test that when toogle from true to false, completedAt get removed
     it('should toggle todo from completed to incompleted', () => {
        var todoMock = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: 123
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({ todos: [todoMock] });
        expect(todoApp.state.todos[0].completed).toBe(true);
        todoApp.handleToggle(todoMock.id);
        expect(todoApp.state.todos[0].completed).toBe(false);
        expect(todoApp.state.todos[0].completedAt).toNotExist();
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