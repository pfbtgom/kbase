import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import App, { AppStateProps, AppDispatchProps } from './App';
import { AppState } from './models';
import * as actions from './actions';
import { UserInterface } from './models/user';

const mapStateToProps = (state: AppState, ownProps: any): AppStateProps => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch<AppState>, ownProps: any): AppDispatchProps => {
    return {
        changeUser: (user: UserInterface) => {
            dispatch(actions.logOutUser());
            dispatch(actions.logInUser(user));
        }
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;