import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox from './checkbox';

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Checkbox', module)
  .add('Checkbox', () => (
    <Checkbox onClick={action('clicked')}></Checkbox>
  ));