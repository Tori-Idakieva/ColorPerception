import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class Checkbox extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			disabled,
			onClick,
			style,
			title,
		} = this.props;
		return(
			<input
			  disabled={disabled}
			  onClick={onClick}
			  style={[styles.default,style]}
			  title={title}
			  type={'checkbox'}
			>	
			</input>
		);

	}
}

const styles = {
	default: {
		background: `linear-gradient(0deg, #aaafb7, #eaecef)`,
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		margin: '5px',
		padding: '5px 10px',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default Radium(Checkbox);