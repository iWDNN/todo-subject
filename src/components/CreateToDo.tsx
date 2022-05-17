import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoriesState, curCategoryState, toDoState } from "../atom";

const Container = styled.div`
  width: 90%;
  padding: 20px 0;
  h2 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    * {
      border-radius: 10px;
      padding: 10px 7px;
    }
    input {
      outline: none;
      &:focus {
        background-color: ${(props) => props.theme.subBgColor};
        color: white;
      }
      &::placeholder {
        font-weight: 500;
      }
    }
    select {
      background-color: ${(props) => props.theme.subBgColor};
      color: white;
      text-transform: uppercase;
      font-weight: 700;
    }
    button {
      background-color: ${(props) => props.theme.subBgColor};
      color: white;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

interface IForm {
  todoInput: string;
  id: number;
  category: string;
}

function CreateToDo() {
  const [curCat, setCurCat] = useRecoilState(curCategoryState);
  const categories = useRecoilValue(categoriesState);
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    setCurCat(e.currentTarget.value);
  };

  const onValid = ({ todoInput }: IForm) => {
    if (todoInput) {
      setToDos((prev) => [
        ...prev,
        { toDo: todoInput, id: Date.now(), category: curCat },
      ]);
      localStorage.setItem(
        "toDos",
        JSON.stringify([
          ...toDos,
          { toDo: todoInput, id: Date.now(), category: curCat },
        ])
      );
      setValue("todoInput", "");
    } else alert("fill in the blanks");
  };
  return (
    <>
      <Container>
        <h2>Todo 입력</h2>
        {categories.length !== 0 ? (
          <form onSubmit={handleSubmit(onValid)}>
            <input
              autoComplete="off"
              {...register("todoInput")}
              placeholder="Write a to do"
            />
            <select value={curCat} onInput={onSelect}>
              {categories.map((category) => (
                <option value={category.category} key={category.id}>
                  {category.category}
                </option>
              ))}
            </select>
            <button>add</button>
          </form>
        ) : null}
      </Container>
    </>
  );
}

export default CreateToDo;
