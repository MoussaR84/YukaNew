import historyReducer from './reducers/History';
import favoritesReducer from './reducers/Favorites';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  history: historyReducer,
  favorite: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
