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
    data:{},
  }])
  const [load,setLoad]=useState(false);



  const handleLoad=(val)=>{
    setLoad(val);
  }

  const handlesearch=()=>{
    setSearch(!search);
  }

  const handleVal=(val)=>{
    setVal(val);
  }

  const handletwittArray=(val)=>{
    setTwittArray(oldArray => [...oldArray, val]);

}

const handledefArray=()=>{
  setTwittArray(oldArray=>[]);
}



    const fetchtrends =async()=>{

      handleLoad(true);

      const posts= await twitter.get('trends/place.json',{id:1})

      const postData= await posts[0].trends.map((post,ind)=>{

         handletwittArray({data:{'alias':post['name'],'name':'','pic':'',
         'text':''}})



      })

      handleLoad(false);

    }




  const fetchtags =async(val)=>{
    if(val!=='')
    {
      handleLoad(true);

      const posts= await twitter.get('search/tweets.json',{result_type:'mixed',q:`#${val}`})

      const postData=  await posts.statuses.map((post,ind)=>{

        handletwittArray({data:{'alias':post.user['name'],'name':post.user['screen_name'],'pic':post.user['profile_image_url_https'],
        'text':post.text}})

      })

      handleLoad(false);
    }
  }

useEffect(() => {
  handleLoad(true);
}, []);

useEffect(() => {
  props.navigation.setParams({ search: handlesearch });
}, [search]);

useEffect(() => {
  handledefArray();

  val === "" ? fetchtrends() : null;

  if (val !== "") {
    const timeout = setTimeout(() => {
      fetchtags(val);
    }, 270);
    return () => clearTimeout(timeout);
  }
}, [val]);


const trends = twittArray.map((item,ind)=>{
  return (
    <View key={100+ind} style={{ flex: 1}}>
        <View >
          <Text style={styles.tag}>{item['data'].alias}</Text>
        </View>
    </View>
  );

})


const loading=()=>{
  return(
  <View style={{height: 35,marginLeft:'38%',}}>
    <Text style={{fontSize: 19,fontWeight:'400',}}>
      Loading...
    </Text>
  </View>
)
}

const listitems = twittArray.map((item,ind)=>{
  return (
    <View key={100+ind} style={{ flex: 1}}>
      <View key={200+ind} style={styles.list}>
        <View  key={ind}>
          <View key={600+ind} style={styles.twitcont} >
             <Image key={500+ind}
                  style={styles.profpic}
                  source={{uri:item['data'].pic}}
              />
              <View key={700+ind} style={styles.names}>
                  <Text key={800+ind} style={styles.alias}>{item['data'].alias}</Text>
                  <Text key={300+ind} style={styles.item}>{item['data'].name!==''?`@${item['data'].name}`:''}</Text>
              </View>
            </View>
          <Text key={400+ind} style={styles.listtext}>{item['data'].text}</Text>
        </View>
      </View>
    </View>
  );

})

//?load?loading():trends:null
   return (

     <ScrollView style={styles.container}>
       {search?<Input val={val} handleval={handleVal}/>:null}
       <View style={{marginTop:100}}>{val!==''?load?loading():listitems:null}</View>
       {val===''?load?null:<Text style={styles.tagstitle}>Top Trend #Tags Worldwide</Text>:null}
       <View style={styles.trends}>{val===''?load?loading():trends:null}</View>
     </ScrollView>



   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181D25'
  },
  tagstitle:{
    height:35,
    textAlign:'center',
    fontWeight:'600',
    fontSize:17,
    color:'#BA68C8',
  },
  tag:{
    padding: 2,
    fontSize: 16,
    height: 35,
    fontWeight:'400',
    color:'#1DA1F2',
    textAlign:'center',
  },
  trends:{
    padding:5,
    borderRadius:8,
    backgroundColor: '#F3E5F5',
    marginLeft:10,
    marginRight:10,
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
  twitcont:{
    flex:1,
    flexDirection:'row',

  },
  names:{
    flex:1,
    flexDirection:'column',
  },
  list:{
    marginTop:17,
    padding:5,
    borderRadius:8,
    backgroundColor: '#F3E5F5',
    marginLeft:10,
    marginRight:10,
  },
  profpic:{
    width: 60,
    height: 60,
    borderRadius:100,
    resizeMode : 'cover',
  },
  item: {
    marginTop:-4,
    marginLeft:10,
    padding: 2,
    fontSize: 16,
    height: 35,
    fontWeight:'400',
    color:'#1DA1F2',
  },
  alias:{
    marginLeft:10,
    padding: 3,
    fontSize: 17,
    height: 35,
    fontWeight:'400',
    color:'#181D25',

  },
  listtext:{
    marginLeft:10,
    marginTop:2,
    paddingLeft: 2,
    paddingRight:2,
    paddingBottom:15,
    fontSize: 16,
    flex:2,
    fontWeight:'400',
    color:'#181D25',
  }
});
