import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Display from '../utils/Display';
import Colors from '../utils/Colors';

const ExistingUserScreen = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <View
        style={styles?.mainContainer}>
        <Text
          style={styles?.passwordText}>
          Password
        </Text>
        <View style={{width: '100%', height: '4%'}} />

        <TextInput
          placeholder="Enter Password"
          placeholderTextColor={Colors?.DEFAULT_GREAY}
          style={styles?.textInput}
          
        />

        <View
          style={styles?.forgotPasswordContainer}>
          <Text
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
            style={{
              fontSize: 13,
              color: Colors?.DEFAULT_BLACK,
            }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{width: '100%', height: '3%'}} />
        <TouchableOpacity
          style={styles?.button}>
          <Text
            style={styles?.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
        <View style={{width: '100%', height: '1%'}} />
        <Text style={{fontSize: 15, color: Colors?.DEFAULT_BLACK}}>OR</Text>
        <View style={{width: '100%', height: '1%'}} />
        <TouchableOpacity
            style={styles?.button}
          onPress={() => navigation.navigate('ForgotPasswordOtpToLogin')}>
          <Text
           style={styles?.buttonText}>
            OTP Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExistingUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
  mainContainer:{
    width: Display?.setWidth(95),
    height: Display?.setWidth(95),
    backgroundColor: Colors?.DEFAULT_WHITE,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:10
  },
  passwordText:{
    fontSize: 15,
    color: Colors?.DEFAULT_BLACK,
    fontWeight: '600',
  },
  textInput:{
    backgroundColor: Colors?.DEFAULT_WHITE,
            width: '70%',
            height: Display?.setWidth(10),
            borderColor: Colors?.DEFAULT_GREAY,
            borderWidth: 0.4,
            borderRadius: 3,
            alignSelf:'center'
  },
  forgotPasswordContainer:{
    alignItems: 'flex-end',

            width: '70%',
            height: '7%',
  },
  button:{
    backgroundColor: Colors?.DEFAULT_BLUE,
    width: '70%',
    height: Display?.setWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText:{
    color: Colors?.DEFAULT_WHITE,
    fontSize: 15,
   
  }
});
