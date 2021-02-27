import {
  LOAD_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FAVORITES,
  IS_LOADING,
} from '../actions/favorites/types';
const initialState = {
  isLoading: true,
  list: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      //payload: allfavorites
      return {...state, list: action.payload};
    case ADD_TO_FAVORITES:
      //payload: new favorite
      console.log('ADD_TO_FAVORITES');
      return {
        ...state,
        list: [...state.list, ...action.payload],
      };
    case DELETE_FAVORITES:
      //payload: new favorites list
      return {...state, list: action.payload};
    // case IS_LOADING: {
    //   return {...state, isLoading: action.payload};
    // }
    default:
      return state;
  }
};

export default favoritesReducer;
