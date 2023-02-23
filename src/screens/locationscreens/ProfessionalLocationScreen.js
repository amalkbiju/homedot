import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Display from '../../utils/Display';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
const ProfessionalLocationScreen = ({navigation}) => {
  const [latitude, setLatitude] = useState(10.0078598);
  const [longitude, setLongitude] = useState(76.3237177);
  const [locationPermissionError, setLocationPermissionError] = useState(null);
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
    });
  };
  const Map = () => {
    return (
      <MapView
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 5,
        }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
    );
  };
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
            borderRadius: 5,
          }}>
          {/* <MapView
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
            }}
            initialRegion={{
              latitude: 9.9312,
              longitude: 76.2673,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              style={{
                width: 30,
                height: 20,
              }}
              coordinate={{
                latitude: 9.9312,
                longitude: 76.2673,
              }}
            />
          </MapView> */}
          <Map />
        </View>
        <View
          style={{
            width: '100%',
            height: '6%',
          }}
        />
        <View style={styles?.locatonContainer}>
          {/* <GooglePlacesAutocomplete
            style={{
              paddingLeft: 5,
            }}
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: 'AIzaSyBc1HZwcIu_vV6wpq7x0Z4ZS0SZkWwbGV8',
              language: 'en',
            }}
          /> */}
          <View style={styles?.locatonIconContainer}>
            <TouchableOpacity onPress={() => currentLocationPermission()}>
              <MaterialIcons
                name="my-location"
                size={25}
                color={Colors?.DEFAULT_BLUE}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '5%',
          }}
        />
        <TextInput
          placeholder="Enter Your Address"
          placeholderTextColor={Colors?.DEFAULT_GREAY}
          style={{
            width: Display?.setWidth(80),
            height: Display?.setWidth(12),
            borderRadius: 4,
            borderWidth: 1.2,
            borderColor: Colors?.DEFAULT_LIGHTGREY,
          }}
        />
        <View
          style={{
            width: '100%',
            height: '4%',
          }}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors?.DEFAULT_WHITE,
              width: Display?.setWidth(30),
              height: Display?.setWidth(10),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              borderColor: Colors?.DEFAULT_BLUE,
              borderWidth: 1,
            }}
            onPress={() => navigation.goBack()}>
            <Text
              style={{
                fontSize: 15,
                color: Colors?.DEFAULT_BLUE,
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '8%',
              height: '100%',
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: Colors?.DEFAULT_BLUE,
              width: Display?.setWidth(30),
              height: Display?.setWidth(10),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: Colors?.DEFAULT_WHITE,
              }}>
              Ok
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            borderWidth: 1,
            width: Display?.setWidth(100),
          }}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            styles={{}}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
              // setCoordinatePins({
              //   latitude:details?.
              // })
              setLatitude(details?.geometry?.location?.lat);
              setLongitude(details?.geometry?.location?.lng);
              Map();
            }}
            query={{
              key: 'AIzaSyBc1HZwcIu_vV6wpq7x0Z4ZS0SZkWwbGV8',
              language: 'en',
            }}
          />
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
