type NodeTypes = 'General' | 'Character' | 'Location';

interface NodeInterface {
    id: number;
    title: string;
    type: NodeTypes;
}

interface NodeInstanceInterface {
    id: number;
    definition: number;
    title: string;
    type: NodeTypes;
    user: number;
    timestamp: Date;
}

interface GeneralNodeInterface extends NodeInterface {

}
interface CharacterNodeInterface extends NodeInterface {

}
interface LocationNodeInterface extends NodeInterface {

}

class NodeClass implements NodeInterface {
    id: number;
    title: string;
    type: NodeTypes;

    constructor(node: NodeInterface) {
        this.id = node.id;
        this.title = node.title;
        this.type = node.type;
    }

    reveal = (userId: number): NodeInstanceInterface => {
        return {
            id: 0,
            definition: this.id,
            title: this.title,
            type: this.type,
            user: userId,
            timestamp: new Date()
        };
    }
}

export {NodeTypes, NodeInterface, NodeClass, GeneralNodeInterface, CharacterNodeInterface, NodeInstanceInterface,
    LocationNodeInterface};