import React,{Component} from 'react';
import {useState,useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Input from './Input.js';
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
  headerRight: (
    <TouchableHighlight underlayColor='#39b1fa' style={styles.searchIcon} onPress={()=>navigation.getParam('search')()}>
      <View>
        <Image style={styles.icon} source={require('./assets/search.png')}/>
      </View>
    </TouchableHighlight>),
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
     {search?<Input value={'Hello'}/>:null}
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D25',
  },
  searchIcon:{
    marginRight: 7,
    marginTop:3,
    width:40,
    height:40,
    borderRadius:100,

  },
  icon:{
    marginLeft:6,
    marginTop:5.5,

  },

});
