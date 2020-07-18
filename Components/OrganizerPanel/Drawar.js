import React from 'react';
import Dashboard from './Dashboard'
import  TouristForm  from "../TouristForm";
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { View,Text } from 'react-native';
import DrawerContent from './DrawerContent';
const Drawer  = createDrawerNavigator();

class Drawar extends React.Component {
    
    render(){
        return(
                   
            <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent   {...props} />} >
              <Drawer.Screen name="Home" component={Dashboard} />
              <Drawer.Screen name="Notifications" component={TouristForm} />
            </Drawer.Navigator>
          </NavigationContainer> 
          
        )
        }   
}
export default Drawar;