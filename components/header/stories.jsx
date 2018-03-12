import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from './header';
import NavElement from './navElement';
import Nav from './navbar';

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Header components', module)
  .add('Header', () => (
    <Header 
      onClick={action('clicked')}/>
  ))
  .add('Navigation bar', () => (
    <Nav 
      onClick={action('clicked')}/>
  ))
  .add('NavElement', () => (
    <NavElement 
      onClick={action('clicked')}>Apple</NavElement>
  ));