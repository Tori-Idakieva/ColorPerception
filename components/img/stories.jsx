import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Image from './image';

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Image', module)
  .add('not-clickable sampleImage', () => (
    <Image 
      onClick={action('clicked')}
      src='./city1.jpg'/>
  ))
  .add('not-clickable sampleImage2', () => (
    <Image 
      onClick={action('clicked')}
      src='./originals/lipstick.jpg'/>
  ))
  .add('clickable sampleImage', () => (
    <Image 
      clickable={true}
      onClick={action('clicked')}
      src='./city1.jpg'/>
  ))
  .add('tooltip sampleImage', () => (
    <Image 
      clickable={true}
      onClick={action('clicked')}
      src='./city1.jpg'
      title="This image has title"/>
  ))
  .add('Alt sampleImage', () => (
    <Image 
      alt='An image of a city'
      onClick={action('clicked')}
      src='./city1111.jpg'
      title="Not loading image"/>
  ));