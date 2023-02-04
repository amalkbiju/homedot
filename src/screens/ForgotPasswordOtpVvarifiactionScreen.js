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

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <View
        style={styles?.mainContainer}>
        <Text
          style={styles?.varificationText}>
          Verification required
        </Text>
        <View
          style={{
            width: '100%',
            height: '3%',
          }}
        />
        <Text
          style={styles?.sentOtpText}>
          To continue, complete this verification step. We've sent an OTP to the
          email or Phone ***********. Please enter it below to complete
          verification.{' '}
        </Text>
       
        <View style={styles?.textInputMainConatiner}>
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
          <View style={{width: '4%', height: '100%'}} />
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
          <View style={{width: '4%', height: '100%'}} />
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
          <View style={{width: '4%', height: '100%'}} />
          <TextInput
            style={styles?.textInput}
            textAlign="center"
            keyboardType="number-pad"
          />
        </View>
     
       
        <TouchableOpacity
          style={styles?.button}
          onPress={() => navigation.navigate('NewPasswordScreen')}>
          <Text style={styles?.bottonText}>Continue</Text>
        </TouchableOpacity>
        <View style={{width: '100%', height: '2%'}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles?.dontReceiveOtpText}>Don't recevice OTP </Text>
          <Text style={styles?.resentText}>Resent OTP</Text>
        </View>
     
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
  mainContainer: {
    width: Display?.setWidth(95),
    height: Display?.setWidth(95),
    backgroundColor: Colors?.DEFAULT_WHITE,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:10
  },
  varificationText: {
    fontSize: 15,
    color: Colors?.DEFAULT_BLACK,
    fontWeight: '600',
  },
  sentOtpText: {
    fontSize: 12,
    color: Colors?.DEFAULT_BLACK,
    width:'60%'
    
  },
  textInputMainConatiner: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: Colors?.DEFAULT_WHITE,
    width: Display?.setWidth(10),
    height: Display?.setWidth(10),
    borderWidth: 0.7,
    borderRadius: 1,
    borderColor: Colors?.DEFAULT_LIGHTGREY,
    color: Colors?.DEFAULT_BLACK,
    fontSize: 18,
  },
  dontReceiveOtpText: {
    fontSize: 12,
    
    color: Colors?.DEFAULT_GREAY,
  },
  resentText: {
    fontSize: 12,
  
    color: Colors?.DEFAULT_BLUE,
  },
  button: {
    backgroundColor: Colors?.DEFAULT_BLUE,
    width: '60%',
    height: Display?.setWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  bottonText: {
    fontSize: 13,
  
    color: Colors?.DEFAULT_WHITE,
  },
});
