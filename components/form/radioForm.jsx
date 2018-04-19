import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class RadioForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: '', selectedOption: ''};

		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
      this.setState({selectedOption: event.target.value});
    }

	render() {
		return(
			<div style={styles.container}>
			  <form>
				<label style={styles.labelStyle}>Not at all</label>
				  <input
				    type='radio'
				    value='notAtAll'
				    checked={this.state.selectedOption === 'notAtAll'}
				    onChange={this.handleOptionChange}
				    style={styles.inputStyle}
				    title='Not at all'/>
				  <input
				    type='radio'
				    value='aLittleBit'
				    checked={this.state.selectedOption === 'aLittleBit'}
				    onChange={this.handleOptionChange}
				    style={styles.inputStyle}
				    title='A little bit'/>
				  <input
				    type='radio'
				    value='somewhat'
				    checked={this.state.selectedOption === 'somewhat'}
				    onChange={this.handleOptionChange}
				    style={styles.inputStyle}
				    title='Somewhat'/>
				  <input
				    type='radio'
				    value='quiteABit'
				    checked={this.state.selectedOption === 'quiteABit'}
				    onChange={this.handleOptionChange}
				    style={styles.inputStyle}
				    title='Quite a bit'/>
				  <input
				    type='radio'
				    value='completely'
				    checked={this.state.selectedOption === 'completely'}
				    onChange={this.handleOptionChange}
				    title='Completely'/>
				  <label style={styles.labelStyle}>Completely</label>
				</form>
			</div>
		);

	}
}

const styles = {
	container: {
		border: '1px solid #bac8db',
		background: '#e3e8ef',
		padding: '10px',
		minWidth: '400px',
		maxWidth: '400px',
	},

	labelStyle: {
		fontWeight: 'bold',
		margin: '25px',
	},

	inputStyle: {
		margin: '10px',
	},
}

export default Radium(RadioForm);