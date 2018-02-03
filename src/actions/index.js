import {
  REQUEST_URL,
  REQUEST_FAILURE,
  REQUEST_SUCCESS,
  REQUEST_START,
  FETCH_LIST,
  SET_TOKEN,
  RESET_TOKEN
} from '../constants'

const partialCopyObj = (obj, keys) => {
  let newObj = {}
  for (let key in obj) {
    if(keys.indexOf(key) !== -1)
      newObj[key] = obj[key]
  }
  return newObj
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token
  }
}

export const resetToken = () => {
  return {
    type: RESET_TOKEN
  }
}

const startRequest = () => {
  return {
    type: REQUEST_START
  }
}

const requestSuccess = () => {
  return {
    type: REQUEST_SUCCESS
  }
}

const fetchListSuccess = (json) => {
  const list = json._embedded.items.map((item) => {
    if (item.type === 'dir') {
      return partialCopyObj(item, ['type','name','path'])
    } else {
      return partialCopyObj(item, ['type','name', 'path', 'size'])
    }
  })
  const currentPath = json.path
  
  return {
    type: FETCH_LIST,
    list,
    currentPath,
  }
}

const requestFailure = () => {
  return {
    type: REQUEST_FAILURE,
  }
}

function Request(dispatch, getState, urlParams, method) {
  dispatch(startRequest())

  const headers = new Headers({ 'Authorization' : `OAuth ${getState().app.token}` })
  const init = {
    headers: headers,
    method: method || 'GET'
  }
  return fetch(REQUEST_URL + urlParams, init)
    .then((response) => {
      if(response.status === 401) {
        dispatch(resetToken())
        throw Error(response.statusText)
      }
      return response
    })
    .catch(function(error) { 
      console.log(error) 
      dispatch(requestFailure())
    })
}

export function fetchList(path) {
  return (dispatch, getState) => {
    return Request(dispatch, getState, '?path=' + encodeURIComponent(path))
      .then(response => response.json())
      .then(json => dispatch(fetchListSuccess(json)))
  }
}

export function downloadFile(path, name) {
  return (dispatch, getState) => {
    return Request(dispatch, getState, '/download?path=' + encodeURIComponent(path))
      .then(response => response.json())
      .then(function(json) {
        let a = document.createElement('a')
        a.href = json.href
        a.setAttribute('download', name)
        a.click()
      })
      .then(() => dispatch(requestSuccess()))
  }
}

export function uploadFile(path, formData, currentPath) {
  return (dispatch, getState) => {
    return Request(dispatch, getState, '/upload?path=' + path + '&overwrite=true')
      .then(response => response.json())
      .then((json) => {
          dispatch(startRequest())
          fetch(json.href, {
            method: json.method,
            body: formData
          })
          .then(() => dispatch(fetchList(currentPath)))
          .catch(function(error) { 
            console.log(error) 
            dispatch(requestFailure())
          })
        }
      )
  }
}

export function createDir(path, currentPath) {
  return (dispatch, getState) => {
    return Request(dispatch, getState, '?path=' + encodeURIComponent(path), 'PUT')
      .then(() => dispatch(fetchList(currentPath)))
  }
}

export function deleteDir(path, currentPath) {
  return (dispatch, getState) => {
    return Request(dispatch, getState, '?path=' + encodeURIComponent(path) + '&force_async=false&permanently=false', 'DELETE')
      .then(() => dispatch(fetchList(currentPath)))
  }
}
