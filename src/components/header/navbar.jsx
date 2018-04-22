import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import NavElement from './navElement.jsx';
import Image from './../img/image.jsx';

class Nav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			children,
			title,
			style,
		} = this.props;
		return(
			<div style={[styles.navbar, style]}>
			  <Image alt='logo' isInlineImages={true} style={styles.logo} src='./../../images/logo.png' />
			  <NavElement title='Go to the home scree'>Home</NavElement>
			  <NavElement title='Create images by chosing an emotion'>Create Emotion</NavElement>
			  <NavElement title='Guess the emotions represented by images'>Guess the Emotion</NavElement>
			  <NavElement title='Check the top 10 players'>Ranklist</NavElement>
			</div>
		);

	}
}

const styles = {
	navbar: {
		background: `linear-gradient(0deg, #d2d4d8, #eaecef)`,
		borderRadius: '6px',
		border: 'none',
		display: 'inline-flex',
		fontSize: '16px',
		padding: '0px 15px',
		overflow: 'hidden',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},
	logo: {
		height: '100%',
		marginTop: '0px',
		marginBottom: '0px',
		marginRight: '5%',
		marginLeft: '2%',
		minHeight: '10px',
		minWidth: '10px',
		maxHeight: '40px',
		maxWidth: '40px',
		width: '60%',
	},
}

Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Radium(Nav);