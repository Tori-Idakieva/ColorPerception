import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			btnkind,
			children,
			disabled,
			onClick,
			title,
		} = this.props;
		return(
			<button
			  btnkind={btnkind}
			  disabled={disabled}
			  onClick={onClick}
			  style={styles[btnkind]}
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
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},

	transperant: {
		background: 'none',
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		padding: '5px 10px',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},

	submit: {
		background: `linear-gradient(0deg, #8196c1, #6679a0)`,
		borderRadius: '6px',
		border: 'none',
		color: '#f4f5f7',
		fontSize: '16px',
		padding: '5px 10px',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},

	success: {
		background: `linear-gradient(0deg, #547c09, #6ca845)`,
		borderRadius: '6px',
		border: 'none',
		color: '#f4f5f7',
		fontSize: '16px',
		padding: '5px 10px',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},

	cancel: {
		background: `linear-gradient(0deg, #9b1717, #cc2020)`,
		borderRadius: '6px',
		border: 'none',
		color: '#f4f5f7',
		fontSize: '16px',
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

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  btnkind: PropTypes.oneOf([
    'cancel',
    'submit',
    'success',
    'default',
    'transperant',
  ]),
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Radium(Button);