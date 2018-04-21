import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Button from './../button/button.jsx';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import Nav from './navbar.jsx';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div style={styles.displayStyle}>
			  <Nav style={styles.default}></Nav>
			  <Button
				onClick={console.log('clicked')}
				btnkind="transperant"
				title='Log out of the application'>
				 Log out <FaArrowCircleRight/>
		      </Button>
			</div>
		);

	}
}

const styles = {
	default: {
		width: '85%',
	},
	displayStyle: {
		display: 'flex',
	},
}

export default Radium(Header);