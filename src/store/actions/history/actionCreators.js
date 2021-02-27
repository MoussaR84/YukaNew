import {LOAD_HISTORY, IS_LOADING, UPDATE_HISTORY} from './types';

export const loadHistory = (payload) => (dispatch, getState) =>
  dispatch({type: LOAD_HISTORY, payload: payload});
// dispatch des actions, objet avec un type et un payload
export const isHistoryLoading = (payload) => (dispatch, getState) =>
  dispatch({type: IS_LOADING, payload: payload});
export const updateHistory = (payload) => (dispatch, getState) =>
  dispatch({type: UPDATE_HISTORY, payload: payload});
