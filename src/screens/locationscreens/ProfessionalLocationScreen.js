import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  LogBox,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Display from '../../utils/Display';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {useDispatch, useSelector} from 'react-redux';
import GeneralAction from '../../redux/action/GeneralAction';

const ProfessionalLocationScreen = ({navigation}) => {
  const [locationPermissionError, setLocationPermissionError] = useState(null);
  const [placeSearchLayout, setPlaceSearchLayout] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  useEffect(() => {
    currentLocationPermission();
    currentLocationName();
  }, []);
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

      Map();
    });
  };
  const latitude = useSelector(
    state => state?.generalState?.userLocationLatitue,
  );
  const longitude = useSelector(
    state => state?.generalState?.userLocationLongitue,
  );
  console?.log('redux latitude', latitude);
  console?.log('redux longitude', longitude);
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
        console.log('current loaction name', addressComponent);
      })
      .catch(error => console.warn(error));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <SafeAreaView style={styles?.container}>
        {/* <View style={styles?.headerConatiner}>
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
      </View> */}
        <ScrollView>
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
              height: Display?.setHeight(86),
            }}>
            <View
              style={{
                width: '100%',
                height: '2%',
              }}
            />
            <View
              style={{
                width: Display?.setWidth(80),
                height: Display?.setWidth(80),
                backgroundColor: Colors?.DEFAULT_LIGHTGREY,
                borderRadius: 5,
                alignSelf: 'center',
              }}>
              <Map />
            </View>
            <View
              style={{
                width: '100%',
                height: '5%',
              }}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: Display?.setWidth(80),
                    height: Display?.setWidth(10),
                    alignSelf: 'center',
                    borderRadius: 4,
                    borderWidth: 1.2,
                    borderColor: Colors?.DEFAULT_LIGHTGREY,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      width: '80%',
                      paddingLeft: 5,
                    }}>
                    Location
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingRight: 6,
                    }}
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
                <View
                  style={{
                    width: '100%',
                    height: Display?.setHeight(5),
                  }}
                />
                <TextInput
                  placeholder="Enter Your Address"
                  placeholderTextColor={Colors?.DEFAULT_GREAY}
                  style={{
                    width: Display?.setWidth(80),
                    height: Display?.setWidth(13),
                    borderRadius: 4,
                    borderWidth: 1.2,
                    borderColor: Colors?.DEFAULT_LIGHTGREY,

                    alignSelf: 'center',
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
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

                  currentLocationName();
                  dispatch(
                    GeneralAction?.setUserLocationLatitue(
                      details?.geometry?.location?.lat,
                    ),
                  );
                  dispatch(
                    GeneralAction?.setUserLocationLongitue(
                      details?.geometry?.location?.lng,
                    ),
                  );
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
                    backgroundColor: Colors?.DEFAULT_WHITE,
                    borderRadius: 4,
                    borderWidth: 1.2,
                    borderColor: Colors?.DEFAULT_LIGHTGREY,
                    borderRadius: 2,
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
            <View
              style={{
                width: '100%',
                height: Display?.setHeight(5),
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
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    height: Display?.setHeight(11),
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
    width: Display?.setWidth(80),

    position: 'absolute',
    alignSelf: 'center',
  },
});
