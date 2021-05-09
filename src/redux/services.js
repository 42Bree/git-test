import * as ActionTypes from "./ActionTypes";

export const Services = (
  state = { isLoading: true, errMess: null, services: [] },
  action
) => {
  //default to true if it's empty
  switch (action.type) {
    case ActionTypes.ADD_SERVICES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        services: action.payload,
      };

    case ActionTypes.SERVICES_LOADING:
      return { ...state, isLoading: true, errMess: null, services: [] }; ///...state means this would get same state as above, and next passing parameter will be applied as a modificaation to the the state, <Create New Object>

    case ActionTypes.SERVICES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
