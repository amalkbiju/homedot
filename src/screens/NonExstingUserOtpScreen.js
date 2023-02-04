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

const NonExstingUserOtpScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles?.KeyboardAvoidingViewStyle}>
      <SafeAreaView style={styles?.conatiner}>
        <View style={styles?.otpMainContainer}>
          <Text style={styles?.otpText}>OTP Varification</Text>
          <View style={{ width: '100%', height: '3%' }} />
          <Text style={styles?.fourDigithText}>
            Enter 4 digit code sent to +XXXXXXXXXX
          </Text>

          <View style={styles?.textInputMainConatiner}>
            <TextInput
              style={styles?.textInput}
              textAlign="center"
              keyboardType="number-pad"
            />
            <View style={{ width: '5%', height: '100%' }} />
            <TextInput
              style={styles?.textInput}
              textAlign="center"
              keyboardType="number-pad"
            />
            <View style={{ width: '5%', height: '100%' }} />
            <TextInput
              style={styles?.textInput}
              textAlign="center"
              keyboardType="number-pad"
            />
            <View style={{ width: '5%', height: '100%' }} />
            <TextInput
              style={styles?.textInput}
              textAlign="center"
              keyboardType="number-pad"
            />
          </View>



          <TouchableOpacity style={styles?.button}>
            <Text style={styles?.bottonText}>Verify OTP</Text>
          </TouchableOpacity>
          <View style={{ width: '100%', height: '5%' }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles?.dontReceiveOtpText}>Don't recevice OTP </Text>
            <Text style={styles?.resentText}>Resent OTP</Text>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default NonExstingUserOtpScreen;

const styles = StyleSheet.create({
  KeyboardAvoidingViewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpMainContainer: {
    width: Display?.setWidth(95),
    height: Display?.setWidth(95),
    backgroundColor: Colors?.DEFAULT_WHITE,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:10
  },
  otpText: {
    fontSize: 15,
    color: Colors?.DEFAULT_BLACK,
    fontWeight: '600',
  },
  fourDigithText: {
    fontSize: 11,
    color: Colors?.DEFAULT_BLACK,

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
    width: '60%',
    height: Display?.setWidth(10),
    backgroundColor: Colors?.DEFAULT_BLUE,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonText: {
    fontSize: 13,

    color: Colors?.DEFAULT_WHITE,
  },
});
