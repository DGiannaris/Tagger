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

//#181D25
// onPress={() => props.navigation.navigate('List_Map')}
   return (
     <View style={styles.container}>
     <TextInput style={{ backgroundColor: '#ededed', height: 60,marginTop:100 }} value={'Hello'}/>
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D25',
  },
});
