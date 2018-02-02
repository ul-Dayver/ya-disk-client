import {
  REQUEST_URL,
  FETCH_LIST_FAILURE,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_REQUEST,
  SET_TOKEN,
  RESET_TOKEN
} from '../constants'

const initialState = { 
  currentPath: '', 
  list: [],
  isLoading: false,
  token: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
        currentPath: '/', 
      };
    case RESET_TOKEN:
      return {
        ...state,
        token: '',
        currentPath: '', 
      };
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        list: [],
        isLoading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
        currentPath: action.currentPath, 
        isLoading: false,
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;