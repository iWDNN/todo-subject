import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoriesState, curCategoryState, toDoState } from "./atom";
import CategoryList from "./components/CategoryList";
import CreateCategory from "./components/CreateCategory";
import CreateToDo from "./components/CreateToDo";
import ToDoList from "./components/ToDoList";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: 700;
  span:first-child {
    color: yellowgreen;
  }
  span:last-child {
    color: antiquewhite;
  }
`;

function ToDoApp() {
  const [category, setCategory] = useRecoilState(categoriesState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  const [curCat, setCurCat] = useRecoilState(curCategoryState);
  useEffect(() => {
    if (localStorage.getItem("toDos") && localStorage.getItem("categories")) {
      setToDos(JSON.parse(localStorage.getItem("toDos") as any));
      setCategory(JSON.parse(localStorage.getItem("categories") as any));
    }
  }, []);
  return (
    <Container>
      <Header>
        <Title>
          <span>To</span>
          <span>Do</span>
        </Title>
        <CreateCategory />
        {category.length !== 0 ? <CreateToDo /> : null}
      </Header>
      <CategoryList />
      <ToDoList />
    </Container>
  );
}

export default ToDoApp;
