import React,{Component} from 'react';
import {useState,useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Search from './Search.js';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';

export const TwitterStack = createStackNavigator({
  Twitter:{
    screen:TwitterScreen,
    navigationOptions: ({ navigation }) => ({
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
      headerRight: (<Search onPress={navigation.getParam('search')}/>),

    }),
  }
})

export default function TwitterScreen(props) {

  const [search,setSearch]=useState(false);

  const handlesearch=(val)=>{
    setSearch(!val);
  }

  useEffect(() => {

   props.navigation.setParams({search:!search})
   console.log(search)
  }, [])


   return (
     <View style={styles.container}>
     {props.screenProps?<TextInput style={{ backgroundColor: '#ededed', height: 60,marginTop:100 }} value={'Hello'}/>:null}
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D25',
  },
});
