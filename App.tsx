/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import customConfig from './src/styles';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}

export default App;
