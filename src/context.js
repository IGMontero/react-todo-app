import React from "react";
import _ from "lodash";
import { withRouter } from "react-router-dom";

const AppContext = React.createContext();

export const { Consumer: AppConsumer } = AppContext;

class ApplicationProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: undefined,
      users: [
        {
          username: "user1",
          password: "asd123",
          name: "User One",
          email: "user@one.co",
          list: ["todo1", "todo2"]
        },
        {
          username: "user2",
          password: "asd123",
          name: "User Two",
          email: "user@two.co",
          list: ["random", "todo"]
        }
      ]
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.setState({ currentUser: undefined });
  }

  handleLogIn({ username, password }) {
    const { users } = this.state;

    if (!users || !username || !password) return;

    const foundUser = users.find(
      user => user.username === username && user.password === password
    );

    if (!foundUser) return alert("invalid user");
    else
      return this.setState({ currentUser: foundUser }, () => {
        this.props.history.push("/");
      });
  }

  handleAddItem({ item }) {
    const { currentUser, users } = this.state;

    if (!currentUser || !item) return;

    const newUserData = _.cloneDeep(currentUser);
    if (newUserData.list) newUserData.list.push(item);
    else newUserData.list = [item];

    // Update users in memory
    const newUsersData = _.cloneDeep(users);
    const currentUserIndex = users.findIndex(
      user => user.username === currentUser.username
    );
    newUsersData[currentUserIndex] = newUserData;

    this.setState({ currentUser: newUserData, users: newUsersData });
  }

  handleRemoveItem({ item }) {
    const { currentUser, users } = this.state;

    if (!currentUser || !currentUser.list) return;

    const removeItemIndex = currentUser.list.indexOf(item);

    if (removeItemIndex === -1) return;

    const newUserData = _.cloneDeep(currentUser);
    newUserData.list.splice(removeItemIndex, 1);

    // Update users in memory
    const newUsersData = _.cloneDeep(users);
    const currentUserIndex = users.findIndex(
      user => user.username === currentUser.username
    );
    newUsersData[currentUserIndex] = newUserData;

    this.setState({ currentUser: newUserData, users: newUsersData });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handleLogIn: this.handleLogIn,
          handleAddItem: this.handleAddItem,
          handleRemoveItem: this.handleRemoveItem,
          handleLogOut: this.handleLogOut
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppProvider = withRouter(ApplicationProvider);
