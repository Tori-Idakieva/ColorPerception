import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Gallery from './gallery';

const imagesArray = [
  './originals/lipstick.jpg',
  './originals/lighter.jpg',
  './originals/tea.jpg',
  './originals/lipstick.jpg',
  './originals/lighter.jpg',
  './originals/tea.jpg'
];

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Gallery', module)
  .add('Gallery', () => (
    <Gallery imagesArray={imagesArray}/>
  ));