import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  wether: WeatherReducer
});

export default rootReducer;
