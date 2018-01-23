import * as React from 'react';
import './App.css';
import ViewerComponent from '../ViewerComponent';

import {
  UserInterface, UserClass, FactInterface, FactClass, FragmentInterface,
  NodeInstanceInterface, NodeInterface, NodeClass, FactInstanceInterface, AppEntities
} from '../../models';

const logo = require('./logo.svg');

interface AppStateProps {
  currentUserId: number;
  userList: UserInterface[];
  entities: AppEntities;

}
interface AppDispatchProps {
  changeUser: (user: UserInterface) => void;
  revealNode: (nodeInstance: NodeInstanceInterface) => void;
  revealFact: (factInstance: FactInstanceInterface) => void;
}

type AppProps = AppStateProps & AppDispatchProps;

class App extends React.Component<AppProps, {}> {

  constructor(props: AppProps) {
    super(props);
  }

  impersonateUser = (event: React.FormEvent<HTMLButtonElement>) => {
    let z = new UserClass();

    if (event.currentTarget.name === 'User') {
      z.omniscient = false;
    } else {
      z.omniscient = true;
    }
    this.props.changeUser(z);
  }

  revealNode = (userId: number, node: NodeInterface) => {
    const x = new NodeClass(node);
    const z = x.reveal(userId);

    this.props.revealNode(z);
  }

  revealFact = (userId: number, fact: FactInterface, fragment: FragmentInterface) => {
    const x = new FactClass(fact);
    const z = x.reveal(userId, fragment);

    this.props.revealFact(z);
  }

  render() {

    const currentUser = this.props.userList.find((a) => a.id === this.props.currentUserId)!;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Adversarial Knowledge Management</h1>
        </header>
        <div className={styles.userSelect}>
          <button onClick={this.impersonateUser} name="User">User</button>
          <button onClick={this.impersonateUser} name="Admin">Admin</button>
        </div>
        <div className={styles.boxOfWonders}>
          <ViewerComponent
            behavior="node"
            edit={currentUser.omniscient}
            userList={this.props.userList}
            entities={this.props.entities}
            createItem={this.props.createNode}
            updateItem={currentUser.omniscient ? this.props.updateNode : this.props.updateNodeInstance}
            deleteItem={this.props.deleteNode}
            revealItem={this.revealNode}
          />
          <ViewerComponent
            behavior="fact"
            edit={currentUser.omniscient}
            userList={this.props.userList}
            entities={this.props.entities}
            createItem={this.props.createFact}
            updateItem={currentUser.omniscient ? this.props.updateFact : this.props.updateFactInstance}
            deleteItem={this.props.deleteFact}
            revealItem={this.revealFact}
          />
          <ViewerComponent
            behavior="fragment"
            edit={currentUser.omniscient}
            userList={this.props.userList}
            entities={this.props.entities}
            createItem={this.props.createFragment}
            updateItem={this.props.updateFragment}
            deleteItem={this.props.deleteFragment}
            revealItem={this.revealNode}
          />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export { App, AppStateProps, AppDispatchProps };