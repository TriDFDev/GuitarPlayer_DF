import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

export type RootStackParamList = {
  Splash: undefined;  
  SignIn: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const Stack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name='Splash' component={Splash}/>
        <RootStack.Screen name='SignIn' component={SignIn}/>
    </RootStack.Navigator>
  )
}

export default Stack;