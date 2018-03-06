import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class NavElement extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			children,
			onClick,
			title,
		} = this.props;
		return(
			<li
			  onClick={onClick}
			  style={styles.default}
			  title={title}
			>
			{children}	
			</li>
		);

	}
}

const styles = {
	default: {
		background: 'none',
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		listStyleType: 'none',
		padding: '5px 10px',
		':hover': {
			 background: '#999ea8',
			 cursor: 'pointer',
		},
		':active': {
			background: '#999ea8',
		},
	},
}

NavElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Radium(NavElement);