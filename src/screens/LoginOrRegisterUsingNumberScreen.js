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
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import Fonts from '../utils/Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CountryFlagServices from '../services/CountryFlagServices';
import CountryCode from '../contants/CountryCode';
const LoginOrRegisterUsingNumberScreen = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'India'),
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={styles?.conatiner}>
        {/* <Text style={styles?.homeDotText}>home.</Text> */}
        {/* <Image
          source={require('../assets/images/homedotText.png')}
          style={{
            width: '45%',
            height: '9%',
            tintColor: Colors?.DEFAULT_BLUE,
          }}
        /> */}
        <View style={{width: '100%', height: '8%'}} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles?.textInpuTandButtonConatainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '10%', height: '100%'}} />
              <Text style={{fontSize: 14, color: Colors?.DEFAULT_GREAY}}>
                Phone number
              </Text>
            </View>
            <View style={{width: '100%', height: '1%'}} />
            {/* <TextInput
              placeholder="+91"
              placeholderTextColor={Colors?.DEFAULT_GREAY}
              style={styles?.textInput}
            /> */}
            <View
              style={{
                width: '80%',
                height: Display?.setWidth(10),

                alignSelf: 'center',
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 0.3,
                borderColor: Colors?.DEFAULT_GREAY,
              }}>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{
                    uri: CountryFlagServices?.getFlagIcon(selectedCountry.code),
                  }}
                  style={{height: 18, width: 20}}
                />
                <Text>{selectedCountry?.dial_code}</Text>
                <MaterialCommunityIcons />
              </TouchableOpacity>
              <TextInput
                style={{
                  width: '75%',
                  height: '100%',
                  color: Colors?.DEFAULT_BLACK,
                }}
              />
            </View>
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
              onPress={() => navigation?.navigate('UserOrProfessional')}>
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
