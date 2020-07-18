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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import ValidationComponent from 'react-native-form-validator';

import CostumeButton from './CostumeButton';
 import TouristForm from './TouristForm';

const image = require('../Images/Pic1.jpg');

var radio_props = [
  {label: 'Organier          ', value: 0 },
  {label: 'User', value: 1 }
];


class Login extends ValidationComponent {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      value:0
    };
  }
   

   Submit=()=>{

    this.validate({
      email: {email: true, required:true},
     password:{required:true, minlength:6}

    });
   }
  
  render() {
    return (


      <View style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground source={image} style={{ opacity: 0.7, height: 1000 }}   >
                    <View style={{ marginTop: 100, margin: 20, padding: 30, backgroundColor: 'white', height: 400, opacity: 1 }}>
                    <RadioForm   buttonColor={'#50C900'}
                      initial={0}
                     radio_props={radio_props}  
                     formHorizontal={true}  
                     selectedButtonColor={'#50C900'}  
                     onPress={(value) => {this.setState({value:value})}}  />
            <View>
              <TextInput ref="email" placeholderTextColor={'black'} placeholder='Enter Your Email' onChangeText={(email) => this.setState({email})} value={this.state.email} style={styles.Box} keyboardType="email-address"></TextInput>
              <TextInput ref="password" placeholderTextColor={'black'} placeholder='Enter Your Password' onChangeText={(password) => this.setState({password})} value={this.state.password} style={styles.Box} secureTextEntry={true}></TextInput>
              <Text style={{color:'red'}}>
            {this.getErrorMessages()}
          </Text>
              <CostumeButton text='SIGN IN' color=  '#50C900' onPress={()=>this.props.navigation.navigate("Trackstack")}/>
              
             
            </View>
             
          </View>
        </ImageBackground>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  Box: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    textDecorationLine: 'underline',

  }
});


export default Login;