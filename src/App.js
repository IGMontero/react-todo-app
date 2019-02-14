import React, { Component } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import { Landing, Profile, Login } from "./pages";
import { Navigator } from "./components/Navigator";
import { AppProvider, AppConsumer } from "./context";

class App extends Component {
  AppMainContainer = styled.div`
    min-height: 100vh;
    width: 100%;
  `;

  render() {
    const { AppMainContainer } = this;

    return (
      <AppProvider>
        <AppMainContainer>
          <Navigator />
          <AppConsumer>
            {({ currentUser }) => {
              return currentUser ? (
                <Switch>
                  <Route path="/profile" component={Profile} />
                  <Route path="/" component={Landing} />
                  <Redirect to="/" />
                </Switch>
              ) : (
                <Switch>
                  <Route path="/login" component={Login} />
                  <Redirect to="/login" />
                </Switch>
              );
            }}
          </AppConsumer>
        </AppMainContainer>
      </AppProvider>
    );
  }
}

export default App;
