import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Display from '../../utils/Display';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ProfessionalLocationScreen = () => {
  return (
    <View style={styles?.container}>
      <View style={styles?.headerConatiner}>
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
            height: '20%',
          }}
        />
        <Text style={styles?.headerText}>Select Your Location</Text>
      </View>
      <View
        style={{
          width: Display?.setWidth(100),
          height: '88%',

          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: '4%',
          }}
        />
        <View
          style={{
            width: Display?.setWidth(80),
            height: Display?.setWidth(80),
            backgroundColor: Colors?.DEFAULT_LIGHTGREY,
          }}></View>
        <View style={styles?.locatonContainer}>
          <View
            style={{
              width: '80%',
              height: '100%',
              justifyContent: 'center',
              paddingLeft: 5,
            }}>
            <Text>Location</Text>
          </View>
          <View style={styles?.locatonIconContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfessionalLocationScreen')}>
              <MaterialIcons
                name="my-location"
                size={25}
                color={Colors?.DEFAULT_BLUE}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfessionalLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  headerConatiner: {
    width: Display?.setWidth(100),
    height: '12%',
  },
  headerText: {
    fontSize: 23,
    color: Colors?.DEFAULT_GREAY,
    alignSelf: 'center',
  },
  locatonContainer: {
    width: Display?.setWidth(80),
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
});
