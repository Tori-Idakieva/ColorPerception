import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';
import { validateInput } from './../validate';

class InputField extends React.Component {
	constructor(props) {
		super(props);

		this.onBlur = this.onBlur.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state = {value: '', invalid: false};
	}

	onChange(event) {
		this.setState({value: event.target.value});
	}

	onBlur() {
		 const invalid = validateInput(this.props.type, this.state.value);
		 this.setState({invalid: invalid});
		 console.log(this.state.invalid);
	}

	render() {
		const {
			children,
			disabled,
			name,
			onClick,
			placeholder,
			title,
			type,
		} = this.props;
		return(
			<div>
				<input
				  disabled={disabled}
				  invalid={this.state.invalid}
				  name={name}
				  onBlur={this.onBlur}
				  onClick={onClick}
				  onChange={this.onChange}
				  placeholder={placeholder}
				  style={this.state.invalid ? styles.invalid : styles.base}
				  title={title}
				  type={type}
				  value={this.state.value}
				/>
				{children}
			</div>
		);

	}
}

const styles = {
	base: {
		padding: '4px 4px',
		border: ' 1px solid #4b5154',
		borderRadius: '2px',
		':focus': {
			border: '1px solid #9cc3d1',
			boxShadow: `0px 1px 4px 1px #bfecfc`,
			outline: 'none',
		},
	},
	invalid: {
		padding: '4px 4px',
		border: ' 1px solid #9b1717',
		borderRadius: '2px',
		boxShadow: `0px 1px 4px 1px #c93434`,
		outline: 'none',
	},
}

InputField.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
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