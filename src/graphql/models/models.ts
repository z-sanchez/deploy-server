import { dbConnection } from "../../connectors/db.js";
import { getAllCats } from "../../queries/cats.js";

export class CatModel {
  async getCats() {
    try {
      const [results] = await dbConnection.query(getAllCats);

      //@ts-expect-error need to add types
      return results.map((result) => {
        return {
          id: result.id,
          name: result.Name,
          imageSrc: result.ImageSrc,
        };
      });
    } catch (error) {
      return error;
    }
  }
}
