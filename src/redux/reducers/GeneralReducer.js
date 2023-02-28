const {default: GeneralAction} = require('../action/GeneralAction');

const initialState = {
  userLocationLatitue: 8.8756778,
  userLocationLongitue: 76.58891630000001,
};
const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case GeneralAction.types.USER_LOCAION_LATITUDE:
      return {...state, userLocationLatitue: action.payload};
    case GeneralAction.types.USER_LOCAION_LONGITUDE:
      return {...state, userLocationLongitue: action.payload};
    default:
      return state;
  }
};
export default GeneralReducer;
