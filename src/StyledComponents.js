import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  padding: 5rem;
`;

export const PageTitle = styled.h1`
  margin-bottom: 3rem;
`;

export const StyledList = styled.div`
  display: flex;
  position: relative;
  flex-direction: ${p => (p.column ? "column" : "row")};
  align-items: ${p => (p.align ? p.align : "stretch")};
  justify-content: ${p => (p.justify ? p.justify : "flex-start")};
  padding: ${p => (p.padding ? p.padding : "0")};
  width: ${p => (p.width ? p.width : "auto")};

  > :not(:last-child) {
    ${p => p.vSpacing && `margin-bottom: ${p.vSpacing}`};
    ${p => p.hSpacing && `margin-right: ${p.hSpacing}`};
  }
`;

export const StyledInput = styled.input`
  font-size: 1rem;
  height: 2.2rem;
  padding: 0.6rem;
`;

export const StyledButton = styled.button`
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  font-weight: 400;
  outline: none;
  cursor: pointer;
`;
