import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import * as ImageExtensions from './../imageBase.js';
import Well from './../well/well.jsx';
import Image from './../img/image.jsx';
import Answers from './../answers/answers.jsx'

const answers = [
  {id: 1, content: 'Sad', title: 'The emotion sad', value: 'sad'},
  {id: 2, content: 'Happy', title: 'The emotion happy', value: 'happy'},
  {id: 3, content: 'Angry', title: 'The emotion angry', value: 'angry'},
  {id: 4, content: 'Calm', title: 'The emotion calm', value: 'calm'},
];

const choicesArr = ['a', 'b', 'c', 'd', 'f', 'e', 'g', 'h'];
let pastChoices = [];

class GuessGame extends React.Component {
	constructor(props) {
		super(props);
		this.state={instructionsShow: false}

		this.toggleInstructions = this.toggleInstructions.bind(this);
		this.choose = this.choose.bind(this);
	}

	choose(choices) {
      let index = Math.floor(Math.random() * choices.length);
      let randomChoice = choices[index];

      // console.log('pastChoices', pastChoices);
      if (pastChoices.length !== 0) {
        for (let i = 0; i < pastChoices.length; i++)  {

      	  console.log('condition', pastChoices[i] === randomChoice);
      	  console.log('randomChoice', randomChoice);
      	  console.log('pastChoices[i]', pastChoices[i]);

      	  if (pastChoices[i] === randomChoice) {
      	  	console.log('heeeeeeeereeee');
      	  	return 'stop';
      	  	// return choices.pop(randomChoice);
       	  //   this.choose(choices);
      	  }

      	  else {
      		// console.log('theeereeee');
      		pastChoices.push(choices[index]);
      	    return randomChoice;
      	  }
        }
      }
      else {
      	pastChoices.push(choices[index]);
      	return randomChoice;
      }
    }

	toggleInstructions() {
		!this.state.instructionsShow ? this.setState({instructionsShow: true}) :
		this.setState({instructionsShow: false});
		console.log(this.choose(choicesArr));
	}

	render() {
		const { instructionsShow } = this.state;
		return(
			<div>
			  <Well style={styles.aligningCenter}>
			    <h2>Guess the Emotion</h2>
			    <div> {`Don't know how to play? Click `}
			      <a href="#" onClick={this.toggleInstructions}>
			        here
			      </a>
			      {instructionsShow === true ?
			        <div> 
			          {`
			          	Look at the image that is below and try to guess what emotion 
		                it represents by choosing one of the options below. If you
		                have guess correctly you will earn a point. If your guess is
		                incorrect you will be presented with an input field. At this point
		                please enter what emotion you believe it represents. Then click
		                'Next' to continue.`}
		            </div> : ''
		          }
			    </div>
			    <Image src={`./../../images/stubbornColors/manAndHat/${ImageExtensions.manAndHat[2]}`}/>
			    <Answers btnkind={'default'} answers={answers}></Answers>
			  </Well>
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

export default Radium(GuessGame);