/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StorybookUI from './storybook';

const Render = () => (
  <>
    <App />
  </>
);

AppRegistry.registerComponent(appName, () => Render);

// <StorybookUI />
