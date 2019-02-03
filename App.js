import React from 'react';
import Expo, { Notifications } from 'expo';
import { StyleSheet, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen'
import SettingsScreen from './screens/SettingsScreen'
import store from './store';

import registerForNotifications from './services/push_notifications';

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        navigationOptions: {
          title: 'Review Jobs',
          tabBarIcon: ({tintColor}) => {
            return (<Icon name="favorite" size={30} color={tintColor} />);
            }
        },
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen }
        }) 
      }
    },{
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelStyle: {fontSize: 12}
      }
    } 
    ),
    navigationOptions: {
      tabBarVisible: false
    }
  }
}, {
  navigationOptions: {
    tabBarVisible: false
  }
});

const AppNavigator = createAppContainer(MainNavigator)

export default class App extends React.Component {
  componentDidMount() {
    registerForNotifications();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;
      
      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'OK' }]
        );
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
