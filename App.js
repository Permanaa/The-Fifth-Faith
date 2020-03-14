/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';

import Router from './app/routers'

const App: () => React$Node = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;