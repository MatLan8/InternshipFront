export const API_BASE = import.meta.env.VITE_BASE_URL;

export const API_ROUTES = {
  Item: {
    getAllFiltered: "/Item/GetAllFiltered",
    delete: "/Item/Delete",
  },
  User: {
    getAll: "/User/GetAll",
  },
};
