import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';

const UserOrProfessional = ({navigation}) => {
  return (
    <View style={styles?.container}>
      <TouchableOpacity
        style={{
          backgroundColor: Colors?.DEFAULT_BLUE,
          width: '70%',
          height: Display?.setWidth(10),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
        onPress={() => navigation?.navigate('UserRegistrationScreen')}>
        <Text
          style={{
            fontSize: 15,
            color: Colors?.DEFAULT_WHITE,
            fontWeight: '600',
          }}>
          User
        </Text>
      </TouchableOpacity>
      <View style={{width: '100%', height: '4%'}} />
      <TouchableOpacity
        style={{
          backgroundColor: Colors?.DEFAULT_BLUE,
          width: '70%',
          height: Display?.setWidth(10),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
        }}
        onPress={() => navigation?.navigate('ProfessionalRegisterScreen')}>
        <Text
          style={{
            fontSize: 15,
            color: Colors?.DEFAULT_WHITE,
            fontWeight: '600',
          }}>
          Professional
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserOrProfessional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
