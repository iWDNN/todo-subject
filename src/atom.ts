import { atom, selector } from "recoil";

export interface IToDo {
  toDo: string;
  id: number;
  category: string;
}
export interface ICategory {
  category: string;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

export const categoriesState = atom<ICategory[]>({
  key: "categories",
  default: [],
});

export const curCategoryState = atom({
  key: "curCategory",
  default: "",
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const curCat = get(curCategoryState);
    return toDos.filter((todo) => (todo.category === curCat ? todo : null));
  },
});
