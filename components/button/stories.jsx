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
  .add('Default', () => (
    <Button onClick={action('clicked')} btnKind="default" title='This has a tooltip'>Default</Button>
  ))
  .add('Transperant', () => (
    <Button onClick={action('clicked')} btnKind="transperant">Transperant</Button>
  ))
  .add('Submit', () => (
    <Button onClick={action('clicked')} btnKind="submit">Submit</Button>
  ))
  .add('Success', () => (
    <Button onClick={action('clicked')} btnKind="success">Success</Button>
  ))
  .add('Cancel', () => (
    <Button onClick={action('clicked')} btnKind="cancel">Cancel</Button>
  ));