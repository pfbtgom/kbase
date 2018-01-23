import {UserInterface, ActionInterface} from '../models';

// Actions
enum UserTypeKeys {
    USER_LOG_IN = "USER_LOG_IN",
    USER_LOG_OUT = "USER_LOG_OUT",
};

type UserActionTypes = LogInUser | LogOutUser;

interface LogInUser extends ActionInterface<UserTypeKeys.USER_LOG_IN, UserInterface> {}
interface LogOutUser extends ActionInterface<UserTypeKeys.USER_LOG_OUT, {}> {}

// Action creators
const logInUser = (user: UserInterface): LogInUser => {
    return {
        type: UserTypeKeys.USER_LOG_IN,
        payload: user,
        error: false
    };
};

const logOutUser = (): LogOutUser => {
    return {
        type: UserTypeKeys.USER_LOG_OUT,
        payload: {},
        error: false
    };
};

export {logInUser, logOutUser, UserTypeKeys, UserActionTypes};