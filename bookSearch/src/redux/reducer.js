const initState = {
  items: [],
  loading: false,
  error: null,
  wishlist: []
};

const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_BOOKS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "SEARCH_BOOKS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case "SEARCH_BOOKS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        items: []
      };
    case "ADD_WISHLIST":
      let tempItem = state.items.items.filter(item => item.id === action.id);
      let tempWishlist = [...state.wishlist, {title: tempItem[0].volumeInfo.title, id: action.id}]
      if (state.wishlist.some(item => item.title === tempItem[0].volumeInfo.title)) {
        return state;
      } else {
        return {
          ...state,
          wishlist: tempWishlist
        }
      };
    case "REMOVE_WISHLIST":
      let tempWishlist2 = state.wishlist.filter(element => element.id !== action.id);
      return {
        ...state,
        wishlist: tempWishlist2
      }
    default:
      return state;
  }
}

export default booksReducer;