import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import folder from './folder';
import files from './files';
import navigation from './navigation';

const rootReducer = combineReducers({
    navigation,
    folder,
    files,
    routing
});

export default rootReducer;
