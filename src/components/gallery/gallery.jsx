import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Image from './../img/image.jsx';

class Gallery extends React.Component {
  constructor(props) {
		super(props);

		this.renderImage = this.renderImage.bind(this);
	}

	renderImage(imageUrl) {
    return(
        <Image
          {...this.props}
          clickable={true}
          isGallery={true}
          src={imageUrl}
          style={styles.imageStyle} />
    );
  }

  render() {
  	const {
  		imagesArray,
  		style,
  	} = this.props;
    return(
      <div
        {...this.props}
        style={[styles.default, style]}>
          {imagesArray.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    );
  }
}

const styles = {
	default: {
		background: `linear-gradient(0deg, #1b2123, #354044)`,
		borderRadius: '6px',
		border: 'none',
		margin: '5px',
		paddingLeft: '7%',
		paddingRight: '10px',
		paddingTop: '10px',
		paddingBottom: '10px',
		minWidth: '560px',
		maxWidth: '1100px',
	},

	imageStyle: {
		borderRadius: '6px',
		border: 'none',
		margin: '10px',
		padding: '5px 10px',
		minWidth: '50px',
		minHeight: '50px',
		maxHeight: '200px',
		maxWidth: '200px',
		':hover': {
		  minWidth: '60px',
		  minHeight: '60px',
		  maxHeight: '230px',
		  maxWidth: '230px',
		},
	},
}

Gallery.PropTypes = {
  imagesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Radium(Gallery);