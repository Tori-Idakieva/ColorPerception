import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

class Image extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			alt,
			children,
			clickable,
			isGallery,
			onClick,
			style,
			src,
			title,
		} = this.props;
		return(
			<div style={isGallery ? styles.gallery : undefined}>
				<img
				  alt={alt}
				  clickable={clickable}
				  onClick={onClick}
				  src={src}
				  style={clickable ? [styles.default, styles.clickable, style] : [styles.default, style]}
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
		height: '60%',
		padding: '5px 10px',
		width: '60%',
	},
	clickable: {
		':hover': {
			 boxShadow: `0px 1px 4px 1px #999ea8`,
			 cursor: 'pointer',
		},
		':focus': {
			outline: 'none',
		},
	},
	gallery: {
		display: 'inline',
	},
}

Image.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default Radium(Image);