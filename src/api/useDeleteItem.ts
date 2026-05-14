import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE, API_ROUTES } from "./endpoints";

export const useDeleteItem = () => {
  return useMutation<void, Error, string>({
    mutationFn: async (itemId: string) => {
      await axios.post(`${API_BASE}${API_ROUTES.Item.delete}`, {
        id: itemId,
      });
    },
  });
};
