import React, { Component } from 'react';
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

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides 
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

export default WelcomeScreen;
