import historyReducer from './reducers/History';
import favoritesReducer from './reducers/Favorites';
import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  history: historyReducer,
  favorite: favoritesReducer,
});

const store = createStore(rootReducer);
export default store;
