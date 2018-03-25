import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './input';

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Input', module)
  .add('defaultText', () => (
    <Input 
      onClick={action('clicked')}
      placeholder="Enter username here"
      type="username"/>
  ))
  .add('defaultPassword', () => (
    <Input
      onClick={action('clicked')}
      placeholder="Enter password here"
      type="password"/>
  ))
  .add('defaultEmail', () => (
    <Input 
      onClick={action('clicked')}
      placeholder="Enter email here"
      type="email"/>
  ))
  .add('with tooltip', () => (
    <Input 
      onClick={action('clicked')}
      placeholder="Enter input here"
      title="See how this renders as tooltip"
      type="text"/>
  ));