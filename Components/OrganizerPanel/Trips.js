import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Header,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  Image,
} from 'react-native';
import Buttons from './Buttons';
import Login from '../Login';
class Trips extends React.Component{
 
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, height:400,padding:10,margin:30, backgroundColor:'#afeeee'}}>
                    <Text style={{alignSelf:'center',fontSize:24,padding:10, marginLeft:7,fontWeight:'bold'}}>WELCOME RabiaKousar97!!!</Text>
                    <Text style={{alignSelf:'center',padding:30,fontSize:20, fontWeight:'bold'}} > Track Your Tours</Text>
                    <Text style={{padding:10,margin:10,fontSize:18, fontWeight:'bold' , alignSelf:'center'}} > Ongoing Tours</Text>
                    <View style={styles.lineStyle} />
                    <View style={{flex:1}}>
                        <Text style={{padding:10,margin:10,fontSize:18, fontWeight:'bold', alignSelf:'center'}}>Islamabad To Hunza</Text>
                    <Image style={{alignSelf:'center'}} source={require('./download.jpg')} />
                    <View style={{alignItems:'center'}}>
                    <Buttons  text='Track' color=  'black' onPress={()=>this.props.navigation.navigate("Track")}/>
                    </View>
                   
                    </View>
                  
                
                </View>

            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    lineStyle: {
      borderWidth: 0.5,
      borderColor: '#3cb371',
      margin: 0,
    },
    text: {
      fontSize: 16,
      padding:10
  
  
    },
  });
export default Trips;