import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
  static navigationOptions = () => ({
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  })
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          title="Reset Liked Jobs"
          large
          icon={{ name: 'delete-forever'}}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
