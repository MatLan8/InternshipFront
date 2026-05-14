import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/User";
import axios from "axios";
import { API_BASE, API_ROUTES } from "./endpoints";

export const useGetAllUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ["getAllUsers"],
    queryFn: async () => {
      const { data } = await axios.get<User[]>(
        `${API_BASE}${API_ROUTES.User.getAll}`,
      );
      return data;
    },
  });
};
