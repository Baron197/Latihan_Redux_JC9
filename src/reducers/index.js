import { combineReducers } from 'redux';
import TextKerenReducer from './TextKerenReducer';

export default combineReducers({
    pikachu: () => 'Ryan Reynolds',
    textkeren: TextKerenReducer
});