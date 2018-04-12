import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectComponent from './selection';
import OptionComponent from './option';

const label = 'Select an emotion';

const options = [
  {id: 1, content: 'Choose...', title: 'Choose an emotion', value: 'choose'},
  {id: 2, content: 'Sad', title: 'The emotion sad', value: 'sad'},
  {id: 3, content: 'Happy', title: 'The emotion happy', value: 'happy'},
];

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Select', module)
  .add('Option', () => (
    <OptionComponent
      onClick={action('clicked')}
      options={options}>
    </OptionComponent>
  ))
  .add('Select', () => (
    <SelectComponent
      label={label}
      onClick={action('clicked')}
      options={options}>
    </SelectComponent>
  ));