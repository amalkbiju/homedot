const types = {
  USER_LOCAION_LATITUDE: 'USER_LOCAION_LATITUDE',
  USER_LOCAION_LONGITUDE: 'USER_LOCAION_LONGITUDE',
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
export default {
  types,
  setUserLocationLatitue,
  setUserLocationLongitue,
};
