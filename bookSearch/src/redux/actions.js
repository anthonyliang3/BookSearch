import Axios from 'axios';
import booksReducer from './reducer';

export const searchBooks = (title) => {
  return async (dispatch, getState) => {
    dispatch({type: "SEARCH_BOOKS_REQUEST"})
    try {
      const response = await Axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`
      )
      dispatch({type: "SEARCH_BOOKS_SUCCESS", payload: response.data})
    } catch(error) {
      dispatch({type:"SEARCH_BOOKS_FAILURE", error: error})
    }
  }
}

export const addWishlist = (id) => {
  return {
    type: 'ADD_WISHLIST',
    id
  }
}

export const removeWishlist = (id) => {
  return {
    type: 'REMOVE_WISHLIST',
    id
  }
}