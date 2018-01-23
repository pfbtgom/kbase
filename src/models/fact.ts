import { FragmentInterface } from "./fragment";

// definition of a fact
interface FactInterface {
    id: number;
    // node is parent
    parent: number;
    // other facts that must come first
    prerequisites: number[];
    title: string;
}

// revealed (instanced) fact
// merge the fragment into this
interface FactInstanceInterface {
    // unique id
    id: number;
    // node instance
    parent: number;
    // fact
    definition: number;
    // fragment
    source: number;
    quality: number;
    title: string;
    value: string;
    user: number;
    timestamp: Date;

}

const initialFact: FactInterface = {
    id: 0,
    parent: 0,
    prerequisites: [],
    title: ''
};

class FactClass implements FactInterface {
    id: number;
    parent: number;
    prerequisites: number[];
    title: string;

    constructor(fact: FactInterface) {
        this.id = fact.id || 0;
        this.parent = fact.parent;
        this.prerequisites = fact.prerequisites;
        this.title = fact.title;
    }

    reveal = (userId: number, fragment: FragmentInterface): FactInstanceInterface => {
        return {
            id: 0,
            parent: this.parent,
            definition: this.id,
            source: fragment.id,
            quality: 10,
            title: this.title,
            value: fragment.value,
            user: userId,
            timestamp: new Date()
        }
    }
}

export {FactInterface, FactInstanceInterface};
export {FactClass, initialFact};