import {createStore} from 'redux';
import userReducer from '../_reducers/index';

const store = createStore(userReducer);

export default store;
