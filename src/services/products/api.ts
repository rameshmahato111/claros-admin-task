import type Product from "../../types/product";
import { apiClient } from "../apiClient";
import { BASE_URL } from "../config";

const Product_BASE_URL = `${BASE_URL}/products`;
export const productsApi = async () => {
  return apiClient<Product[]>(Product_BASE_URL)
};


