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
  Image,
} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import Fonts from '../utils/Fonts';
const LoginOrRegisterUsingNumberScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={styles?.conatiner}>
        {/* <Text style={styles?.homeDotText}>home.</Text> */}
        <Image
          source={require('../assets/images/homedotText.png')}
          style={{
            width: '45%',
            height: '9%',
            tintColor: Colors?.DEFAULT_BLUE,
          }}
        />
        <View style={{width: '100%', height: '12%'}} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles?.textInpuTandButtonConatainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '10%', height: '100%'}} />
              <Text style={{fontSize: 14, color: Colors?.DEFAULT_GREAY}}>
                Phone number
              </Text>
            </View>
            <View style={{width: '100%', height: '1%'}} />
            <TextInput
              placeholder="+91"
              placeholderTextColor={Colors?.DEFAULT_GREAY}
              style={styles?.textInput}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{height: '100%', width: '10%'}} />
              <Text
                style={styles?.siginInText}
                onPress={() =>
                  navigation?.navigate('LoginOrRegisterUsingEmailScreen')
                }>
                Login with Email Address
              </Text>
            </View>
            <View style={{width: '100%', height: '20%'}} />
            <TouchableOpacity
              style={styles?.continueButton}
              onPress={() => navigation?.navigate('NonExstingUserOtpScreen')}>
              <Text style={styles?.continueButtonText}>Continue</Text>
            </TouchableOpacity>
            <View style={{width: '100%', height: '1%'}} />
            <View
              style={{flexDirection: 'row', alignItems: 'center', left: 33}}>
              <Text style={styles?.alreadyText}>Already have account? </Text>
              <Text
                style={styles?.siginInText}
                onPress={() => navigation?.navigate('ExistingUserScreen')}>
                SignIn
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginOrRegisterUsingNumberScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  homeDotText: {
    fontFamily: Fonts?.BUBBLEBOY_REGULAR,
    fontSize: 40,
    color: Colors?.DEFAULT_BLUE,
    alignSelf: 'center',
  },
  textInpuTandButtonConatainer: {
    width: Display?.setWidth(85),
    height: Display?.setHeight(20),
  },
  textInput: {
    backgroundColor: Colors?.DEFAULT_WHITE,
    width: '80%',
    height: Display?.setWidth(10),
    borderColor: Colors?.DEFAULT_GREAY,
    borderWidth: 0.4,
    borderRadius: 4,
    alignSelf: 'center',
  },
  continueButton: {
    backgroundColor: Colors?.DEFAULT_BLUE,
    width: '80%',
    height: Display?.setWidth(10),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  continueButtonText: {
    fontSize: 13,
    color: Colors?.DEFAULT_WHITE,
  },
  alreadyText: {
    fontSize: 13,

    color: Colors?.DEFAULT_GREAY,
  },
  siginInText: {
    fontSize: 13,

    color: Colors?.DEFAULT_BLUE,
  },
});