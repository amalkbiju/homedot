import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {useDispatch, useSelector} from 'react-redux';
import GeneralAction from '../redux/action/GeneralAction';
const UserRegistrationScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    currentLocationPermission();
    currentLocationName();
  }, [currentLocationPermission, currentLocationName]);
  const currentLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Required',
        message: 'HomeDot App needs to Access your location',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      currentLocation();
    } else {
      setLocationPermissionError('Allow permission');
    }
  };
  const currentLocation = () => {
    Geolocation.getCurrentPosition(data => {
      console?.log(data.coords.latitude);
      console?.log('longitude', data.coords.longitude);
      console?.log('location name', data);
      dispatch(GeneralAction?.setUserLocationLatitue(data.coords.latitude));
      dispatch(GeneralAction?.setUserLocationLongitue(data.coords.longitude));
    });
  };
  const latitude = useSelector(
    state => state?.generalState?.userLocationLatitue,
  );
  const longitude = useSelector(
    state => state?.generalState?.userLocationLongitue,
  );

  console?.log('pro screen lan', latitude);
  console?.log('pro screen lon', longitude);

  const currentLocationName = () => {
    Geocoder.init('AIzaSyBc1HZwcIu_vV6wpq7x0Z4ZS0SZkWwbGV8');
    Geocoder.from(latitude, longitude)
      .then(json => {
        var addressComponent = json.results[0].formatted_address;
        // console.log('current loaction name', addressComponent);
        dispatch(GeneralAction?.setLocationName(addressComponent));
      })
      .catch(error => console.warn(error));
  };
  const locationName = useSelector(state => state?.generalState?.locationName);
  console?.log('pro screen current loctaion name', locationName);
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
        <TouchableOpacity
          style={styles?.locatonContainer}
          onPress={() => navigation.navigate('UserLocationScreen')}>
          <View
            style={{
              width: '80%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text
              numberOfLines={1}
              style={{
                color: Colors?.DEFAULT_GREAY,
                fontSize: 13,
                paddingLeft: 3,
              }}>
              {locationName}
            </Text>
          </View>
          <View style={styles?.locatonIconContainer}>
            <MaterialIcons
              name="my-location"
              size={25}
              color={Colors?.DEFAULT_BLUE}
            />
          </View>
        </TouchableOpacity>
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
