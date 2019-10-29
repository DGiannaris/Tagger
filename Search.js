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



export default function Search(props) {

  console.log(props.screenProps)
   return (
     <View >
     <TouchableHighlight style={styles.searchIcon} onPress={() => props.screenProps.setSearch(!props.screenProps.search)}>
       <View>
         <Image  source={require('./assets/search.png')}/>
       </View>
     </TouchableHighlight>
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
  searchIcon:{
    marginRight: 10,
    marginTop:1,
  }

});
