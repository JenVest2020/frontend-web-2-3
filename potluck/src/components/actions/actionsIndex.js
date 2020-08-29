import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const FETCHING_EVENTS_START = 'FETCHING_EVENT_START';
export const FETCHING_EVENTS_SUCCESS = 'FETCHING_EVENT_SUCCESS';
export const FETCHING_EVENTS_ERROR = 'FETCHING_EVENT_ERROR';

export const fetchingEvents = () => (dispatch) => {
    dispatch({ type: FETCHING_EVENTS_START })
    axiosWithAuth()
        .get('unknown')
        .then(res => {
            console.log('from fetchingEvents:start', res)
            dispatch({ type: FETCHING_EVENTS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.error('from fetchingEvents:error', err)
            dispatch({ type: FETCHING_EVENTS_ERROR, payload: err })
        })
}

export const POSTING_LOGIN_START = 'POSTING_LOGIN_START';
export const POSTING_LOGIN_SUCCESS = 'POSTING_LOGIN_SUCCESS';
export const POSTING_LOGIN_ERROR = 'POSTING_LOGIN_ERROR';

export const postingLogin = (credentials) => (dispatch) => {
    dispatch({ type: POSTING_LOGIN_START })
    axios.post('https://reqres.in/api/login', credentials)
        .then(res => {
            if (res.status) {
                localStorage.setItem('token', JSON.stringify(res.data.token))
                // window.location.href = '/home'
            } else {
                window.location.href = '/Login'
            }
            console.log('from postingLogin:success', res)
            dispatch({ type: POSTING_LOGIN_SUCCESS, payload: res.data })

        })
        .catch(err => {
            console.error('from postingLogin:error', err)
            dispatch({ type: POSTING_LOGIN_ERROR, payload: err })
        })
}

export const POSTING_REGISTRATION_START = 'POSTING_REGISTRATION_START';
export const POSTING_REGISTRATION_SUCCESS = 'POSTING_REGISTRATION_SUCCESS';
export const POSTING_REGISTRATION_ERROR = 'POSTING_REGISTRATION_ERROR';


export const postingRegistration = (credentials) => (dispatch) => {
    dispatch({ type: POSTING_REGISTRATION_START })
    axios.post('https://reqres.in/api/register', credentials)
        .then(res => {
            console.log('from postingRegistration:success', res)
            dispatch({ type: POSTING_REGISTRATION_SUCCESS, payload: res.data })
            // window.location.href = '/Login'
        })
        .catch(err => {
            console.error('from postingRegistration:error', err)
            dispatch({ type: POSTING_REGISTRATION_ERROR, payload: err })
        })
}

export const POSTING_ADDEVENT_START = 'POSTING_ADDEVENT_START';
export const POSTING_ADDEVENT_SUCCESS = 'POSTING_ADDEVENT_SUCCESS';
export const POSTING_ADDEVENT_ERROR = 'POSTING_ADDEVENT_ERROR';

export const postingAddEvent = (additions) => (dispatch) => {
    dispatch({ type: POSTING_ADDEVENT_START })
    axiosWithAuth()
        .post('users', additions)
        .then(res => {
            console.log('from postingAddEvent: start', res)
            dispatch({ type: POSTING_ADDEVENT_SUCCESS, payload: res.data })
            // window.location.href = '/singleEvent'
        })
        .catch(err => {
            console.error('from postingAddEvent: error', err)
            dispatch({ type: POSTING_ADDEVENT_ERROR, payload: err })
        })
}

export const PUTTING_EDITEVENT_START = 'PUTTING_EDITEVENT_START';
export const PUTTING_EDITEVENT_SUCCESS = 'PUTTING_EDITEVENT_SUCCESS';
export const PUTTING_EDITEVENT_ERROR = 'PUTTING_EDITEVENT_ERROR';

export const puttingEditEvent = (additions) => (dispatch) => {
    dispatch({ type: PUTTING_EDITEVENT_START })
    axiosWithAuth()
        .put('users/2', additions)
        .then(res => {
            console.log('from puttingEditEvent: start', res)
            dispatch({ type: PUTTING_EDITEVENT_SUCCESS, payload: res.data })
            // window.location.href = '/singleEvent'
        })
        .catch(err => {
            console.error('from puttingEditEvent: error', err)
            dispatch({ type: PUTTING_EDITEVENT_ERROR, payload: err })
        })
}

export const DELETING_EVENT_START = 'DELETING_EVENT_START';
export const DELETING_EVENT_SUCCESS = 'DELETING_EVENT_SUCCESS';
export const DELETING_EVENT_FAILED = 'DELETING_EVENT_FAILED';
export const deletingEvent = () => (dispatch) => {
    dispatch({ type: DELETING_EVENT_START })
    axiosWithAuth()
        .delete('users/2')
        .then(res => {
            console.log('from deletingEvent: start', res)
            dispatch({ type: DELETING_EVENT_SUCCESS, payload: res.data })
            // window.location.href = '/Home'
        })
        .catch(err => {
            console.log('from deletingEvent: err', err)
            dispatch({ type: DELETING_EVENT_FAILED, payload: err })
        })
}
