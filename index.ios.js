/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './src/Components/Main';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
});

export default class egghead extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{ title: 'egghead app',
      component: Main, }} />
    );
  }
}

AppRegistry.registerComponent('egghead', () => egghead);
