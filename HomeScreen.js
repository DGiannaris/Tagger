import React from 'react';
import * as Animatable from 'react-native-animatable';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';



export default function HomeScreen(props) {

//#181D25
// onPress={() => props.navigation.navigate('List_Map')}
   return (
     <View style={styles.container}>
       <ScrollView
         style={styles.container}
         contentContainerStyle={styles.contentContainer}>

        <Animatable.View animation="pulse" easing="ease-in-out-quart" iterationCount='infinite'>
           <TouchableHighlight style={styles.touchableHigh} onPress={() => props.navigation.navigate('Twitter')}>
             <View>
               <Image style={styles.welcomeImage} source={require('./assets/hashtag.png')}/>
             </View>
           </TouchableHighlight>
         </Animatable.View>
       </ScrollView>
       <Animatable.Text style={styles.title1} animation='fadeInLeftBig'>Your #HashTags,</Animatable.Text>
        <Animatable.Text style={styles.title2} animation='fadeInRightBig'>ONE App</Animatable.Text>

     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D25',
    zIndex:0,
  },
  touchableHigh:{
      marginBottom:10,
      height: 150,
      width:150,
      marginTop:'60%',
      marginLeft: 105,
      borderRadius:100,
      backgroundColor:'#181D25',
      shadowColor: '#9C27B0',
      shadowOffset: {width: 0, height: 0},
      shadowRadius: 5,
      elevation:0,
      zIndex:1,
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
