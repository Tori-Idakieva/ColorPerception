import React from 'react';
import Radium from 'radium';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LoginForm from './loginForm';
import RegistrationForm from './registrationForm';

addDecorator((story) => (
  <div style={{ padding: '20px' }}>
    {story()}
  </div>
));

storiesOf('Forms', module)
  .add('LoginForm', () => (
    <LoginForm/>
  ))
  .add('RegistrationForm', () => (
    <RegistrationForm/>
  ));