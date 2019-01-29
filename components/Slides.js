import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button 
          title="Let's go!"
          raised
          containerViewStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      )
    }
  }


  renderSlides() {
    return this.props.data.map((slide, i) => {
      return (
        <View key={slide.text} style={[styles.slideStyle, { backgroundColor: slide.color }]}>
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      )
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex:1,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  buttonContainerStyle: {
    marginTop: 15
  },
  buttonStyle: {
    backgroundColor: '#0288D1'
  }
};

export default Slides;
