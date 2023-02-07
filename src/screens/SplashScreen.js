import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginOrRegisterUsingNumberScreen');
    }, 2500);
  }, []);
  return (
    <View style={styles?.container}>
      {/* <Text style={styles?.homeDotText}>home.</Text> */}
      <Image
        source={require('../assets/images/homedotText.png')}
        style={{
          width: '60%',
          height: '12%',
          tintColor: Colors?.DEFAULT_WHITE,
        }}
      />
      <View style={{width: '100%', height: '2%'}} />
      <Text style={styles?.demandsText}>Your Home Demands</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.DEFAULT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeDotText: {
    fontFamily: Fonts?.BUBBLE_GUM_SANS,
    fontSize: 80,

    color: Colors?.DEFAULT_WHITE,
  },
  demandsText: {
    fontSize: 18,
    color: Colors?.DEFAULT_WHITE,
    fontWeight: '800',
  },
});
