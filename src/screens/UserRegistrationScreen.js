import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const UserRegistrationScreen = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <View style={styles?.headerMianConatiner}>
        <AntDesign
          name="left"
          size={23}
          style={{
            paddingLeft: 2,
          }}
          onPress={() => navigation?.goBack()}
        />
        <View
          style={{
            width: '100%',
            height: '10%',
          }}
        />
        <Text style={styles?.signupText}>Sign Up</Text>
      </View>
      <View
        style={{
          width: Display?.setWidth(100),
          height: '90%',
          backgroundColor: Colors?.DEFAULT_WHITE,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="My Name"
          placeholderTextColor={Colors?.DEFAULT_GREAY}
          style={styles?.textInput}
        />
        <View
          style={{
            width: '100%',
            height: '8%',
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors?.DEFAULT_GREAY}
          style={styles?.textInput}
        />
        <View
          style={{
            width: '100%',
            height: '8%',
          }}
        />
        <TextInput
          placeholder="Contact Number"
          placeholderTextColor={Colors?.DEFAULT_GREAY}
          style={styles?.textInput}
        />
        <View
          style={{
            width: '100%',
            height: '8%',
          }}
        />
        <View style={styles?.locatonContainer}>
          <TextInput
            placeholder="Location"
            placeholderTextColor={Colors?.DEFAULT_GREAY}
            style={{
              width: '80%',
              height: '100%',
            }}
          />
          <View style={styles?.locatonIconContainer}>
            <MaterialIcons
              name="my-location"
              size={25}
              color={Colors?.DEFAULT_BLUE}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '8%',
          }}
        />
        <TouchableOpacity style={styles?.button}>
          <Text style={styles?.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserRegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  textInput: {
    width: Display?.setWidth(70),
    height: Display?.setWidth(10),
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: Colors?.DEFAULT_LIGHTGREY,
  },
  locatonContainer: {
    width: Display?.setWidth(70),
    height: Display?.setWidth(10),
    borderRadius: 4,
    borderWidth: 1.2,
    borderColor: Colors?.DEFAULT_LIGHTGREY,
    flexDirection: 'row',
  },
  locatonIconContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: Display?.setWidth(70),
    height: Display?.setWidth(11),
    backgroundColor: Colors?.DEFAULT_BLUE,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: Colors?.DEFAULT_WHITE,
  },
  headerMianConatiner: {
    width: Display?.setWidth(100),
    height: '10%',
  },
  signupText: {
    fontSize: 25,
    color: Colors?.DEFAULT_GREAY,
    alignSelf: 'center',
  },
});
