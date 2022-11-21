import React from "react";
import styled from "styled-components";

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: scroll;
  // Hide scrollbar
  &::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const TaskList = ({ children }) => {
  return <StyledTaskList>{children}</StyledTaskList>;
};
