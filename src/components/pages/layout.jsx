import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Header from './../header/header.jsx';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div style={styles.displayStyle}>
			  <Header/>
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

export default Radium(Layout);