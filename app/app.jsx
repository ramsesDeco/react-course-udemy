var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory, browserHistory } = require('react-router');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Timer}></IndexRoute>
			<Route path="countdown" component={Countdown}></Route>
		</Route>
	</Router>,
	document.getElementById('app')
);