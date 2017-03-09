var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				},
				{
					id: 3,
					text: 'Leave mail on porch'
				},
				{
					id: 4,
					text: 'Play videogames'
				}
			]
		};
	},
	handleSearch: function (showCompleted, searchText) {
		console.log(showCompleted, searchText);

		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	handleAddTodo: function (text) {
		alert(text);
	},
	render: function () {
		var { todos, searchText, showCompleted } = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} searchText={searchText} showCompleted={showCompleted} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});
module.exports = TodoApp;