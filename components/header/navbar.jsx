import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import NavElement from './navElement';

class Nav extends React.Component {
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
			<div style={styles.navbar}>
			  <NavElement>Home</NavElement>
			  <NavElement>Create Emotion</NavElement>
			  <NavElement>Guess the Emotion</NavElement>
			  <NavElement>Ranklist</NavElement>
			</div>
		);

	}
}

const styles = {
	navbar: {
		background: `linear-gradient(0deg, #d2d4d8, #eaecef)`,
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		padding: '9px 15px',
		overflow: 'hidden',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},
}

Nav.propTypes = {
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

export default Radium(Nav);