import { FactInterface, FragmentInterface, FactInstanceInterface, NodeInterface,
    NodeInstanceInterface, ActionInterface } from '../models';

// Actions
enum FactTypeKeys {
    NODE_CREATE = 'NODE_CREATE',
    NODE_UPDATE = 'NODE_UPDATE',
    NODE_DELETE = 'NODE_DELETE',
    NODE_REVEAL = 'NODE_REVEAL',

    FACT_CREATE = 'FACT_CREATE',
    FACT_UPDATE = 'FACT_UPDATE',
    FACT_DELETE = 'FACT_DELETE',
    FACT_REVEAL = 'FACT_REVEAL',

    FRAGMENT_CREATE = 'FRAGMENT_CREATE',
    FRAGMENT_UPDATE = 'FRAGMENT_UPDATE',
    FRAGMENT_DELETE = 'FRAGMENT_DELETE',

    NODE_INSTANCE_UPDATE = 'NODE_INSTANCE_UPDATE',
    FACT_INSTANCE_UPDATE = 'FACT_INSTANCE_UPDATE'

}

type FactActionTypes = CreateNodeAction | UpdateNodeAction | DeleteNodeAction | RevealNodeAction
    | CreateFactAction | UpdateFactAction | DeleteFactAction | RevealFactAction
    | CreateFragmentAction | UpdateFragmentAction | DeleteFragmentAction
    | UpdateNodeInstanceAction | UpdateFactInstanceAction;

interface CreateNodeAction extends ActionInterface<FactTypeKeys.NODE_CREATE, NodeInterface> {}
interface UpdateNodeAction extends ActionInterface<FactTypeKeys.NODE_UPDATE, NodeInterface> {}
interface DeleteNodeAction extends ActionInterface<FactTypeKeys.NODE_DELETE, number> {}
interface RevealNodeAction extends ActionInterface<FactTypeKeys.NODE_REVEAL, NodeInstanceInterface> {}
interface CreateFactAction extends ActionInterface<FactTypeKeys.FACT_CREATE, FactInterface> {}
interface UpdateFactAction extends ActionInterface<FactTypeKeys.FACT_UPDATE, FactInterface> {}
interface DeleteFactAction extends ActionInterface<FactTypeKeys.FACT_DELETE, number> {}
interface RevealFactAction extends ActionInterface<FactTypeKeys.FACT_REVEAL, FactInstanceInterface> {}
interface CreateFragmentAction extends ActionInterface<FactTypeKeys.FRAGMENT_CREATE, FragmentInterface> {}
interface UpdateFragmentAction extends ActionInterface<FactTypeKeys.FRAGMENT_UPDATE, FragmentInterface> {}
interface DeleteFragmentAction extends ActionInterface<FactTypeKeys.FRAGMENT_DELETE, number> {}
interface UpdateNodeInstanceAction extends ActionInterface<FactTypeKeys.NODE_INSTANCE_UPDATE, NodeInstanceInterface> {}
interface UpdateFactInstanceAction extends ActionInterface<FactTypeKeys.FACT_INSTANCE_UPDATE, FactInstanceInterface> {}

// Action creators
const createNode = (node: NodeInterface): CreateNodeAction => {
    return {
        type: FactTypeKeys.NODE_CREATE,
        payload: node,
        error: false
    };
};

const updateNode = (node: NodeInterface): UpdateNodeAction => {
    return {
        type: FactTypeKeys.NODE_UPDATE,
        payload: node,
        error: false
    };
};

const deleteNode = (nodeId: number): DeleteNodeAction => {
    return {
        type: FactTypeKeys.NODE_DELETE,
        payload: nodeId,
        error: false
    };
};

const revealNode = (nodeInstance: NodeInstanceInterface): RevealNodeAction => {
    return {
        type: FactTypeKeys.NODE_REVEAL,
        payload: nodeInstance,
        error: false
    };
};

const createFact = (fact: FactInterface): CreateFactAction => {
    return {
        type: FactTypeKeys.FACT_CREATE,
        payload: fact,
        error: false
    };
};

const updateFact = (fact: FactInterface): UpdateFactAction => {
    return {
        type: FactTypeKeys.FACT_UPDATE,
        payload: fact,
        error: false
    };
};

const deleteFact = (factId: number): DeleteFactAction => {
    return {
        type: FactTypeKeys.FACT_DELETE,
        payload: factId,
        error: false
    };
};

const revealFact = (factInstance: FactInstanceInterface): RevealFactAction => {
    return {
        type: FactTypeKeys.FACT_REVEAL,
        payload: factInstance,
        error: false
    };
};

const createFragment = (fragment: FragmentInterface): CreateFragmentAction => {
    return {
        type: FactTypeKeys.FRAGMENT_CREATE,
        payload: fragment,
        error: false
    };
};

const updateFragment = (fragment: FragmentInterface): UpdateFragmentAction => {
    return {
        type: FactTypeKeys.FRAGMENT_UPDATE,
        payload: fragment,
        error: false
    };
};

const deleteFragment = (fragmentId: number): DeleteFragmentAction => {
    return {
        type: FactTypeKeys.FRAGMENT_DELETE,
        payload: fragmentId,
        error: false
    };
};

const updateNodeInstance = (nodeInstance: NodeInstanceInterface): UpdateNodeInstanceAction => {
    return {
        type: FactTypeKeys.NODE_INSTANCE_UPDATE,
        payload: nodeInstance,
        error: false
    };
};

const updateFactInstance = (factInstance: FactInstanceInterface): UpdateFactInstanceAction => {
    return {
        type: FactTypeKeys.FACT_INSTANCE_UPDATE,
        payload: factInstance,
        error: false
    };
};

export {FactTypeKeys, FactActionTypes};
export {createNode, updateNode, deleteNode, revealNode};
export {createFact, updateFact, deleteFact, revealFact};
export {createFragment, updateFragment, deleteFragment};
export {updateNodeInstance, updateFactInstance};