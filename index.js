/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import Application from './pages/Application';
import {name as appName} from './app.json';
import store from './redux';

export default class Recive extends Component {
    render() {
      return (
        <Provider store={store}>
          <Application />
        </Provider>
      );
    }
  }
AppRegistry.registerComponent(appName, () => Recive);
