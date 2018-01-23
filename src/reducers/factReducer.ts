import { Reducer } from 'redux';
import { FactTypes, ActualState, initialActualState } from '../models';
import { FactActionTypes, FactTypeKeys } from '../actions';

const createItem = (state: ActualState, itemKey: string, value: FactTypes): ActualState => {

    const createdItem = {
        ...value,
        id: Math.min(...state.working[itemKey].map((a) => a.id).concat([0])) - 1
    };

    const newState = {
        ...state,
        working: {
            ...state.working,
            [itemKey]: state.working[itemKey].slice()
        }
    };

    newState.working[itemKey].push(createdItem);

    return newState;
}

const updateItem = (state: ActualState, itemKey: string, value: FactTypes): ActualState => {
    return {
        ...state,
        working: {
            ...state.working,
            [itemKey]: state.working[itemKey].map((a) => {
                if (a.id !== value.id) {
                    return a;
                }
                return {
                    ...a,
                    ...value
                };
            })
        }
    };
};

const deleteItem = (state: ActualState, itemKey: string, value: number): ActualState => {
    return {
        ...state,
        working: {
            ...state.working,
            [itemKey]: state.working[itemKey].filter((a) => a.id !== value)
        }
    };
}

const factReducer: Reducer<ActualState> =
    (state: ActualState = initialActualState, action: FactActionTypes): ActualState => {
        switch (action.type) {
            case FactTypeKeys.NODE_CREATE:
                return createItem(state, 'nodes', action.payload);
            case FactTypeKeys.NODE_UPDATE:
                return updateItem(state, 'nodes', action.payload);
            case FactTypeKeys.NODE_DELETE:
                return deleteItem(state, 'nodes', action.payload);
            case FactTypeKeys.NODE_REVEAL:
                return createItem(state, 'nodeInstances', action.payload);

            case FactTypeKeys.FACT_CREATE:
                return createItem(state, 'facts', action.payload);
            case FactTypeKeys.FACT_UPDATE:
                return updateItem(state, 'facts', action.payload);
            case FactTypeKeys.FACT_DELETE:
                return deleteItem(state, 'facts', action.payload);
            case FactTypeKeys.FACT_REVEAL:
                return createItem(state, 'factInstances', action.payload);

            case FactTypeKeys.FRAGMENT_CREATE:
                return createItem(state, 'fragments', action.payload);
            case FactTypeKeys.FRAGMENT_UPDATE:
                return updateItem(state, 'fragments', action.payload);
            case FactTypeKeys.FRAGMENT_DELETE:
                return deleteItem(state, 'fragments', action.payload);

            case FactTypeKeys.NODE_INSTANCE_UPDATE:
                return updateItem(state, 'nodeInstances', action.payload);
            case FactTypeKeys.FACT_INSTANCE_UPDATE:
                return updateItem(state, 'factInstances', action.payload);

            default:
                return state;
        }
    };

export { factReducer };