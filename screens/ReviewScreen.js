import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
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

  renderLikedJobs() {
    console.log('LIKED', this.props.likedJobs)
    return this.props.likedJobs.map((job) => (
      <Card>
        <View style={{ height: 300 }}>
          <View style={styles.detailWrapper}>
            <Text style={styles.italics}>{job.company}</Text>
            <Text style={styles.italics}>{job.formattedRelativeTime}</Text>
          </View>
          <Button 
            title="Apply Now"
            backgroundColor="#03A9F4"
            onPress={() => Linking.openURL(job.url)}
          />
        </View>
      </Card>
    ));
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
}

const mapStateToProps = ({ likedJobs }) => ({
  likedJobs
})

export default connect(mapStateToProps)(ReviewScreen);