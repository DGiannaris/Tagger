import React,{Component} from 'react';
import {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

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



export default function Input(props) {
   return (
       <View>
        <TextInput  autoFocus={true} selectionColor={'#F3E5F5'}
        style={styles.inputField} onChangeText={text=>props.handleval(text)} value={props.val} />
       </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D25',
  },
  contentContainer: {
    paddingTop: 30,
        zIndex:0,
  },
  inputField:{
    backgroundColor:'#181D25',
    height: 60,
    marginTop:100,
    marginLeft:15,
    marginRight:15,
    paddingLeft: 20,
    borderRadius:8,
    shadowColor: '#9C27B0',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    elevation:1,
    borderWidth: 2,
    borderColor: '#F3E5F5',
    borderStyle:'dashed',
    color:'#F3E5F5'
  },

});
