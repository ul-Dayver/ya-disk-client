import { connect } from 'react-redux'
import {
  setToken,
  resetToken,
  fetchList,
  uploadFile,
  downloadFile,
  createDir,
  deleteDir
} from '../actions';

function mergeProps (stateProps, dispatchProps, routesProps) {
  const { dispatch } = dispatchProps
  const { pathname } = routesProps.location

  return Object.assign({},stateProps, routesProps, {
	Login: (token) => dispatch(setToken(token)),
	Logout: () => dispatch(resetToken()),
	fetchList: (path) => dispatch(fetchList('disk:' + path)),
	createDir: (path) => dispatch(createDir(path, 'disk:' + pathname)),
	deleteDir: (path) => dispatch(deleteDir(path, 'disk:' + pathname)),
	uploadFile: (path, formData) => dispatch(uploadFile(path, formData, 'disk:' + pathname)),
	downloadFile: (path, name) => dispatch(downloadFile(path, name))
  })
}

const connectFunction = connect((state) => Object.assign({}, state), null, mergeProps);
export default connectFunction;