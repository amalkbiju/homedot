const {default: GeneralAction} = require('../action/GeneralAction');

const initialState = {
  userLocationLatitue: 0,
  userLocationLongitue: 0,
  locationName: '',
};
const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case GeneralAction.types.USER_LOCAION_LATITUDE:
      return {...state, userLocationLatitue: action.payload};
    case GeneralAction.types.USER_LOCAION_LONGITUDE:
      return {...state, userLocationLongitue: action.payload};
    case GeneralAction.types.LOCATION_NAME:
      return {...state, locationName: action.payload};
    default:
      return state;
  }
};
export default GeneralReducer;
