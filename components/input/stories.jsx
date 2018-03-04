import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Button', module)
  .add('with Default', () => (
    <Button onClick={action('clicked')} btnKind="default" title='This has a tooltip'>Default</Button>
  ))
  .add('with Primary', () => (
    <Button onClick={action('clicked')} btnKind="primary">Primary</Button>
  ))
  .add('with Success', () => (
    <Button onClick={action('clicked')} btnKind="success">Success</Button>
  ))
  .add('with Cancel', () => (
    <Button onClick={action('clicked')} btnKind="cancel">Cancel</Button>
  ));