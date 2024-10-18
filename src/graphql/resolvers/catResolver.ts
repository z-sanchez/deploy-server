import { CatModel } from "../models/models.js";

const Cat = new CatModel();

export const catResolver = {
  Query: {
    getCats: () => {
      return Cat.getCats();
    },
  },
};
