import React,{Component} from 'react';
import {useState,useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Input from './Input.js';
import twitter from 'react-native-simple-twitter';
import {keys} from './data/twitter-config.js'
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



twitter.setConsumerKey(keys['consumerKey'],keys['consumerSecret'])
twitter.setAccessToken(keys['accessToken'],keys['accessTokenSecret'])
//twitter.api(method,endpoint,parameters)

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
  let twitts=[];
  const [search,setSearch]=useState(false);
  const [val,setVal]=useState('');
  const [twittArray,setTwittArray]=useState([{
    loading:true,
    data:{},
  }])
  const handlesearch=()=>{
    setSearch(!search);
  }

  const handleVal=(val)=>{
    setVal(val);
  }

  const handletwittArray=(val)=>{
    setTwittArray(oldArray => [...oldArray, val]);

}

  const fetch =async(val)=>{
    if(val!=='')
    {
      const posts= await twitter.get('search/tweets.json',{result_type:'mixed',count:1,q:`#${val}`})
      await handletwittArray({loading:false,data:{'name':posts.statuses[0].user['screen_name'],
      'text':posts.statuses[0].text}});

    }

}

  useEffect(() => {
   props.navigation.setParams({search:handlesearch})
 }, [search])


 useEffect(() => {
    //console.log(twittArray)
}, [twittArray])

 useEffect(()=>{

   fetch(val);

},[val])




const listitems = twittArray.map((item,ind)=>{
  console.log(item)
  return (
    <View key={ind}>
      {item['loading']?null:
      <Text style={styles.item}>{item['data'].name}</Text>}
    </View>
  );

})


   return (

     <ScrollView style={styles.container}>
     {search?<Input val={val} handleval={handleVal}/>:null}
     <View style={styles.list}>{listitems}</View>
     </ScrollView>



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
  item: {
    marginLeft:10,
    marginTop:20,
    padding: 2,
    fontSize: 16,
    height: 44,
    fontWeight:'400',
    color:'#1DA1F2',
  },
  list:{
    marginTop:100,
    padding:5,
    borderRadius:8,
    backgroundColor: '#F3E5F5',
    marginLeft:10,
    marginRight:10,
  }
});
