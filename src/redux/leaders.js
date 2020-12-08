import { LEADERS } from '../shared/leaders';

import * as ActionTypes from './ActionTypes';
export const Leaders = (state = {isLoading: true, errMess: null, leaders:[]}, action) => { //default to true if it's empty
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []} ///...state means this would get same state as above, and next passing parameter will be applied as a modificaation to the the state, <Create New Object>

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};