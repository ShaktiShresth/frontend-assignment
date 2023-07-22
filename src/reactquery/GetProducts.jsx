import { useQuery } from "react-query";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

const getAllProducts = async () => {
  const response = await axios.get(URL);
  console.log(response);
  return response.data;
};

export const UseGetAllProducts = () => {
  const { isLoading, data } = useQuery(["allProducts"], getAllProducts);
  return { data, isLoading };
};
