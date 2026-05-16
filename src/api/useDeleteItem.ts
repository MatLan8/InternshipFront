import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE, API_ROUTES } from "./endpoints";

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (itemId: string) => {
      await axios.delete(`${API_BASE}${API_ROUTES.Item.delete}/${itemId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllItemsFiltered"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
