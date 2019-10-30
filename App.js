import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen.js';
import TwitterScreen from './TwitterScreen.js';
import { LinearGradient } from 'expo-linear-gradient';
import Search from './Search.js';

export default function App() {
console.disableYellowBox = true;


const TwitterStack = createStackNavigator({
  Twitter:{
    screen:TwitterScreen,
    navigationOptions: () => ({
      title: 'Twitter',
      headerBackground: (
  <LinearGradient
    colors={['#BA68C8', '#1da1f2']}
    style={{ flex: 1,borderRadius:8 }}
    start={{x: 0, y: 0}}
    end={{x:.6, y: 0}}
  />
),
      headerTitleStyle: {
        color: '#F3E5F5',
        fontSize: 30
      },
      headerTintColor: '#F3E5F5',
      headerTransparent:true,
      headerRight: (<Search search={search} setSearch={handlesearch}/>),

    }),
  }
})

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
    Twitter:TwitterStack
  });


  const AppContainer = createAppContainer(RootStack);

 const [search,setSearch]=useState(false);

 const handlesearch=(val)=>{
   setSearch(val);
 }



  return (
  <AppContainer screenProps={search}/>
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
