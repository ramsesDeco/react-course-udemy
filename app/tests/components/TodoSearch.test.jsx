var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch when data changes', () => {
        var searchText = 'Check mail';
        var showCompleted = true;
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

        var $el = $(ReactDOM.findDOMNode(todoSearch));

        todoSearch.refs.searchText.value = searchText;
        todoSearch.refs.showCompleted.checked = showCompleted;

        TestUtils.Simulate.change($el.find('input')[0]);

        expect(spy).toHaveBeenCalledWith(showCompleted, searchText);
    });

});