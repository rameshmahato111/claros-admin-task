import { useQuery } from "@tanstack/react-query"
import { userApi } from "./user.api"

export const useUserQuery= ()=> {
    return useQuery({
        queryKey: ['user'],
        queryFn: userApi
    })
}