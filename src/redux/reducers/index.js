import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';


 const rootReducer = combineReducers({
   weatherInfo: weatherReducer
});

export default rootReducer;
