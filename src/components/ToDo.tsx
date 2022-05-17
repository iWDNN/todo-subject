import styled from "styled-components";
import { IToDo } from "../atom";

const Item = styled.li`
  width: 80%;
  background-color: ${(props) => props.theme.subBgColor};
  border-radius: 8px;
  display: flex;
  font-size: 12px;
  color: black;
  * {
    padding: 10px 10px;
  }
  overflow: hidden;
  margin: 5px 0;
`;
const Category = styled.div`
  width: 35%;
  background-color: yellowgreen;
  font-weight: 700;
`;
const Content = styled.div`
  width: 70%;
  background-color: antiquewhite;
`;

function ToDo({ toDo, category }: IToDo) {
  return (
    <Item>
      <Category>{category}</Category>
      <Content>{toDo}</Content>
    </Item>
  );
}

export default ToDo;
