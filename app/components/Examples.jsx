var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
	return (
		<div>
			<h1 className='text-center'>Examples</h1>
			<p>Here are a few example location to try out!</p>
			<ol>
				<li>
					<Link to='/?location=Saltillo'>Saltillo</Link>
				</li>
				<li>
					<Link to='/?location=Monterrey'>Monterrey</Link>
				</li>
			</ol>
		</div>
	);
}
module.exports = Examples;