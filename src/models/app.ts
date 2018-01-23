import { Action } from 'redux';

import { UserInterface, FactInterface, FragmentInterface, NodeInterface } from './index';
import { initialUserState } from './user';
import { FactInstanceInterface } from './fact';
import { NodeInstanceInterface } from './node';

interface AppState {
    userState: UserInterface;
    actualState: ActualState;
}

interface ActualState {
    entities: AppEntities;
    working: AppEntities;
    ui: {};
}

type FactTypes = NodeInterface | NodeInstanceInterface | FactInterface | FactInstanceInterface | FragmentInterface;

interface AppEntities {
    nodes: NodeInterface[];
    nodeInstances: NodeInstanceInterface[];
    facts: FactInterface[];
    fragments: FragmentInterface[];
    factInstances: FactInstanceInterface[];
    [key: string]: FactTypes[];
}

interface ActionInterface<T, P> extends Action {
    type: T;
    payload: P;
    error: boolean;
    asyncId?: number;
}

const initialActualState: ActualState = {
    entities: {
        nodes: [],
        nodeInstances: [],
        facts: [],
        fragments: [],
        factInstances: []
    },
    working: {
        nodes: [],
        nodeInstances: [],
        facts: [],
        fragments: [],
        factInstances: []
    },
    ui: {}
};

const initialAppState: AppState = {
    userState: initialUserState,
    actualState: initialActualState
};

export {AppState, AppEntities, ActualState, ActionInterface, initialAppState, initialActualState, FactTypes};