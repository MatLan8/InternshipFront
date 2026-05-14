import { useQuery } from "@tanstack/react-query";
import type { Item } from "../types/Item";
import axios from "axios";
import { API_BASE, API_ROUTES } from "./endpoints";

export type ItemFilter = {
  itemTypes?: number[];
  comment?: string;
  userIds?: string[];
};

export const useGetAllItemsFiltered = (filters: ItemFilter) => {
  return useQuery<Item[], Error>({
    queryKey: ["getAllItemsFiltered", filters],
    queryFn: async () => {
      const { data } = await axios.get<Item[]>(
        `${API_BASE}${API_ROUTES.Item.getAllFiltered}`,
        {
          params: filters,
        },
      );

      return data;
    },
  });
};
