import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';
import { validateInput } from './../validate';

class InputField extends React.Component {
	constructor(props) {
		super(props);

		this.onBlur = this.onBlur.bind(this);
		this.onChange = this.onChange.bind(this);
		this.errorMessage = this.errorMessage.bind(this);
		this.errorTitle = this.errorTitle.bind(this);
		this.state = {value: '', invalid: false};
	}

	onChange(event) {
		this.setState({value: event.target.value});
	}

	onBlur() {
		 const invalid = validateInput(this.props.type, this.state.value);
		 this.setState({invalid: invalid});
	}

	errorMessage(type) {
		if (type === 'email'){
			return 'Please enter a valid email';
		}
		else if (type === 'password') {
			return 'Please enter a valid password';
		}
		else if (type === 'username') {
			return 'Please enter a valid username';
		}
		else {
			return 'Ops! Something has gone wrong. Contact admin';
		}
	}

	errorTitle(type) {
		if (type === 'email'){
			return 'Email should be of form: abc@example.com';
		}
		else if (type === 'password') {
			return `Password should be between 4 and 16 characters.
Password can contain lowercase and uppercase letters,
numbers and '_' or '-' but no other symbols.`;
		}
		else if (type === 'username') {
			return `Password should be between 4 and 20 characters.
Password can contain lowercase and uppercase letters,
numbers and '_' or '-' but no other symbols.`;
		}
		else {
			return 'Ops! Something has gone wrong. Contact admin';
		}
	}

	render() {
		const {
			children,
			disabled,
			label,
			labelExists,
			name,
			onClick,
			placeholder,
			style,
			title,
			type,
		} = this.props;
		return(
			<div style={styles.divStyle}>
			    {labelExists ? <label style={styles.labeled}>{label}</label> : undefined}
				<input
				  disabled={disabled}
				  invalid={this.state.invalid}
				  name={name}
				  onBlur={this.onBlur}
				  onClick={onClick}
				  onChange={this.onChange}
				  placeholder={placeholder}
				  style={this.state.invalid ? [styles.invalid, style] : [styles.base, style]}
				  title={title}
				  type={type}
				  value={this.state.value}
				/>
				{children}
				{this.state.invalid ?
				 <div
				    style={styles.errorMessage} 
					title={this.errorTitle(type)}>
					{this.errorMessage(type)}
				 </div> : undefined}
			</div>
		);

	}
}

const styles = {
	base: {
		border: ' 1px solid #4b5154',
		borderRadius: '2px',
		padding: '4px 4px',
		':focus': {
			border: '1px solid #9cc3d1',
			boxShadow: `0px 1px 4px 1px #bfecfc`,
			outline: 'none',
		},
	},
	divStyle: {
		display: 'inline',
		margin: '0px',
		width: '10%',
	},
	invalid: {
		border: ' 1px solid #9b1717',
		borderRadius: '2px',
		boxShadow: '0px 1px 4px 1px #c93434',
		outline: 'none',
		padding: '4px 4px',
	},
	labeled: {
		display: 'inline-block',
		marginTop: '5px',
		marginBottom: '5px',
		marginRight: '10px',
		marginLeft: '10%',
	},
	errorMessage: {
		color: '#9b1717',
		marginLeft: '10%',
	},
}

InputField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  labelExists: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Radium(InputField);