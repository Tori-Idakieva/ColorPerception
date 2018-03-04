import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class InputField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			children,
			disabled,
			onClick,
			title,
		} = this.props;
		return(
			<input
			  btnKind={btnKind}
			  disabled={disabled}
			  onClick={onClick}
			  style={styles.base}
			  title={title}
			>
			{children}	
			</input>
		);

	}
}

const styles = {
	base: {
		background: `linear-gradient(0deg, #aaafb7, #eaecef)`,
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		padding: '5px 10px',
	},
}

export default Radium(InputField);