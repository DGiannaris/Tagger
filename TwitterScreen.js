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
  Button,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';



TwitterScreen.navigationOptions =({navigation})=> {
  return {title: 'Twitter',
  headerBackground: (<LinearGradient
colors={['#BA68C8', '#1da1f2']}
style={{ flex: 1,borderRadius:8 }}
start={{x: 0, y: 0}}
end={{x:.6, y: 0}}
/>),
  headerTitleStyle: {
    color: '#F3E5F5',
    fontSize: 30
  },
  headerTintColor: '#F3E5F5',
  headerTransparent:true,
  headerRight: (<Button onPress={()=>navigation.getParam('search')()} title={'tt'}/>),
}}



export default function TwitterScreen(props) {

  const [search,setSearch]=useState(false);


  const handlesearch=()=>{
    setSearch(!search);
  }

  useEffect(() => {
   props.navigation.setParams({search:handlesearch})
 }, [search])


   return (
     <View style={styles.container}>
     {search?<TextInput style={{ backgroundColor: '#ededed', height: 60,marginTop:100 }} value={'Hello'}/>:null}
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D25',
  },
});
