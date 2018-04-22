import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Well from './../well/well.jsx';

const topTenUsers = [
  'userName15611',
  'userName14411',
  'userName1811',
  'userName15511',
  'userName1311',
  'userName13311',
  'userName1211',
  'userName193311',
  'userName111',
  'username2324',
];

let counter = 0;

class RankList extends React.Component {
	constructor(props) {
		super(props);
		this.renderUser = this.renderUser.bind(this);
	}

	renderUser(user) {
	  counter ++;
	  let counterSuffix = counter === 1 ? 'st' :
	   counter === 2 ? 'nd' :
	     counter === 3 ? 'rd' : 'th';
      return(
        <h3 style={styles.rank}>
          <span style={styles.counter}>
            {counter}<sup>{counterSuffix}</sup>
          </span>
          <span>
            {user}
          </span>
        </h3>
      );
    }

	render() {
		return(
			<div>
			  <Well style={styles.aligningCenter}>
                <h2>Rank List</h2>
                {topTenUsers.map(user => this.renderUser(user))}
			  </Well>
			</div>
		);

	}
}

const styles = {
	aligningCenter: {
		textAlign: 'center',
	},
	counter: {
		marginRight: '5%',
	},
	rank: {
		display: 'block',
	},
}

export default Radium(RankList);