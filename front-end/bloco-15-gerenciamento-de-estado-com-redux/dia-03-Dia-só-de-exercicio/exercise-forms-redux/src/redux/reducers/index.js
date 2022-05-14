import { combineReducers } from 'redux';
import reducerPersonalForm from './reducerPersonalForm';
import reducerProForm from './reducerProForm';

const rootReducer = combineReducers({ reducerPersonalForm, reducerProForm });

export default rootReducer;
