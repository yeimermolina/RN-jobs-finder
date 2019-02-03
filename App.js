import React from 'react';
import { StyleSheet } from 'react-native';
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
