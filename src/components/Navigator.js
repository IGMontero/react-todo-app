import React from "react";
import styled from "styled-components";
import { AppConsumer } from "../context";
import { StyledList, StyledButton } from "../StyledComponents";
import { NavLink } from "react-router-dom";

export const Navigator = () => {
  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 7rem;
    padding: 1.2rem 7rem;
    justify-content: space-between;
    align-items: center;
    background-color: #007bff;
  `;

  const Logo = styled.span`
    font-size: 2.2rem;
    color: white;
  `;

  return (
    <Container>
      <AppConsumer>
        {({ currentUser, handleLogOut }) => {
          return (
            <React.Fragment>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                <Logo>ToDo App</Logo>
              </NavLink>
              {currentUser && (
                <StyledList hSpacing="1.5rem">
                  <NavLink to="/profile">
                    <StyledButton>{currentUser.username} profile</StyledButton>
                  </NavLink>
                  <StyledButton
                    style={{ backgroundColor: "red", color: "white" }}
                    onClick={handleLogOut}
                  >
                    Log Out
                  </StyledButton>
                </StyledList>
              )}
            </React.Fragment>
          );
        }}
      </AppConsumer>
    </Container>
  );
};
