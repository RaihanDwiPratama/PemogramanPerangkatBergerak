import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

export default function OnBoardScreen({navigation}) {
    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image source={require('../../assets/bubble.png')} />
                    <Text style={styles.headerText}>Celengan</Text>
                </View>
                <Text style={styles.title}>Find the way to manage your finance</Text>
                <Text style={styles.description}>prepare your savings to prepare for the future with us</Text>
                <TouchableOpacity 
                    style={styles.btn}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Navigation')}
                >
                    <Text style={styles.textBtn}>Get Started</Text>
                    <Ionicons name='arrow-forward' size={30} color='#ffffff' style={styles.icon} />
                </TouchableOpacity>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    header: {
        marginTop: 60,
        marginHorizontal: 105,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        color: '#395C61',
        fontFamily: 'Roboto_700Bold',
        fontSize: 25,
        marginLeft: 12,
    },
    title: {
        marginTop: 258,
        color: '#395C61',
        fontFamily: 'Roboto_700Bold',
        fontSize: 28,
        marginHorizontal: 30,
        textAlign: 'center'
    },
    description: {
        marginTop: 8,
        color: '#637173',
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        marginHorizontal: 68,
        textAlign: 'center'
    },
    btn: {
        flexDirection: 'row',
        marginTop: 77,
        width: 167,
        height: 54,
        borderRadius: 12,
        backgroundColor: '#395C61',
        marginHorizontal: '29%'
    },
    textBtn: {
        marginVertical: 15,
        color: '#FFFFFF',
        fontFamily: 'Roboto_900Black',
        fontSize: 17,
        marginRight: 9,
        marginLeft: 17
    },
    icon: {
        marginVertical: 12,
        marginHorizontal: 5
    },
})





































































































{/* 
 import React, { Component } from 'react'
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import HomeScreen from './HomeScreen';
 import ProfileScreen from './ProfileScreen';
 import ScoreScreen from './ScoreScreen';

 export default class OnBoardScreen extends Component { */}
//     constructor(props) {
//         super(props);
//         this.state = {
//             navLabel: {home:"Home", profile:"Profile", score:"Score"}
//         };
//     }

//     render() {
//         const Tab = createBottomTabNavigator();

//         return (
//             <Tab.Navigator
//                 initialRouteName={this.state.navLabel.home}
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;
//                         let rn = route.name;

//                         if (rn === this.state.navLabel.home) {
//                             iconName = focused ? 'home' : 'home-outline';
//                         } else if (rn === this.state.navLabel.score) {
//                             iconName = focused ? 'paper-plane' : 'paper-plane-outline';
//                         } else if (rn === this.state.navLabel.profile) {
//                             iconName = focused ? 'person' : 'person-outline';
//                         }
//                         return <Ionicons name={iconName} size={size} color={color} />
//                     },
//                 })}
//                 tabBarOptions={{
//                     activeTintColor: '#624FD7',
//                     inactiveTintColor: '#A8B0B0',
//                 }}>

//                 <Tab.Screen name={this.state.navLabel.home} component={HomeScreen} options={{headerShown:false}} />
//                 <Tab.Screen name={this.state.navLabel.score} component={ScoreScreen} options={{headerShown:false}} />
//                 <Tab.Screen name={this.state.navLabel.profile} component={ProfileScreen}  options={{headerShown:false}} />
//             </Tab.Navigator>
//         )
//     }
// }