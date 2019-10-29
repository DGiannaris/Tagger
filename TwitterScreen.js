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
  contentContainer: {
    paddingTop: 30,
        zIndex:0,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop:35,
    marginLeft: 26,

  },
  tabBarInfoText: {
    fontSize: 20,
    fontWeight:'400',
    color: '#80DEEA',
    textAlign: 'center',
  },
  tabBarArrow: {
    fontSize: 40,
    fontWeight:'400',
    color: '#80DEEA',
    textAlign: 'center',
  },
  title1:{
    fontSize:20,
    color:'#BA68C8',
    position:'absolute',
    top:'80%',
    left:'17%',
  },
  title2:{
    fontSize:20,
    color:'#BA68C8',
    position:'absolute',
    top:'80%',
    left:'61%',
  }
});
