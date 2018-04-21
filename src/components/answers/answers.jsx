import PropTypes from 'prop-types';
import Radium from 'radium';
import React from 'react';

import Answer from './answer.jsx';

class Answers extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			answers,
			btnkind,
			onClick,
			style,
		} = this.props;
		return(
			<div style={styles.answers}>
			{answers.map((answer) =>
			    <Answer
			        btnkind={btnkind}
			        key={answer.id}
			        onClick={onClick}
			        title={answer.title}
			        answersValue={answer.value}
			        style={style}>
			          {answer.content}
			    </Answer>
			)}
			</div>
		);

	}
}

const styles = {
	answers: {
		display: 'inline',
	},
}

Answers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  btnkind: PropTypes.oneOf([
    'cancel',
    'success',
    'default',
  ]),
  onClick: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Radium(Answers);