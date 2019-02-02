import React, { Component } from 'react';
import _ from 'lodash';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4'},
  { text: 'Set your location, then swipe away', color: '#009688'},
  { text: 'What are you waiting', color: '#03A9F4'}
];

class WelcomeScreen extends Component {
  static navigationOptions = {
    tabBarVisible: false
  }

  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides 
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

export default WelcomeScreen;
