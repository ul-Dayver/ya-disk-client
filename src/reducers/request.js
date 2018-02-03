import {
  FETCH_LIST,
  REQUEST_FAILURE,
  REQUEST_SUCCESS,
  REQUEST_START
} from '../constants'
  
const initialState = {
  isLoading: false
};
  
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_START:
      return {
        isLoading: true,
      }
    case FETCH_LIST:
    case REQUEST_SUCCESS:
      return {
        isLoading: false,
      }
    case REQUEST_FAILURE:
      return {
        isLoading: false,
      }
    default:
      return state
  }
}