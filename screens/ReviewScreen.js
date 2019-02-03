import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Review Jobs",
    headerRight: (
      <Button
          title="Settings"
          onPress={() => {
              navigation.navigate("settings");
          }}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
      />
    ),
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });



  render() {
    return (
      <View>
        <Text>Review Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ likedJobs }) => ({
  likedJobs
})

export default connect(mapStateToProps)(ReviewScreen);