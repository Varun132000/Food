/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './App/Screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './App/Screen/Dashboard';
import SignUp from './App/Screen/SignUp';
import OnBoardingScreen from './App/Screen/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

const Stack = createNativeStackNavigator();



 

function App() {
    const [firstLaunch, setFirstLaunch] = React.useState(null);
  React.useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  return (
    firstLaunch != null && (  <NavigationContainer>
      <Stack.Navigator>
           {firstLaunch &&( <Stack.Screen name="OnBordingScreen" component={OnBoardingScreen} options={{headerShown:false}}/>)}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
  />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ));
}

export default App;

const styles = StyleSheet.create({});
