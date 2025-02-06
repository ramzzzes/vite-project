import counterReducer from '../Store/Counter'
import {combineReducers} from "redux";
import userReducer from '../Store/User';
import settingsReducer from '../Store/Settings';

const allReducers = combineReducers({
    counter : counterReducer,
    // user : userReducer,
    // settings : settingsReducer
})

export default allReducers