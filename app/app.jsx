var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
	<Router history={hasHistory}>
		<Route path="/" component={Main}>

		</Route>
	</Router>,
	document.getElementById('app')
);