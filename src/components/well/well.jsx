import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class Well extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			children,
			style
		} = this.props;
		return(
			<div style={[styles.container, style]}>
			  <div style={[styles.box, style]}>
                {children}
			  </div>
			</div>
		);

	}
}

const styles = {
	box: {
	    border: '1px solid #86acac',
	    borderRadius: '15px',
	    background: '#d1e0e0',
	    width: '60%',
	    wordBreak: 'break-word',
	},
	container: {
	    alignItems: 'center',
	    boxSizing: 'border-box',
	    display: 'flex',
	    flexDirection: 'column',
	    height: '100%',
	    left: '0px',
	    overflow: 'auto',
	    padding: '6% 0px',
	    top: '0px',
	    width: '100%',
	},
}

export default Radium(Well);