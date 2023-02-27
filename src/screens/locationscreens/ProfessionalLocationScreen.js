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
import Geocoder from 'react-native-geocoding';
const ProfessionalLocationScreen = ({navigation}) => {
  const [latitude, setLatitude] = useState(10.0078598);
  const [longitude, setLongitude] = useState(76.3237177);
  const [locationPermissionError, setLocationPermissionError] = useState(null);
  const [placeSearchLayout, setPlaceSearchLayout] = useState({});
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
      setLatitude(data.coords.latitude);
      setLongitude(data.coords.longitude);
      Map();
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
  const currentLocationName = () => {
    Geocoder.init('AIzaSyBc1HZwcIu_vV6wpq7x0Z4ZS0SZkWwbGV8');
    Geocoder.from(latitude, longitude)
      .then(json => {
        var addressComponent = json.results[0].formatted_address;
        console.log(addressComponent);
      })
      .catch(error => console.warn(error));
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
        <View style={styles?.googlePlaceAutoComplae}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              // console.log(data, details);
              // setCoordinatePins({
              //   latitude:details?.
              // })
              setLatitude(details?.geometry?.location?.lat);
              setLongitude(details?.geometry?.location?.lng);
              currentLocationName();
              Map();
            }}
            query={{
              key: 'AIzaSyBc1HZwcIu_vV6wpq7x0Z4ZS0SZkWwbGV8',
              language: 'en',
            }}
            styles={{
              textInputContainer: {
                marginTop: 5,
              },
              textInput: {
                height: Display?.setWidth(10),
                color: 'black',
                fontSize: 16,
                backgroundColor: '#ddd',
                borderColor: Colors?.DEFAULT_BLACK,
                borderWidth: 0.5,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              listView: {
                position: 'relative',
                zIndex: 3,
                marginTop: 0,
                padding: 0,
              },
              row: {
                backgroundColor: '#FFFFFF',
                height: Display?.setWidth(10),
                flexDirection: 'row',
              },
              separator: {
                height: 0.5,
                backgroundColor: Colors?.DEFAULT_BLACK,
              },
              description: {},
              loader: {
                flexDirection: 'row',
                justifyContent: 'flex-end',
                height: 20,
              },
            }}
          />
        </View>
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
            <TouchableOpacity
              onPress={() => {
                currentLocationPermission();
                currentLocationName();
              }}>
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
  googlePlaceAutoComplae: {
    width: Display?.setWidth(90),
    position: 'absolute',
    zIndex: 3,
  },
});
