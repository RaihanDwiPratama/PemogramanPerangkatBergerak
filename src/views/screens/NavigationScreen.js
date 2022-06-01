import React,{ useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
//ADDED BY FEBRY @ 1 JUNE
import HomeScreen from './Home/HomeScreen'
import HomeScreenOld from './HomeScreenOld';
//END ADDED BY FEBRY @ 1 JUNE
//import HomeScreen from './HomeScreen2';
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
      shifting={false}
      barStyle={{
        backgroundColor: '#F0F2F9', 
        paddingVertical: 11,
        shadowColor: "#C4BEE8",
        shadowOffset: {
          width: 0,
          height: 0,
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
