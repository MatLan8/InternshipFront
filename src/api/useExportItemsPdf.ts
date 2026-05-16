import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_BASE, API_ROUTES } from "./endpoints";

export type ExportPdfRequest = {
  itemTypes?: number[];
  comment?: string;
  userIds?: string[];
  templateType: number;
};

export const useExportItemsPdf = () => {
  return useMutation<Blob, Error, ExportPdfRequest>({
    mutationFn: async (payload) => {
      const response = await axios.post(
        `${API_BASE}${API_ROUTES.Item.exportPdf}`,
        payload,
        {
          responseType: "blob",
        },
      );
      return response.data;
    },
  });
};
