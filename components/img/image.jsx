import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class Image extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			children,
			onClick,
			src,
			title,
		} = this.props;
		return(
			<div>
				<img
				  onClick={onClick}
				  src={src}
				  style={styles.default}
				  title={title}
				/>
				{children}
			</div>
		);

	}
}

const styles = {
	default: {
		borderRadius: '6px',
		border: 'none',
		padding: '5px 10px',
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
		},
		':focus': {
			outline: 'none',
		},
	},
}

Image.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default Radium(Image);