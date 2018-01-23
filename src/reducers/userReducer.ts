import {Reducer} from 'redux';
import {UserInterface, initialUserState} from '../models';
import {UserActionTypes} from '../actions';
import { UserTypeKeys } from '../actions/userActions';
import { UserClass } from '../models/user';

// todo: create initial state
const userReducer: Reducer<UserInterface> =
    (state: UserInterface = initialUserState, action: UserActionTypes): UserInterface => {
    switch (action.type) {
        case UserTypeKeys.USER_LOG_IN:
            const logInState = {
                ...action.payload
            };
            return logInState;
        case UserTypeKeys.USER_LOG_OUT:
            const logOutState = {
                ...(new UserClass)
            };
            return logOutState;
        default:
            return state;
    }
};

export {userReducer};