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
  .add('sampleImage', () => (
    <Image 
      onClick={action('clicked')}
      src='./../../images/city1.jpg'/>
  ));