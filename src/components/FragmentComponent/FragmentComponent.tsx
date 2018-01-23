import * as React from 'react';
import { FragmentInterface, UserInterface } from '../models';
import * as styles from './FragmentComponent.css';

interface FragmentState {
    fragment: FragmentInterface;
}

interface FragmentProps {
    fragment: FragmentInterface;
    user: UserInterface;
}

// this component lists a fact
class FragmentComponent extends React.Component<FragmentProps, FragmentState> {
    constructor(props: FragmentProps) {
        super(props);
        this.state = {
            fragment: this.props.fragment
        };
    }

    componentWillReceiveProps(nextProps: FragmentProps) {
        this.setState({
            fragment: nextProps.fragment
        });
    }

    // TODO: need to fix this so it handles numbers
    // TODO: validation?
    changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            fragment: {
                ...this.state.fragment,
                [event.currentTarget.name]: event.currentTarget.value
            }
        });
    }

    render() {

        const actualQuality = this.props.user.omniscient ?
            (
                <input
                    className={styles.textInput}
                    name="actualQuality"
                    type="text"
                    value={this.state.fragment.actualQuality.toString()}
                    onChange={this.changeHandler}
                />) :
            <div />;
        return (
            <div className={styles.fragment}>
                {actualQuality}
                <input
                    className={styles.textInput}
                    name="userQuality"
                    type="text"
                    value={this.state.fragment.userQuality.toString()}
                    onChange={this.changeHandler}
                />
                <input
                    className={styles.textInput}
                    name="value"
                    type="text"
                    value={this.state.fragment.value.toString()}
                    onChange={this.changeHandler}
                />
            </div>
        );
    }
}

export { FragmentComponent };