import { applyMiddleware, combineReducers, compose, createStore, Middleware, MiddlewareAPI  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { UserActionTypes, FactActionTypes } from './actions';
import { factReducer, userReducer } from './reducers';
import { AppState } from './models';
import { initialAppState } from './models/app';

type ActionTypes = UserActionTypes | FactActionTypes;

const appReducer = (state: AppState = initialAppState, action: ActionTypes): AppState => {
    return {
        userState: userReducer(state.userState, action),
        actualState: factReducer(state.actualState, action)
    };
};

// thunkMiddleware enables async actions (like fetch or promises)
// authRefreshMiddleware dispatches a thunk, so put it before thunk
const store = createStore(appReducer, initialAppState, composeWithDevTools(
            applyMiddleware(thunk),
));

export default store;
