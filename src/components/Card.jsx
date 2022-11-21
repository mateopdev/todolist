import React, { useRef, useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import { TaskList } from "./TaskList";
import { Task } from "./Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.main`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #193540;
  width: 445px;
  height: 600px;
  border-radius: 6px;
  padding: 10px;
`;

const StyledInput = styled(Input)`
  padding: 15px 35px 15px 15px;
  background-color: #ebedc3;
  border: none;
  border-radius: 6px;
  outline: none;
  width: 215px;
`;

const FormRow = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 20px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  padding: 20px;
  border: none;
  background-color: #ebedc3;
  cursor: pointer;
`;

const StyledButtonDeleteAll = styled(StyledButton)`
  background-color: #4b2436;
  color: white;
`;

const Footer = styled.footer`
  color: #d46a1b;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const Card = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [task, setTask] = useState(storedTasks);
  const inputRef = useRef();

  const addTask = () => {
    if (!inputRef.current.value) return;

    const newTask = {
      id: new Date().getTime().toString(), // uso la fecha actual como id
      name: inputRef.current.value,
    };

    setTask([...task, newTask]); // todo lo que tiene task mas la nueva task.

    inputRef.current.value = ""; // limpio el input
  };

  localStorage.setItem("tasks", JSON.stringify(task));

  const removeTask = (index) => {
    const newTasks = task.filter((elem) => {
      return index !== elem.id;
    });

    setTask(newTasks);
  };

  const deleteAll = () => {
    setTask([]);
  };

  return (
    <Container>
      <CardContainer>
        <Text>TO-DO LIST REACT</Text>
        <FormRow>
          <StyledInput ref={inputRef} placeholder="Introduce la tarea" />
          <StyledButton onClick={addTask}>
            <FontAwesomeIcon icon={faPlus} />
          </StyledButton>
          <StyledButtonDeleteAll onClick={deleteAll}>
            <FontAwesomeIcon icon={faTrash} />
          </StyledButtonDeleteAll>
        </FormRow>
        <TaskList>
          {task.map((task) => (
            <Task
              name={task.name}
              key={task.id}
              fn={() => removeTask(task.id)}
            />
          ))}
        </TaskList>
      </CardContainer>
      <Footer>
        {/* D46A1B */}
        <p>Creado por Mateo Peluzo</p>
      </Footer>
    </Container>
  );
};
