import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Answers from './answers';

const answers = [
  {id: 1, content: 'Sad', title: 'The emotion sad', value: 'sad'},
  {id: 2, content: 'Happyyyyyyyyyy', title: 'The emotion happy', value: 'happy'},
  {id: 3, content: 'Angry', title: 'The emotion angry', value: 'angry'},
  {id: 4, content: 'Calm', title: 'The emotion calm', value: 'calm'},
];

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Answers', module)
  .add('Default', () => (
    <Answers
      btnkind={'default'}
      onClick={action('clicked')}
      answers={answers}>
    </Answers>
  ));