import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Well from './../well/well.jsx';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import Gallery from './../gallery/gallery.jsx';

const imagesArray = [
  // './originals/lipstick.jpg',
  // './originals/tea.jpg'
];

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
			  <Well style={styles.aligningCenter}>
                <MdAccountCircle style={styles.accountIcon} />
                <h4>Ranking: 1st</h4>
                <h2>Username</h2>
                <h4>user@example.com</h4>
                <h6>Age Group: </h6>
                <h6>Gender: </h6>
			  </Well>
			  <Gallery imagesArray={imagesArray} style={styles.galleryStyle}/>
			</div>
		);

	}
}

const styles = {
	accountIcon: {
		height: '15%',
		width: '15%',
		display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
	},
	aligningCenter: {
		textAlign: 'center',
	},
	galleryStyle: {
		color: '#f4f5f7',
		display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
		textAlign: 'center',
		paddingRight: '5%',
	},
}

export default Radium(Home);