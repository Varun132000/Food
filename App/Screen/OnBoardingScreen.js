/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({...props})=>(
  <Button
    title='Skip'
    //color='black'
    {...props}
  />
);
const Next = ({...props})=>(
  <Button
    title='Next'
 color='red'
    {...props}
  />
);
const Done = ({...props})=>(
  <Button
    title='Done'
    color='green'
    {...props}
  />
);


const OnBoardingScreen = ({navigation}) => {
  return (
    <Onboarding
   SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}

      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('SignUp')}

    pages={[
   {
        backgroundColor: '#a6e4d0',
        image: <Image source={require('../Assests/Images/food_logo.png')} />,
        title: 'Welcome',
        subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
    },
    {
        backgroundColor: '#fdeb93',
        image: <Image source={require('../Assests/Images/food_logo.png')} />,
        title: 'Explore',
        subtitle: 'This is the second slide of the Onboarding Swiper.',
    },
    {
        backgroundColor: '#e9bcbe',
        image: <Image source={require('../Assests/Images/food_logo.png')} />,
        title: 'All Done',
        subtitle: 'This is the Third slide of the Onboarding Swiper.',
    },
    ]}
/>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({});
