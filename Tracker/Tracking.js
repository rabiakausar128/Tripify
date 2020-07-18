import React from 'react';
import {

    Alert,
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

navigator.geolocation = require('@react-native-community/geolocation');

const {width,height}= Dimensions.get('window')

const SCREEN_HEIGHT=height;
const SCREEN_WIDTH=width;
const ASPECT_RATIO=width/height

const LATITUDE_DELTA=0.0722;
const LONGITUDE_DELTA=0.0034


class Tracking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPosition:{
            longitude: 0,
            latitude: 0,
            latitudeDelta:0,
            longitudeDelta:0,
            },
            markerPosition:{
                latitude:0,
                longitude:0
            }
        };
    }
    watchID: ?number =null
    componentDidMount() {
     
        navigator.geolocation.getCurrentPosition( position=>{
          

            
                var lat = (position.coords.latitude)
                var long =(position.coords.longitude)
                
                var initialRegion={
                    latitude:lat,
                    longitude: long,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }
                var mark={
                    latitude:lat,
                    longitude: long,
                }
                this.setState({initialPosition: initialRegion})
                this.setState({markerPosition:mark})          
        },
        error=>alert(JSON.stringify(error)),
        {timeout:20000}
       );  
       this.watchID= navigator.geolocation.watchPosition((position)=>{
        var lat = parseFloat(position.coords.latitude)
        var long =parseFloat(position.coords.longitude)

        var lastRegion={
            latitude:lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitude: LONGITUDE_DELTA

        }
        var mark2={
            latitude:lat,
            longitude: long,
        }
        this.setState({initialPosition: lastRegion})
        this.setState({markerPosition: mark2})  
       })
   
    }
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID)
    }
    render() {

        return (
            //Geolocation.getCurrentPosition(data=>console.warn(data.coords.latitude)),
            <View style={styles.container}>
                <MapView                   
                    style={styles.map}
                   initialRegion={this.state.initialPosition}
                >
                    <Marker coordinate={this.state.markerPosition}/>
                </MapView>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 800,
        width: 800,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});





export default Tracking;