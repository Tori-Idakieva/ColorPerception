import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Button from './../button/button.jsx';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import Image from './../img/image.jsx'
import Input from './../input/input.jsx';

class LoginForm extends React.Component {
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
				      title='Enter a valid username'
				      type="username"/>
				   </div>
				   <div>
				    <Input
				      label='Password:'
				      labelExists={true}
				      onClick={console.log('clicked')}
				      placeholder="******"
				      style={styles.inputForm}
				      title='Enter a valid password'
				      type="password"/>
				   </div>
				  <div style={styles.buttonStyle}>
					  <Button
						onClick={console.log('clicked')}
						btnkind="submit"
						title='Log in with your username and password'>
						 Login <FaArrowCircleRight/>
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
}

export default Radium(LoginForm);