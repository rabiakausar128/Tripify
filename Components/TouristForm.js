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
    FormLabel, FormInput, FormValidationMessage
} from 'react-native';


import CostumeButton from './CostumeButton';

const image = require('../Images/pic10.jpg');
class TouristForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        ValidationComponent.setDefaultErrorMessageStyle({
          color: "red",
          fontSize: 12,
        });
      }

    render() {
        return (
                <ScrollView>
                 <View style={{flex:1, flexDirection:'column'}}>
                <ImageBackground source={image} style={{ opacity: 0.5, height: 1500 ,width:600}}>
                <Text style={styles.MainText}>REGISTRATION</Text>
             <View style={{marginTop: 20, margin: 20,marginLeft:20, padding: 20, backgroundColor: 'white' , width:350}}>
                
                
                <Text style={styles.Basic}>Basic Info</Text>

                <TextInput  style={styles.input} placeholder="First Name" placeholderTextColor={'black'}  underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Last Name" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="User Name" style={styles.input} placeholderTextColor={'black'}  underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Phone" keyboardType="numeric" style={styles.input} placeholderTextColor={'black'}  underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Email" style={styles.input} placeholderTextColor={'black'}  underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Password" style={styles.input} placeholderTextColor={'black'}  underlineColorAndroid={'transparent'} secureTextEntry={true} />
                <TextInput placeholder="Confirm Password" style={styles.input} placeholderTextColor={'black'}  underlineColorAndroid={'transparent'} secureTextEntry={true} />
                <Text style={styles.Basic}>Detailed Info</Text>
                <TextInput placeholder="Address" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Address2 (Optional)" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Country" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="State" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="City" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Zip Code" keyboardType="numeric" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <Text style={styles.Basic}>Payment Info</Text>
                <TextInput placeholder="Name On Card" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Card Number" keyboardType="numeric" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="Expiry" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <TextInput placeholder="CVV" keyboardType="numeric" style={styles.input} placeholderTextColor={'black'} underlineColorAndroid={'transparent'} />
                <CostumeButton text='Submit' color=  'green' />
                </View>
                </ImageBackground>
            </View>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
   
    input: {
        height: 40,
        marginBottom: 20,
        padding:10,
        color: '#fff',
        borderBottomColor: 'green',
        borderBottomWidth: 2,

    },
    MainText: {
        padding: 10,
        marginTop: 20,
        fontSize: 30,
        color:'#800000',
        justifyContent:'center',
        marginLeft:60,
        fontWeight:'bold'
        
    },
    Basic: {
        paddingBottom: 10,
        marginBottom: 10,   
        textAlign:'left',
        fontSize: 20,
        fontWeight:'bold',
        color:'#008080'
    }
});

export default TouristForm