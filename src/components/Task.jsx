import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledTask = styled.div`
  background-color: #4b2449;
  padding: 10px;
  width: 374px;
  height: 48px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-size: 14px;
  margin-right: 10px;
`;

const IconDelete = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const Task = ({ name, fn }) => {
  return (
    <StyledTask>
      <Text>{name}</Text>
      <IconDelete icon={faTrash} onClick={fn} />
    </StyledTask>
  );
};
