import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import NavigationScreen from './src/views/screens/NavigationScreen'
import HomeScreen from './src/views/screens/HomeScreen';
import FinanceScreen from './src/views/screens/FinanceScreen';
import ProfileScreen from './src/views/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Onboard' component={OnBoardScreen} />
          <Stack.Screen name='Navigation' component={NavigationScreen} />
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Finance' component={FinanceScreen} />
          <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}