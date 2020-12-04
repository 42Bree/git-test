import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment), //added feature 
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin" //NodeJS 
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response))) // push to redux store by doing dispatch here
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};


export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    // // we'll see what does dishesloading going to do in 2 sec
    // setTimeout(() => { //delay
    //     dispatch(addDishes(DISHES)); //dispatch push to the stores
    // }, 2000);
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) { //if it's okay then just go in to next then with current response
                return response;
            }
            else { //first part is siguation where you receive a response from the server
                var error = new Error('Error ' + response.status + ': ' + response.statusText) //status contain the status code and statusText will contain an error message
                error.response = response;
                throw error;
            }
        },
        error => { //error handler, used when there would be situation whhere we don't hear back anything from the server 
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) //convert as json
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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