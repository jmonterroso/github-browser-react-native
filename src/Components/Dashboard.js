import React, { Component } from 'react';
import Profile from './Profile';
import Repositories from './Repositories';

import api from '../Utils/api';

import  {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);

  }

  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1,
    };
    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#e77aae';

    }else if (btn === 2) {
      obj.backgroundColor = '#758bf4';

    }

    return obj;
  }

  goToProfile() {
    this.props.navigator.push({
          component: Profile,
          title: 'Profile Page',
          passProps: { userInfo: this.props.userInfo },
        });
  }

  goToRepos() {
    console.log('this.props.userInfo.login', this.props.userInfo.login);
    api.getRepos(this.props.userInfo.login)
    .then((res)=> {
      console.log(res, 'res');
      this.props.navigator.push({
            component: Repositories,
            title: 'Repositories Page',
            passProps: { userInfo: this.props.userInfo, repos: res },
          });
    });

  }

  goToNotes() {
    console.log('notes');
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={{ uri: this.props.userInfo.avatar_url }} style={styles.image}/>
      <TouchableHighlight style={this.makeBackground(0)}
      onPress={this.goToProfile.bind(this)}
      underlayColor="#88d4f5">
        <Text style={styles.buttonText}> View Profile</Text>
      </TouchableHighlight>

      <TouchableHighlight style={this.makeBackground(1)}
      onPress={this.goToRepos.bind(this)}
      underlayColor="#88d4f5">
        <Text style={styles.buttonText}> View Repos</Text>
      </TouchableHighlight>


      <TouchableHighlight style={this.makeBackground(2)}
      onPress={this.goToNotes.bind(this)}
      underlayColor="#88d4f5">
        <Text style={styles.buttonText}> View Profile</Text>
      </TouchableHighlight>


      </View>
    );
  }
};

module.exports = Dashboard;
