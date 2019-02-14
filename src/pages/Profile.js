import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { PageContainer, PageTitle, StyledButton } from "../StyledComponents";
import { AppConsumer } from "../context";

export class Profile extends React.Component {
  InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 18px;
    grid-column-gap: 2rem;
    grid-row-gap: 0.5rem;

    & > *:nth-child(odd) {
      font-weight: bold;
      font-size: 20px;
    }
  `;

  render() {
    const { InfoGrid } = this;
    return (
      <PageContainer>
        <AppConsumer>
          {({ currentUser }) => {
            return (
              <React.Fragment>
                <PageTitle>{`${currentUser.username}'s Profile`}</PageTitle>
                <InfoGrid>
                  <span>Name:</span>
                  <span>{currentUser.name}</span>
                  <span>Username:</span>
                  <span>{currentUser.username}</span>
                  <span>Email:</span>
                  <span>{currentUser.email}</span>
                </InfoGrid>
                <br />
                <NavLink to="/">
                  <StyledButton style={{ color: "#28a745" }}>
                    Back To App
                  </StyledButton>
                </NavLink>
              </React.Fragment>
            );
          }}
        </AppConsumer>
        <PageTitle />
      </PageContainer>
    );
  }
}
