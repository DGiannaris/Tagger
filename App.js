import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js';
import TwitterScreen,{TwitterStack} from './TwitterScreen.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
console.disableYellowBox = true;


  const RootStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: '#Tagger',
        headerStyle: {
          backgroundColor: '#BA68C8',
          borderRadius:8
        },
        headerTitleStyle: {
          color: '#F3E5F5',
          fontSize: 30
        },
        headerTransparent:true,
      }),
    },
    Twitter:{
      screen:TwitterScreen,
    }
  });


  const AppContainer = createAppContainer(RootStack);


  return (
  <AppContainer/>
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
