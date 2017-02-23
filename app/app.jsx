var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Router history={hasHistory}>
		<Route path="/" component={Main}>
			<Route path="About" component={About} />
			<IndexRoute component={Weather} />
			<Route path="Examples" component={Examples} />
		</Route>

	</Router>,
	document.getElementById('app')
);