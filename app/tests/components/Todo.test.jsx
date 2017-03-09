var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');


describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop when id on click', () => {
        var todoMock = {
            id: 199,
            text: 'do homework',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoMock} onToggle={spy} />);

        var $el = $(ReactDOM.findDOMNode(todo));
        var $checkbox = $el[0];

        TestUtils.Simulate.click($checkbox);

        expect(spy).toHaveBeenCalledWith(todoMock.id);

    });
});