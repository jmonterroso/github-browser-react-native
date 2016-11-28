import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#e4e4e4',
        flex: 1,
        marginLeft: 15,
      },
  });

class Separator extends Component {
  render() {
    return (<View style={styles.separator}/>);
  }
}

module.exports = Separator;
