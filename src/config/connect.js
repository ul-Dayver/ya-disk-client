import { connect } from 'react-redux'
import {
	partialCopyObj,
	setToken,
	resetToken,
	fetchListRequest,
	fetchListSuccess,
	fetchListFailure,
	fetchList
} from '../actions';
//import ServerRequest, {RESTful} from '../components/serverRequest'


function mergeProps (stateProps, dispatchProps, routesProps) {
	const { dispatch } = dispatchProps
  return Object.assign({},stateProps, routesProps, {
	  Login: (token) => dispatch(setToken(token)),
		fetchList: (path) => dispatch(fetchList(path)),
  })
}

const connectFunction = connect((state) => Object.assign({}, state), null, mergeProps);
export default connectFunction;