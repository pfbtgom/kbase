
interface FragmentInterface {
    id: number;
    // fact is parent
    parent: number;
    // 0 - 10, false to true
    actualQuality: number;
    userQuality: number;
    value: string;
}

class FragmentClass implements FragmentInterface {
    id: number;
    parent: number;
    actualQuality: number;
    userQuality: number;
    value: string;

    constructor(id: number) {
        this.id = id;
        this.parent = 0;
        this.actualQuality = 10;
        this.userQuality = 10;
        this.value = '';
    }
}

export {FragmentInterface, FragmentClass};