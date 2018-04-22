import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Header from './../header/header.jsx';
import Home from './home.jsx';
import RankList from './rankList.jsx';
import GuessGame from './guessGame.jsx';

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
			  <Header/>
			  <GuessGame/>
			</div>
		);

	}
}

export default Radium(Layout);