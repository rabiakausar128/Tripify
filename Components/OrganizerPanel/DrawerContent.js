import React from 'react';
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch, Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';
export default function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent, {backgroundColor:'#3cb371' , height:150}}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                                }}
                                size={90}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Title style={styles.title}> Rabia Kousar </Title>
                                <Caption style={styles.caption}>@rabiakausar97</Caption>
                            </View>


                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({ color, size }) => (<Icon name="home-outline" color={'green'} size={size} />)} label="Home  " onPress={() => { }} />

                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({ color, size }) => (<Icon name="android-messages" color={'green'} size={size} />)} label="Messages " onPress={() => { }} />

                </Drawer.Section>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({ color, size }) => (<Icon name="alert-circle-outline" color={'green'} size={size} />)} label="Notifications  " onPress={() => { }} />

                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({ color, size }) => (<Icon name="airplane-takeoff" color={'green'} size={size} />)} label=" Trips  " onPress={() => { }} />

                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({ color, size }) => (<Icon name="cash" color={'green'} size={size} />)} label="Earnings  " onPress={() => { }} />

                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem icon={({ color, size }) => (<Icon name="settings-outline" color={'green'} size={size} />)} label="Settings  " onPress={() => { }} />

                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({ color, size }) => (<Icon name="exit-to-app" color={'green  '} size={size} />)} label="Sign-Out  " onPress={() => { }} />


            </Drawer.Section>


        </View>
    )
}



const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
        
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 16,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 10   
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#3cb371',
        borderTopWidth: 1
    },
    prefrences: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})