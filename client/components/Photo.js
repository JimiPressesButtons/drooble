import React from 'react';
import {Link} from 'react-router';

const Photo = React.createClass({
	render(){
		const {post, i, comments } = this.props;
		console.log(this.props);
		return(
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} className="grid-photo" />
					</Link>
				</div>

				<figcaption>
					<div className="control-buttons">
						<button onClick={this.props.addLike.bind(null, i)} className="likes">&hearts; {post.likes}</button>
						<Link to={`/view/${post.code}`}>
							<button className="button">
							<svg fill="#BBBBBB" height="20" viewBox="0 0 24 24" width="20">
							    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
							    <path d="M0 0h24v24H0z" fill="none"/>
							</svg>
							{comments[post.code] ? comments[post.code].length : 0 }
							</button>
						</Link>
					</div>
				</figcaption>
			</figure>
		)
	}
});

export default Photo;

//line 28
							// <svg fill="#BBBBBB" height="20" viewBox="0 0 22 22" width="24" xmlns="http://www.w3.org/2000/svg">
							//     <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
							//     <path d="M0 0h24v24H0z" fill="none"/>
							// </svg> 