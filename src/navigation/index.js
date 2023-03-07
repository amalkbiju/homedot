import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginOrRegisterUsingNumberScreen from '../screens/LoginOrRegisterUsingNumberScreen';
import ExistingUserScreen from '../screens/ExistingUserScreen';
import NonExstingUserOtpScreen from '../screens/NonExstingUserOtpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ForgotPasswordOtpVvarifiactionScreen from '../screens/ForgotPasswordOtpVvarifiactionScreen';
import ForgotPasswordOtpToLogin from '../screens/ForgotPasswordOtpToLogin';
import LoginOrRegisterUsingEmailScreen from '../screens/LoginOrRegisterUsingEmailScreen';
import UserOrProfessional from '../screens/UserOrProfessional';
import UserRegistrationScreen from '../screens/UserRegistrationScreen';
import ProfessionalRegisterScreen from '../screens/ProfessionalRegisterScreen';
import ProfessionalLocationScreen from '../screens/locationscreens/ProfessionalLocationScreen';
import UserLocationScreen from '../screens/locationscreens/UserLocationScreen';
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
          component={ForgotPasswordOtpVvarifiactionScreen}
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
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
