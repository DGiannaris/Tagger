import React,{Component} from 'react';
import * as Animatable from 'react-native-animatable';


import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';



export default function TwitterScreen(props) {

console.log(props)
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
