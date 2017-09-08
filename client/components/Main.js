import React from 'react';
import { Link } from 'react-router';
import Profile from './Profile';

const Main = React.createClass({
	render(){
					console.log(this.props);

		return(
			<div className='main'>
				<div className='header'>
					<h1>
						<Link to="/">drooble</Link>
					</h1>
				</div>
				<Profile />
				{React.cloneElement(this.props.children, this.props)}
				<div className='footer'>
				</div>
			</div>
		)
	}
});

export default Main;