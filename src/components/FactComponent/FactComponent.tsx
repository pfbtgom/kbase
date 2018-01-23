import * as React from 'react';
import { FactInterface, FragmentInterface, FragmentClass, UserInterface } from '../../models';
import * as styles from './FactComponent.css';
import FragmentComponent from '../FragmentComponent';

interface FactState {

}

interface FactProps {
    fact: FactInterface;
    fragments: FragmentInterface[];
    user: 
}

// this component lists a fact
class FactComponent extends React.Component<FactProps, FactState> {
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
            <div className={styles.fact}>
                {this.props.fact.title}
                <FragmentComponent
                    fragment={new FragmentClass(1)}
                    user={}
                />
                {this.props.fragments.map()}
                <ul>
                    {fragments}
                </ul>
            </div>
        );
    }
}

export {FactComponent};