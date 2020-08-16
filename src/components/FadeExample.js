import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';

const animateList = [1, 2, 3, 4, 5];

export default class ReactReveal extends Component {
	render() {
		return(
			<Fragment>
			<div className="flex-container">
				{animateList.map((item,key) => (
					<div style = {styles.block} key={key}>
						<Fade top>
							<h1 style={styles.title}>{`block ${item}`}</h1> 
						</Fade>
					</div>
				))}
			</div>
			</Fragment>
		);
	}
}
//export default FadeExample;

const styles = {
	block: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		background: '#000',
		borderBottom: '1px solid rgba(255,255,255,.2)',
	},
	title: {
		textAlign: 'center',
		fontSize: 100,
		color: '#fff',
		fontFamily: 'Lato, sans-serif',
		fontWeight: 100,
	},
};