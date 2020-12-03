import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {isLoading: true, errMess: null, dishes:[]}, action) => { //default to true if it's empty
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []} ///...state means this would get same state as above, and next passing parameter will be applied as a modificaation to the the state, <Create New Object>

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};