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

const NewPasswordScreen = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <View
        style={styles?.mainConatiner}>
        <Text
          style={styles?.enterNewPassText}>
        Enter New Password
        </Text>
<View style={{width:'100%',height:'3%'}}/>
        <View
          style={styles?.newPassMainContainer}>
          <View style={{width: '15%', height: '100%'}} />
          <Text style={{fontSize: 13, color: Colors?.DEFAULT_BLACK}}>
            New Password
          </Text>
        </View>
        <TextInput
          style={styles?.textInput}
          placeholder={'Password'}
          placeholderTextColor={Colors?.DEFAULT_LIGHTGREY}
          secureTextEntry={true}
        />

        <View
          style={styles?.newPassMainContainer}>
          <View style={{width: '15%', height: '100%'}} />
          <Text style={{fontSize: 13, color: Colors?.DEFAULT_BLACK}}>
            Conform Password
          </Text>
        </View>
        <TextInput
          style={styles?.textInput}
          placeholder={'Conform Password'}
          placeholderTextColor={Colors?.DEFAULT_LIGHTGREY}
          secureTextEntry={true}
        />
        <View
          style={{
            width: '100%',
            height: '7%',
          }}
        />
        <TouchableOpacity
          style={styles?.button}
          onPress={() => navigation.navigate('NewPasswordScreen')}>
          <Text
            style={styles?.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_LIGHTGREY,
  },
  mainConatiner:{
    width: Display?.setWidth(95),
    height: Display?.setWidth(95),
    backgroundColor: Colors?.DEFAULT_WHITE,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:10
  },
  enterNewPassText:{
    fontSize: 15, color: Colors?.DEFAULT_BLACK,fontWeight:'600'
  },
  newPassMainContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '10%',
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
    fontSize: 13,
  }
});
