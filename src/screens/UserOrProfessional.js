import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AnimatedTyping from '../utils/AnimationType';
const UserOrProfessional = ({navigation}) => {
  const [showUserView, setShowUserView] = useState(false);
  const [showProfessionalView, setShowProfessionalView] = useState(false);
  const [userTextComplete, setUserTextComplete] = useState(false);
  return (
    <View style={styles?.container}>
      <TouchableOpacity
        style={styles?.button}
        onPress={() => {
          setShowUserView(!showUserView);
          setUserTextComplete(false);
        }}>
        <FontAwesome5 name="user-alt" size={35} color={Colors?.DEFAULT_WHITE} />
        {/* <View style={{width: '100%', height: '4%'}} />
        <Text style={styles?.buttonText}>User</Text> */}
      </TouchableOpacity>
      <View style={{width: '100%', height: '6%'}} />
      <TouchableOpacity
        style={styles?.button}
        // onPress={() => navigation?.navigate('ProfessionalRegisterScreen')}
      >
        <FontAwesome5 name="user-cog" size={35} color={Colors?.DEFAULT_WHITE} />
        {/* <View style={{width: '100%', height: '4%'}} />
        <Text style={styles?.buttonText}>Professional</Text> */}
      </TouchableOpacity>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showUserView}
          onRequestClose={() => {
            setShowUserView(!showUserView);
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 22,
            }}>
            <View
              style={{
                backgroundColor: Colors?.DEFAULT_WHITE,
                width: Display?.setWidth(85),
                height: Display?.setHeight(80),
                elevation: 20,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '10%',
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: '20%',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome5
                  name="user-alt"
                  size={60}
                  color={Colors?.DEFAULT_BLUE}
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors?.DEFAULT_BLUE,
                }}>
                User
              </Text>
              <View
                style={{
                  width: '100%',
                  height: '30%',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AnimatedTyping
                  text={[
                    'If you want to construct, maintain, or upgrade your home.',
                  ]}
                  onComplete={() => setUserTextComplete(true)}
                />
              </View>
              <View style={{width: '100%', height: '5%'}} />

              {userTextComplete ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors?.DEFAULT_BLUE,
                    width: '60%',
                    height: Display?.setWidth(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}>
                  <Text>Continue</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default UserOrProfessional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  button: {
    backgroundColor: Colors?.DEFAULT_BLUE,
    width: Display?.setWidth(40),
    height: Display?.setWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 20,
  },
  buttonText: {
    fontSize: 15,
    color: Colors?.DEFAULT_WHITE,
    fontWeight: '900',
  },
});
