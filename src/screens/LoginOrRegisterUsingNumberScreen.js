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
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import Fonts from '../utils/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryFlagServices from '../services/CountryFlagServices';
import CountryCode from '../contants/CountryCode';
import FlagItem from '../compontent/FlagItem';
const LoginOrRegisterUsingNumberScreen = ({navigation}) => {
  const getDropdownStyle = y => ({...styles.countryDropdown, top: y + 40});
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'India'),
  );
  const [inputsContainerY, setInputsContainerY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const closeDropdown = (pageX, pageY) => {
    if (isDropdownOpen) {
      if (
        pageX < dropdownLayout?.x ||
        pageX > dropdownLayout?.x + dropdownLayout?.width ||
        pageY < dropdownLayout?.y ||
        pageY > dropdownLayout?.y + dropdownLayout?.height
      ) {
        setIsDropdownOpen(false);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView
        style={styles?.conatiner}
        onStartShouldSetResponder={({nativeEvent: {pageX, pageY}}) =>
          closeDropdown(pageX, pageY)
        }>
        {/* <Text style={styles?.homeDotText}>home.</Text> */}
        <Image
          source={require('../assets/images/homedotText.png')}
          style={{
            width: '45%',
            height: '9%',
            tintColor: Colors?.DEFAULT_BLUE,
          }}
        />
        <View style={{width: '100%', height: '8%'}} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              style={styles?.textInputConatainer}
              onLayout={({
                nativeEvent: {
                  layout: {y},
                },
              }) => setInputsContainerY(y)}>
              <TouchableOpacity
                style={styles?.countrySelectDropButton}
                onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Image
                  source={{
                    uri: CountryFlagServices?.getFlagIcon(selectedCountry.code),
                  }}
                  style={{height: 18, width: 20, marginLeft: 5}}
                />
                <Text style={styles?.countryDropDownDialCodeText}>
                  {selectedCountry?.dial_code}
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={18}
                  color={Colors?.DEFAULT_BLACK}
                />
              </TouchableOpacity>
              <TextInput keyboardType="number-pad" style={styles?.textInput} />
            </View>
            {isDropdownOpen ? (
              <View
                style={getDropdownStyle(inputsContainerY)}
                onLayout={({
                  nativeEvent: {
                    layout: {x, y, height, width},
                  },
                }) => setDropdownLayout({x, y, height, width})}>
                <FlatList
                  data={CountryCode}
                  keyExtractor={item => item.code}
                  renderItem={({item}) => (
                    <FlagItem
                      {...item}
                      onPress={country => {
                        setSelectedCountry(country);
                        setIsDropdownOpen(false);
                      }}
                    />
                  )}
                />
              </View>
            ) : null}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  height: '100%',
                }}
              />
              <Text
                style={styles?.siginInText}
                onPress={() =>
                  navigation?.navigate('LoginOrRegisterUsingEmailScreen')
                }>
                Login with Email Address
              </Text>
            </View>
            <View style={{width: '100%', height: '12%'}} />
            <TouchableOpacity
              style={styles?.continueButton}
              onPress={() => navigation?.navigate('UserOrProfessional')}>
              <Text style={styles?.continueButtonText}>Continue</Text>
            </TouchableOpacity>
            <View style={{width: '100%', height: '1%'}} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
  textInputConatainer: {
    width: Display?.setWidth(65),
    height: Display?.setWidth(10),
    alignSelf: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: Colors?.DEFAULT_GREAY,
  },
  textInput: {
    width: '73%',
    height: '100%',
    color: Colors?.DEFAULT_BLACK,
  },
  continueButton: {
    backgroundColor: Colors?.DEFAULT_BLUE,
    width: Display?.setWidth(65),
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
  countryDropdown: {
    backgroundColor: Colors.DEFAULT_LIGHTGREY,
    position: 'absolute',
    width: Display.setWidth(70),
    height: Display.setHeight(40),
    marginLeft: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: Colors.DEFAULT_GREAY,
    zIndex: 3,
    alignSelf: 'center',
  },
  flagImage: {
    height: 15,
    width: 25,
    marginRight: 10,
  },
  flagText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,

    marginRight: 10,
  },
  countrySelectDropButton: {
    width: '27%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countryDropDownDialCodeText: {
    fontSize: 14,
    color: Colors?.DEFAULT_BLACK,
    paddingLeft: 2,
    marginLeft: 2,
  },
});
