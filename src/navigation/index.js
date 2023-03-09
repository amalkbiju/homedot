import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SplashScreen,
  LoginOrRegisterUsingNumberScreen,
  LoginOrRegisterUsingEmailScreen,
  ExistingUserScreen,
  NonExstingUserOtpScreen,
  ForgotPasswordScreen,
  ForgotPasswordOtpVarifiactionScreen,
  ForgotPasswordOtpToLogin,
  NewPasswordScreen,
  UserOrProfessional,
  UserRegistrationScreen,
  ProfessionalRegisterScreen,
  UserLocationScreen,
  ProfessionalLocationScreen,
} from '../screens/Index';
import {HomeScreen} from '../screens/home/Index';
const stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="SplashScreen" component={SplashScreen} />
        <stack.Screen
          name="LoginOrRegisterUsingNumberScreen"
          component={LoginOrRegisterUsingNumberScreen}
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
        <stack.Screen
          name="ForgotPasswordOtpVvarifiactionScreen"
          component={ForgotPasswordOtpVarifiactionScreen}
        />
        <stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <stack.Screen
          name="ForgotPasswordOtpToLogin"
          component={ForgotPasswordOtpToLogin}
        />
        <stack.Screen
          name="LoginOrRegisterUsingEmailScreen"
          component={LoginOrRegisterUsingEmailScreen}
        />
        <stack.Screen
          name="UserOrProfessional"
          component={UserOrProfessional}
        />
        <stack.Screen
          name="UserRegistrationScreen"
          component={UserRegistrationScreen}
        />
        <stack.Screen
          name="ProfessionalRegisterScreen"
          component={ProfessionalRegisterScreen}
        />
        <stack.Screen
          name="ProfessionalLocationScreen"
          component={ProfessionalLocationScreen}
        />
        <stack.Screen
          name="UserLocationScreen"
          component={UserLocationScreen}
        />
        <stack.Screen name="HomeScreen" component={HomeScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
