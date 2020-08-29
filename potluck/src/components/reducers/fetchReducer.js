import {FETCHING_EVENTS_START,FETCHING_EVENTS_SUCCESS,FETCHING_EVENTS_ERROR} from '../actions/actionsIndex'
const initialState = {
    data: [],
    isFetching: false,
    error: '',
};

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_EVENTS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_EVENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ''
            }
        case FETCHING_EVENTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}