/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {StyleProvider} from 'native-base';
import AppNavigation from './app/app.navigator';
import stores from './app/stores';
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

const App = () => {
  return (
    <Provider stores={stores}>
      <StyleProvider style={getTheme(custom)}>
        <AppNavigation />
      </StyleProvider>
    </Provider>
  );
};

export default App;
