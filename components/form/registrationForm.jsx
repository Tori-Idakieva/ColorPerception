import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Button from './../button/button';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import Image from './../img/image'
import Input from './../input/input';

class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div style={styles.container}>
			  <div style={styles.box}>
                <div style={styles.header}>
                  <Image alt='logo' style={styles.logo} src='./logo.png' />
                </div>
                <div style={styles.content}>
                  <div>
				  <Input
				      label='Username:'
				      labelExists={true}
				      onClick={console.log('clicked')}
				      placeholder="Enter username"
				      style={styles.marginTop}
				      title='Enter a new username'
				      type="username"/>
				   </div>
				   <div>
				    <Input
				      label='Password:'
				      labelExists={true}
				      onClick={console.log('clicked')}
				      placeholder="******"
				      style={styles.inputForm}
				      title='Enter a new password'
				      type="password"/>
				   </div>
                  <div>
				  <Input
				      label='Email:'
				      labelExists={true}
				      onClick={console.log('clicked')}
				      placeholder="Enter email"
				      style={styles.emailInput}
				      title='abc@example.com'
				      type="email"/>
				   </div>
				  <div style={styles.buttonStyle}>
					  <Button
						onClick={console.log('clicked')}
						btnkind="submit"
						title='Sign up as a new user'>
						 Register <FaArrowCircleRight/>
				      </Button>
			      </div>
			    </div>
			  </div>
			</div>
		);

	}
}

const styles = {
	default: {
		width: '85%',
	},
	box: {
	    border: '1px solid #86acac',
	    borderRadius: '15px',
	    width: '350px',
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
	header: {
	    width: '100%',
	    background: '#d1e0e0',
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center',
	    flexDirection: 'column',
	    padding: '5px',
	    boxSizing: 'border-box',
	    borderTopLeftRadius: '10px',
	    borderTopRightRadius: '10px',
	},
	logo: {
		height: '10%',
		margin: '0px',
		minHeight: '80px',
		minWidth: '80px',
		maxHeight: '100px',
		maxWidth: '100px',
		width: '10%',
	},
	inputForm: {
		margin: '4px',
	},
	marginTop: {
		marginTop: '6%',
	},
	buttonStyle: {
		display: 'grid',
		marginTop: '15px',
	},
	emailInput: {
		marginTop: '2px',
		marginBottom: '4px',
		marginRight: '4px',
		marginLeft: '7.5%',
	},
}

export default Radium(RegistrationForm);