import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Button from './../button/button';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import Input from './../input/input';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
			  <Input 
			      onClick={console.log('clicked')}
			      placeholder="Enter username"
			      type="text"/>
			  <Input
			      onClick={console.log('clicked')}
			      placeholder="******"
			      type="password"/>
			  <Button
				onClick={console.log('clicked')}
				btnkind="submit"
				title='Log in with your username and password'>
				 Login <FaArrowCircleRight/>
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

LoginForm.propTypes = {
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

export default Radium(LoginForm);