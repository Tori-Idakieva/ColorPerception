import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import OptionComponent from './option';


class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'choose'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
  	const {
  		label,
  		onClick,
  		options,
  		style,
  	} = this.props;

    return (
      <div style={[styles.divStyle, style]}>
        <label style={styles.labelStyle}>
          {label}
          <select
            onChange={this.handleChange}
            style={styles.selectStyle}
            value={this.state.value}>
                {options.map((option) =>
				    <option 
				        key={option.id}
				        onClick={onClick}
				        style={styles.optionStyle}
				        title={option.title}
				        value={option.value}>
				          {option.content}
				    </option>
				)}
          </select>
        </label>
      </div>
    );
  }
}

const styles = {
	selectStyle: {
		background: `linear-gradient(0deg, #afc2e0, #d0dbed)`,
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		marginLeft: '25px',
		padding: '5px 10px',
		minWidth: '50%',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},

	labelStyle: {
		fontSize: '20px',
		margin: '5px',
		padding: '5px 10px',
	},

	divStyle: {
		margin: '5px',
		padding: '5px 5px',
	},

	optionStyle: {
		fontSize: '16px',
		fontWeight: 'bold',
		margin: '5px',
		padding: '5px 10px',
		background: '#dee6f2',
	},
}

SelectComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  onClick: PropTypes.func,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Radium(SelectComponent);