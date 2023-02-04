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
        style={{
          width: Display?.setWidth(95),
          height: Display?.setWidth(95),
          backgroundColor: Colors?.DEFAULT_WHITE,
          borderRadius: 2,
          alignItems: 'center',
          justifyContent: 'center',
          elevation:10
        }}>
        <Text
          style={{
            fontSize: 15,
            color: Colors?.DEFAULT_BLACK,
            fontWeight: '600',
          }}>
          Password Assistanse
        </Text>
        <View style={{width: '100%', height: '5%'}} />
        <Text
          style={{
            fontSize: 11.5,
            width: '70%',
            color: Colors?.DEFAULT_BLACK,
          }}>
          Enter the email address or mobile phone number associated with your
          HomeDot account.
        </Text>
        <View style={{width: '100%', height: '5%'}} />
        <TextInput
          placeholder="Email / Phone Number"
          placeholderTextColor={Colors?.DEFAULT_GREAY}
          style={{
            backgroundColor: Colors?.DEFAULT_WHITE,
            width: '70%',
            height: Display?.setWidth(10),
            borderColor: Colors?.DEFAULT_GREAY,
            borderWidth: 0.4,
            borderRadius: 3,
            alignSelf:'center'
          }}
        />
        <View style={{width: '100%', height: '6%'}} />
        <TouchableOpacity
          style={{
            backgroundColor: Colors?.DEFAULT_BLUE,
            width: '70%',
            height: Display?.setWidth(10),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
          }}
          onPress={() =>
            navigation.navigate('ForgotPasswordOtpVvarifiactionScreen')
          }>
          <Text
            style={{
              color: Colors?.DEFAULT_WHITE,
              fontSize: 15,
              fontWeight: '900',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
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
});
