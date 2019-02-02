import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import {
  facebookLogin
} from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props)
    // AsyncStorage.removeItem('fb_token');
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token }
}

export default connect(mapStateToProps, { facebookLogin })(AuthScreen);
