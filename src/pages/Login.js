import React from "react";
import styled from "styled-components";
import {
  PageContainer,
  PageTitle,
  StyledList,
  StyledInput,
  StyledButton
} from "../StyledComponents";
import { AppConsumer } from "../context";

export class Login extends React.Component {
  Form = styled.div`
    display: flex;
    padding: 1.2rem;
    flex-direction: column;
    width: 540px;
    max-width: 100%;

    & > *:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  `;

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange(evt, key) {
    this.setState({ [key]: evt.target.value });
  }

  render() {
    const { Form } = this;
    const { username, password } = this.state;

    return (
      <PageContainer>
        <PageTitle>Welcome To the To-Do App!</PageTitle>
        <Form>
          <StyledList column vSpacing=".5rem">
            <label>Usename</label>
            <StyledInput
              value={username}
              onChange={evt => this.handleInputChange(evt, "username")}
            />
          </StyledList>
          <StyledList column vSpacing=".5rem">
            <label>Password</label>
            <StyledInput
              value={password}
              type="password"
              onChange={evt => this.handleInputChange(evt, "password")}
            />
          </StyledList>
          <AppConsumer>
            {({ handleLogIn }) => {
              return (
                <StyledButton
                  style={{ backgroundColor: "#28a745", color: "white" }}
                  onClick={() => handleLogIn({ username, password })}
                >
                  Log In
                </StyledButton>
              );
            }}
          </AppConsumer>
        </Form>
      </PageContainer>
    );
  }
}
