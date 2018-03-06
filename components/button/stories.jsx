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
    <Button onClick={action('clicked')} btnkind="default" title='This has a tooltip'>Default</Button>
  ))
  .add('Transperant', () => (
    <Button onClick={action('clicked')} btnkind="transperant">Transperant</Button>
  ))
  .add('Submit', () => (
    <Button onClick={action('clicked')} btnkind="submit">Submit</Button>
  ))
  .add('Success', () => (
    <Button onClick={action('clicked')} btnkind="success">Success</Button>
  ))
  .add('Cancel', () => (
    <Button onClick={action('clicked')} btnkind="cancel">Cancel</Button>
  ));