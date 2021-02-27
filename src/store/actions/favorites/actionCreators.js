import {
  LOAD_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FAVORITES,
  IS_LOADING,
} from './types';
import {LOAD_HISTORY} from '../history/types';
import {loadHistory} from '../history/actionCreators';
import {isProductAlreadyinFavorites} from '../../../utilis/index';

export const loadFavorites = (payload) => (dispatch, getState) =>
  dispatch({type: LOAD_FAVORITES, payload: payload});

export const addToFavorites = (payload) => (dispatch, getState) => {
  const {history} = getState();
  const historyList = history.list;
  const newHistory = isProductAlreadyinFavorites(historyList, payload);
  dispatch({type: LOAD_HISTORY, payload: newHistory});
  dispatch({type: ADD_TO_FAVORITES, payload: payload});
};

export const deleteFavorites = (payload) => (dispatch, getState) => {
  const {history} = getState();
  const historyList = history.list;
  const newHistory = isProductAlreadyinFavorites(historyList, payload);
  dispatch(loadHistory(newHistory));
  dispatch({type: DELETE_FAVORITES, payload: payload});
};

export const isFavoritesLoading = (payload) => (dispatch, getState) =>
  dispatch({type: IS_LOADING, payload: payload});
