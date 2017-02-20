var Greeter = React.createClass({
	render: function () {
		return React.createElement(
			"h1",
			null,
			"Hello React.createElement!"
		)
		/*return (
			<div>
				<h1>Hello Reactadd!</h1>
				<p>this is from the component</p>
			</div>
		);*/
	}
});

ReactDOM.render(
	<Greeter />,
	document.getElementById('app')
);