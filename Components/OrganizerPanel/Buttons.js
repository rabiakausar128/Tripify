import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Button,
} from 'react-native';

const Buttons = props => {
    const content = (
        <View style={[styles.button, { backgroundColor: props.color }]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        width: 100,
        margin: 40,
        marginStart: 20,
        marginTop: 10,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
        

    }
});


export default Buttons;