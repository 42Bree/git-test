import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

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
    // // we'll see what does dishesloading going to do in 2 sec
    // setTimeout(() => { //delay
    //     dispatch(addDishes(DISHES)); //dispatch push to the stores
    // }, 2000);
    return fetch(baseUrl + 'dishes')
        .then(response => response.json()) //convert as json
        .then(dishes => dispatch(addDishes(dishes)));
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
//just add from the instructions from now on
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});