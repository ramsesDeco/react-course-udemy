var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApi = require('TodoApi');
var uuid = require('node-uuid');
var moment = require('moment');


var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoApi.getTodos()
		};
	},
	componentDidUpdate: function () {
		TodoApi.setTodos(this.state.todos);
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	},
	handleToggle: function (id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			return todo;
		});
		this.setState({ todos: updatedTodos });
	},
	render: function () {
		var { todos, searchText, showCompleted } = this.state;

		var filterTodos = TodoApi.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={filterTodos} searchText={searchText} showCompleted={showCompleted} onToggle={this.handleToggle} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});
module.exports = TodoApp;