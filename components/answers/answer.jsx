import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Button from './../button/button';

class Answer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			btnkind,
			style
		} = this.props;
		return(
			<button
			  {...this.props}
		      style={[styles[btnkind], style]}>
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
		margin: '10px',
		padding: '25px 15px',
		minHeight: '100px',
		minWidth: '100px',
		maxHeight: '100px',
		maxWidth: '170px',
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

	cancel: {
		background: `linear-gradient(0deg, #9b1717, #cc2020)`,
		borderRadius: '6px',
		border: 'none',
		color: '#f4f5f7',
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

Answer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  btnkind: PropTypes.oneOf([
    'cancel',
    'success',
    'default',
  ]),
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Radium(Answer);