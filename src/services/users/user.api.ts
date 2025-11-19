import type { User } from "../../types/user";
import { apiClient } from "../apiClient";
import { BASE_URL } from "../config";

const USER_BASE_URL = `${BASE_URL}/users`

export const userApi = ()=> {
    return apiClient<User[]>(USER_BASE_URL)
}