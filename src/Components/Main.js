import React, { Component } from 'react';
import api from '../Utils/api';
import Dashboard from './Dashboard';

import  {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC',
      },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
      },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white',
      },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center',
      },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
      },
  });

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false,

    };

  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text,
    });

  }

  handleSubmit() {
    // update our indicatorIOs
    // fetch data Github
    // reroute
    this.setState({
      isLoading: true,
    });
    console.log('this.state.username', this.state.username);
    api.getBio(this.state.username)
    .then((res)=> {
        console.log('res', res);
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not Foud',
            isLoading: false,
          });
        }else {
          this.setState({ isLoading: false, error: false, username: '' });
          this.props.navigator.push({
            title: res.name || 'Select an options',
            component: Dashboard,
            passProps: { userInfo: res },
          });

        }
      });

    console.log('SUBMIT', this.state.username);
  }

  render() {
    var showErr = (
      this.state.error ? <Text>{this.state.error}</Text> : <View></View>
    );

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Enter Github User</Text>
        <TextInput
        style={styles.searchInput}
        value={this.state.username}
        onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
        style={styles.button}
        onPress={this.handleSubmit.bind(this)}
        underlayColor="white">
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ActivityIndicator
        animating={this.state.isLoading}
        color="#111"
        size="large"
        ></ActivityIndicator>
        {showErr}

      </View>
    );
  }
};

module.exports = Main;
