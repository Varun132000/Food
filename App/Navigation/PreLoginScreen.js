/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import OnBoardingScreen from '../Screen/OnBoardingScreen';
const Stack = createNativeStackNavigator()
export default function PreLoginScreen() {
  return (
    
    <Stack.Navigator>
     <Stack.Screen name='OnBordingScreen' component={OnBoardingScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})