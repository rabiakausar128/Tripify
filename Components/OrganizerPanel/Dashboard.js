import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,

  TouchableOpacity,
  ImageBackground,
  TextInput,
  Button,
  Image,
  Settings,
} from 'react-native';
import { Header } from 'react-native-elements'

import Login from '../Login'
import { TouristForm } from "../TouristForm";
import { Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import Drawar from './Drawar';
import {navigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {openDrawer} from '@react-navigation/drawer'
class Dashboard extends React.Component {
  render() {
    return (
      <View >
               <View >
                 <Header
            backgroundColor='#3cb371'
            rightComponentDisable
            leftComponentDisable
            centerComponent={{ text: 'TRIPIFYY', style: { color: '#fff', fontSize: 20 } }}
                        />
         
        </View>
        <View  style={{margin:10,padding:20, borderWidth:0.7 , borderColor:'#3cb371'}}>
        <View style={{ height: 200, alignContent: 'center', alignItems: 'center', padding: 10 }}   >
          <Avatar
            rounded
            size="xlarge"
            avatarStyle={{ alignContent: 'center' }}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',

            }}

          />


          <View>
            <Text style={{ fontSize: 20, paddingTop: 20 }}> Rabia Kousar</Text>
          </View>
        </View>

        <View style={styles.lineStyle} />

        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Text   style={{fontWeight:'bold' , fontSize:18}} >Ratings And Reviews</Text>
          <View style={{ alignItems: 'baseline', padding: 10 }}>
            <Text style={{ textAlign: 'left', fontSize: 16 }}>Trip Completion</Text>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>

            <Progress.Bar progress={0.7} width={150} height={10} color='#3cb371' />
          </View>
          <View>
            <Text style={{ textAlign: 'left', fontSize: 16 }} >On Time</Text>
          </View>

          <View style={{ paddingTop: 10, paddingBottom: 10 }}>

            <Progress.Bar progress={0.8} width={150} height={10} color='#3cb371' />
          </View>
          <View>
            <Text style={{ textAlign: 'left', fontSize: 16 }}>
              Behaviour
</Text>
          </View>
          <View style={{ paddingTop: 10, paddingBottom: 10 }}>

            <Progress.Bar progress={0.9} width={150} height={10} color='#3cb371' />
          </View>
        </View>
        <View style={styles.lineStyle} />
        
        <View style={{ flexDirection:'row'}}>
<Text style={styles.text}>Earning In This Month </Text>

<Text style={styles.text}>80k</Text>
</View>
         
        
        <View style={{ flexDirection:'row'}}>
<Text style={styles.text}>Total Earning</Text>
         
<Text style={styles.text}>150M</Text>
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
    margin: 30,
  },
  text: {
    fontSize: 16,
    padding:10


  },
});
export default Dashboard;