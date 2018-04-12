import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';


class OptionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};

  }

  render() {
  	const {
  		onClick,
  		options,
  		style,
  	} = this.props;

    return (
      <div>
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
     </div>
    );
  }
}

const styles = {
	optionStyle: {
		borderRadius: '6px',
		border: 'none',
		fontSize: '16px',
		margin: '5px',
		padding: '5px 10px',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 backgroundColor: 'pink',
			 cursor: 'pointer',
		},
		':focus': {
			background: 'blue',
		}
	},
}

OptionComponent.propTypes = {
  onClick: PropTypes.func,
  options: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Radium(OptionComponent);