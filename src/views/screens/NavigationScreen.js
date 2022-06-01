import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import FinanceScreen from './FinanceScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

export default function NavigationContainer({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#395C61"
      inactiveColor="#A8B0B0"
      labelStyle={{ fontSize: 10 }}
      shifting={true}
      barStyle={{
        backgroundColor: '#F0F2F9', 
        paddingVertical: 11,
        shadowColor: "#C4BEE8",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 30,
        elevation: 50,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Finance"
        component={FinanceScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// import React, { Component } from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';
// import HomeScreen from './HomeScreen'
// import FinanceScreen from './FinanceScreen'
// import ProfileScreen from './ProfileScreen'

// export default class NavigationScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             navLabel: {home:"Home", finance:"Finance", profile:"Profile"}
//         };
//     }

//     render() {
//         const Tab = createMaterialBottomTabNavigator();

//         return (
//             <Tab.Navigator
//                 initialRouteName={this.state.navLabel.home}
//                 activeColor= '#395C61'
//                 inactiveColor= '#A8B0B0'
//                 barStyle={{ backgroundColor: '#F0F2F9', paddingVertical: 20 }}
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;
//                         let rn = route.name;

//                         if (rn === this.state.navLabel.home) {
//                             iconName = focused ? 'home' : 'home';
//                             return <Feather name={iconName} size={24} />
//                         } else if (rn === this.state.navLabel.finance) {
//                             iconName = focused ? 'wallet' : 'wallet-outline';
//                             return <Ionicons name={iconName} size={24}/>
//                         } else if (rn === this.state.navLabel.profile) {
//                             iconName = focused ? 'person' : 'person-outline';
//                             return <Ionicons name={iconName} size={24} />
//                         }
//                     },
//                 })}>

//                 <Tab.Screen name={this.state.navLabel.home} component={HomeScreen} options={{headerShown:false}} />
//                 <Tab.Screen name={this.state.navLabel.finance} component={FinanceScreen} options={{headerShown:false}} />
//                 <Tab.Screen name={this.state.navLabel.profile} component={ProfileScreen}  options={{headerShown:false}} />
//             </Tab.Navigator>
//         )
//     }
// }