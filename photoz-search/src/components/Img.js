import React from 'react';

const Img = props =>
	<li>
		<a href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
	</li>;

export default Img;