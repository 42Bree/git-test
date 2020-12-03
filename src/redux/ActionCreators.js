import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    // every action object should have a type
    // payload is implemented to show what needs to be carried in the action object to the reducer function
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    // we'll see what does dishesloading going to do in 2 sec
    setTimeout(() => { //delay
        dispatch(addDishes(DISHES)); //dispatch push to the stores
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess //return payload as an error message
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});