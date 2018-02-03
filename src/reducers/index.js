import {
  FETCH_LIST,
  SET_TOKEN,
  RESET_TOKEN
} from '../constants'

const initialState = {
  list: [],
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case RESET_TOKEN:
      return {
        ...state,
        token: null
      };
    case FETCH_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};

export default reducer;