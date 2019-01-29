import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  facebookLogin
} from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
      </View>
    );
  }
}

export default connect(null, { facebookLogin })(AuthScreen);
