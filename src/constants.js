export const BASE_PATH = ''//process.env.NODE_ENV == 'production' ? '' : '/api';
export const REQUEST_URL = 'https://cloud-api.yandex.net:443/v1/disk/resources?path=';

export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';
export const SET_TOKEN = 'SET_TOKEN';
export const RESET_TOKEN = 'RESET_TOKEN';

export const ERROR_403 = 'ERROR_403';
export const ERROR_404 = 'ERROR_404';
export const ERROR_401 = 'ERROR_401';
export const HTTP_200 = 'HTTP_200';