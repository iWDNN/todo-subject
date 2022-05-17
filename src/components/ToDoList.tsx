import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../atom";
import ToDo from "./ToDo";

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <List>
      {toDos.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </List>
  );
}

export default ToDoList;
