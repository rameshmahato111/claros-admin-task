import { useQuery } from "@tanstack/react-query";
import { productsApi } from "./api";

export const useProductQuery=()=> {
return  useQuery({
    queryKey: ['products'],
    queryFn: productsApi
  })
}