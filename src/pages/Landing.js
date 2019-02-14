import React from "react";
import styled from "styled-components";
import {
  PageContainer,
  PageTitle,
  StyledList,
  StyledInput,
  StyledButton
} from "../StyledComponents";
import { NavLink } from "react-router-dom";
import { AppConsumer } from "../context";

export class Landing extends React.Component {
  ToDoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 1px solid black;
    width: 540px;
    max-width: 100%;

    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  `;

  ToDoItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  ToDoText = styled.span`
    word-break: break-word;
    max-width: 80%;
  `;

  constructor(props) {
    super(props);

    this.state = {
      newToDo: ""
    };
  }

  handleInputChange(evt, key) {
    this.setState({ [key]: evt.target.value });
  }

  ToDoList = ({ list, handleAddItem, handleRemoveItem }) => {
    const { ToDoContainer, ToDoItem, ToDoText } = this;
    const { newToDo } = this.state;

    return (
      <ToDoContainer>
        <StyledList justify="center" align="center" hSpacing="1rem">
          <StyledInput
            value={newToDo}
            onChange={evt => this.handleInputChange(evt, "newToDo")}
          />
          <StyledButton
            style={{ backgroundColor: "#28a745", color: "white" }}
            onClick={() => {
              handleAddItem({ item: newToDo });
              this.setState({ newToDo: "" });
            }}
          >
            Add Item
          </StyledButton>
        </StyledList>
        <StyledList column vSpacing="1rem">
          {list.map((toDo, index) => {
            return (
              <ToDoItem key={toDo + index}>
                <ToDoText>{toDo}</ToDoText>
                <StyledButton
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "1rem",
                    height: "35px"
                  }}
                  onClick={() => handleRemoveItem({ item: toDo })}
                >
                  Remove
                </StyledButton>
              </ToDoItem>
            );
          })}
        </StyledList>
      </ToDoContainer>
    );
  };

  render() {
    const { ToDoList } = this;
    return (
      <PageContainer>
        <AppConsumer>
          {({ currentUser, handleAddItem, handleRemoveItem, handleLogOut }) => {
            return (
              <>
                <PageTitle>
                  Hello, <NavLink to="/profile">{currentUser.username}</NavLink>
                  !
                </PageTitle>

                <ToDoList
                  handleAddItem={handleAddItem}
                  handleRemoveItem={handleRemoveItem}
                  list={currentUser.list}
                />
              </>
            );
          }}
        </AppConsumer>
      </PageContainer>
    );
  }
}
