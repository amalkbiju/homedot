import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginOrRegisterScreen from '../screens/LoginOrRegisterScreen';
import ExistingUserScreen from '../screens/ExistingUserScreen';
import NonExstingUserOtpScreen from '../screens/NonExstingUserOtpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
const stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen
          name="LoginOrRegisterScreen"
          component={LoginOrRegisterScreen}
        />
        <stack.Screen
          name="NonExstingUserOtpScreen"
          component={NonExstingUserOtpScreen}
        />
        <stack.Screen
          name="ExistingUserScreen"
          component={ExistingUserScreen}
        />
        <stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
