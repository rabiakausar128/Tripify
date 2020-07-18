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

const CostumeButton = props => {
    const content = (
        <View style={[styles.button, { backgroundColor: props.color }]}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        width: 200,
        margin: 40,
        marginStart: 40,
        marginTop: 20,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: "bold",
        

    }
});


export default CostumeButton;