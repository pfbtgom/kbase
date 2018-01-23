interface UserInterface {
    id: number;
    name: string;
    nodes: number[];
    facts: number[];
    omniscient: boolean;
}

class UserClass implements UserInterface {
    id: number;
    name: string;
    nodes: number[];
    facts: number[];
    omniscient: boolean;

    constructor() {
        this.id = 0;
        this.name = '';
        this.nodes = [];
        this.facts = [];
        this.omniscient = false;
    }
}

const initialUserState = new UserClass();

export {UserInterface, UserClass, initialUserState};