const types = {
  USER_LOCAION_LATITUDE: 'USER_LOCAION_LATITUDE',
  USER_LOCAION_LONGITUDE: 'USER_LOCAION_LONGITUDE',
  LOCATION_NAME: 'LOCATION_NAME',
};
const setUserLocationLatitue = userLocationLatitue => {
  return {
    type: types.USER_LOCAION_LATITUDE,
    payload: userLocationLatitue,
  };
};
const setUserLocationLongitue = userLocationLongitue => {
  return {
    type: types.USER_LOCAION_LONGITUDE,
    payload: userLocationLongitue,
  };
};
const setLocationName = locationname => {
  return {
    type: types?.LOCATION_NAME,
    payload: locationname,
  };
};
export default {
  types,
  setUserLocationLatitue,
  setUserLocationLongitue,
  setLocationName,
};
