import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoriesState, curCategoryState } from "../atom";

const Container = styled.div`
  width: 70%;
  padding: 20px 0;
  h2 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  form {
    * {
      border-radius: 10px;
      padding: 10px 7px;
    }
    input {
      width: 80%;
      outline: none;
      &:focus {
        background-color: ${(props) => props.theme.subBgColor};
        color: white;
      }
      &::placeholder {
        font-weight: 500;
      }
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
  categoryInput: string;
}

function CreateCategory() {
  const setCurCat = useSetRecoilState(curCategoryState);
  const [category, setCategory] = useRecoilState(categoriesState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onValid = ({ categoryInput }: IForm) => {
    if (categoryInput) {
      setValue("categoryInput", "");
      setCategory((prev) => [
        ...prev,
        { category: categoryInput, id: Date.now() },
      ]);
      localStorage.setItem(
        "categories",
        JSON.stringify([
          ...category,
          { category: categoryInput, id: Date.now() },
        ])
      );
      setCurCat(categoryInput);
    } else alert("fill in the Categories");
  };
  return (
    <Container>
      <h2>Category 입력</h2>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          autoComplete="off"
          {...register("categoryInput")}
          placeholder="Write a category"
        />
        <button>add</button>
      </form>
    </Container>
  );
}

export default CreateCategory;
