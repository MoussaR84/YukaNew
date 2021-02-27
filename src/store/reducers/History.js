import {
  LOAD_HISTORY,
  UPDATE_HISTORY,
  IS_LOADING,
} from '../actions/history/types';
const initialState = {
  list: [],
  isLoading: true,
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HISTORY:
      console.log('LOAD_HISTORY', action.payload);
      return {...state, list: action.payload};
    case UPDATE_HISTORY:
      return {...state, list: {...state.list, ...action.payload}};

    case IS_LOADING: {
      return {...state, isLoading: action.payload};
    }
    default:
      return state;
  }
};

export default historyReducer;
