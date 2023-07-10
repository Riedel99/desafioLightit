import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-prueba-front-280718.cloudfunctions.net/",
});

export type Asset = Category[];

export interface Category {
  name: string;
  items: Item[];
}

export interface Item {
  name: string;
  img: string;
}

export const getAssets = async () => {
  const response = await Promise.all([
    api.get<Asset>("/terminaciones"),
    api.get<Asset>("/aberturas"),
    api.get<Asset>("/equipamiento"),
  ]);
  if (
    response[0].status === 200 &&
    response[1].status === 200 &&
    response[2].status === 200
  ) {
    return {
      terminaciones: response[0].data,
      aberturas: response[1].data,
      equipamiento: response[2].data,
    };
  }

  throw new Error("Error al obtener los activos");
};
