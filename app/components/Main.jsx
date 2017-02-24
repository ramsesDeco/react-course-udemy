var React = require('react');

var Nav = require('Nav');

var Main = (props) => {
	return (
		<div>
			<Nav />
			<div className="row">
				<div className="column small-centered small-12 medium-6 large-4">
					{props.children}
				</div>
			</div>
		</div>
	);
}
module.exports = Main;