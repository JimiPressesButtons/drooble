import React from 'react';

const Profile = React.createClass({
	render(){
		return(
			<div className='profile-box'>
				<img className="profile-pic" src={require('../assets/danny-boi.jpg')} alt="hell no"/>
				<h4><strong>James Stitts</strong></h4>
				<div className='profile-title'><button onClick=""id="nothing">redux project</button></div>
				<div className='profile-info'>
					&nbsp;&nbsp;&nbsp;&nbsp;I'm the process of creating a lot of fun logos and designs in sketch so this can be used as an actual subsitute for dribbble but until I'll just have some pictures from my Instagram.
				</div>
				<div className='profile-info'>
					<strong>Purpose:</strong> to learn me some redux. <br /><br />
					<strong>Technologies:</strong> React, Redux, CSSGrid, Webpack, React Router v3. <br /><br />
					<strong>Difficulties:</strong> I think the original problems I had with Redux was that I was use to seeing the logic alongside the elements it were modifying. And so because I like my workspaces to be an extension of my short-term memory, it was  difficult to find any rhythm. <br /><br />
					<strong>Reflections:</strong> Despite the size of the app, it still feels overwhelming trying to parse out how the app should work from a top down view. What I find so captivating about Redux once you get architecture laid out, the path becomes really clear and it then becomes just a matter of putting one foot infront of the other.<br /><br />
					<strong>Conclusion:</strong> This certainly is <i>not</i> the most complicated app, however, it was a great introduction to using Redux and actually seeing the power of CSSGrid.

				</div>
				<div>

				 	<a href='https://www.google.com'><svg className="svg"fill="#444444" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				    <path d="M0 0h24v24H0z" fill="none"/>
				    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
				</svg> jimimadeawebsite.com</a>
				</div>
			</div>	
		)
	}
});

export default Profile