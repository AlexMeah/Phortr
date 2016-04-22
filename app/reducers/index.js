import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import folder from './folder';
import files from './files';

const rootReducer = combineReducers({
    folder,
    files,
    routing
});

export default rootReducer;
