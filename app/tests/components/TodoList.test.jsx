var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    describe('render', () => {
        it('should render one Todo component for each todo item', () => {
            var todos = [
                { id: 1, text: 'example' }
            ];
            var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
            var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

            expect(todosComponents.length).toBe(todos.length);
        });
    });
});