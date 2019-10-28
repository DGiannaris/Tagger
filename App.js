import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js'

export default function App() {
console.disableYellowBox = true;

  const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Tagger',
        headerStyle: {
          backgroundColor: '#9C27B0'
        },
        headerTitleStyle: {
          color: '#FFFDE7',
          fontSize: 30
        },
      }),
    },
  });


  const AppContainer = createAppContainer(RootStack);







  return (
  <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
