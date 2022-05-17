import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoriesState, curCategoryState } from "../atom";

const CategoriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;
  button {
    background-color: yellowgreen;
    font-size: 14px;
    padding: 5px 7px;
    border-radius: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
function CategoryList() {
  const categories = useRecoilValue(categoriesState);
  const setCurCat = useSetRecoilState(curCategoryState);
  const onClick = (category: string) => {
    setCurCat(category);
  };
  return (
    <>
      <CategoriesList>
        {categories.map((category) => (
          <button key={category.id} onClick={() => onClick(category.category)}>
            {category.category}
          </button>
        ))}
      </CategoriesList>
    </>
  );
}
export default CategoryList;
