import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			btnKind,
			children,
			disabled,
			onClick,
			title,
		} = this.props;
		return(
			<button
			  btnKind={btnKind}
			  disabled={disabled}
			  onClick={onClick}
			  style={styles[btnKind]}
			  title={title}
			>
			{children}	
			</button>
		);

	}
}

const styles = {
	default: {
		background: `linear-gradient(0deg, #aaafb7, #eaecef)`,
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		padding: '5px 10px',
	},

	primary: {
		background: `linear-gradient(0deg, #8196c1, #6679a0)`,
		borderRadius: '6px',
		border: 'none',
		color: '#f4f5f7',
		fontSize: '16px',
		padding: '5px 10px',
	},

	success: {
		background: `linear-gradient(0deg, #547c09, #6ca845)`,
		borderRadius: '6px',
		border: 'none',
		color: '#f4f5f7',
		fontSize: '16px',
		padding: '5px 10px',
	},

	cancel: {
		background: `linear-gradient(0deg, #9b1717, #cc2020)`,
		borderRadius: '6px',
		border: 'none',
		color: '#f4f5f7',
		fontSize: '16px',
		padding: '5px 10px',
	},
}

export default Radium(Button);