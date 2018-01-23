import * as React from 'react';
import { FactInterface, FragmentInterface } from '../../models';
import NodeComponent from '../NodeComponent';
import NodeInstanceComponent from '../NodeInstanceComponent';
import FactComponent from '../FactComponent';
import FactInstanceComponent from '../FactInstanceComponent';
import FragmentComponent from '../FragmentComponent';

interface ViewerState {

}

interface ViewerProps {
    behavior: string;
    edit: boolean;
    userList: UserInterface[];
    entities: AppEntities;
    createItem: () => void;
    updateItem: () => void;
    deleteItem: () => void;
    revealItem: () => void;
}

// functionality
// creation / update / delete facts
// creation 

class FactViewerComponent extends React.Component<ViewerProps, ViewerState> {
    constructor(props: FactProps) {
        super(props);
    }

    render() {

        const fragments = this.props.fragments.map((a) => (
            <li>
                {a.value}
            </li>
        ));

        return (
            <div>
                {this.props.fact.title}
                <ul>
                    {fragments}
                </ul>
            </div>
        );
    }
}

export {FactViewerComponent};